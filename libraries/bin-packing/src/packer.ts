import {
  Item,
  startPosition
} from './item';
import { Bin } from './bin';
import {
  DimensionsCartesian,
  DimensionsLength
} from './models';

interface PackerOptions {

  /**
   * This might be a legacy feature
   */
  removeEmptyBins?: boolean;

  /**
   * By default the algorithm will try to pack the smallest fitting box available.
   * If you set this to true, we will attempt to reduce the amount of availableBins by starting
   * with the smallest bin that fits the entire items, if we cannot find a bin that fits
   * all of the items then the largest bin is used
   */
  optimiseBins?: boolean;

  /**
   * Are the bins provied unlimted in how many times they can be reused?
   */
  binsAreUnlimited: boolean;

  /**
   * Restrict rotation capabilities. You would do this at the packing level to make
   * physically packing the availableBins faster for the packing person.
   *
   * You can also restrict rotation on the Item level, where you may not want something on its side
   */
  restrictRotation?: false | { x: boolean, y: boolean, z: boolean };

  /**
   * Allow the user to specify custom intial sorting of items
   * This is handy if you have a physical picking line that is not sorted by volume
   * @param itemA
   * @param itemB
   */
  customItemSorting?: (itemA: Item, itemB: Item) => number;
}

const defaultPackerOptions: PackerOptions = {
  removeEmptyBins: false,
  optimiseBins: false,
  restrictRotation: false,
  binsAreUnlimited: true
};

export class Packer {
  usedBins: Bin[] = [];
  availableBins: Bin[] = [];
  items: Item[] = [];
  unfitItems: Item[] = [];

  options: PackerOptions;

  defaultItemSorting = (a: Item, b: Item) => {
    if (a.volume === b.volume) {
      return 0;
    }
    return a.volume > b.volume ? -1 : 1;
  }

  constructor(options?: PackerOptions) {
    this.options = {
      ...defaultPackerOptions,
      ...options
    };
  }

  addBin(bin: Bin) {
    this.availableBins.push(bin);
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  findFittedBin(item: Item): Bin | null {
    for (let i = 0; i < this.availableBins.length; i += 1) {
      const bin = this.availableBins[i];

      // Check if item can fit in bin
      if (!bin.weighItem(item) || !bin.putItem(item, startPosition)) {
        continue;
      }

      if (bin.items.length === 1 && bin.items[0] === item) {
        bin.items = [];
      }

      return bin;
    }
    return null;
  }

  getBiggerBinThan(bin: Bin): Bin | null {
    const volume = bin.volume;
    for (let i = 0; i < this.availableBins.length; i += 1) {
      const bin2 = this.availableBins[i];
      if (bin2.volume > volume) {
        return bin2;
      }
    }
    return null;
  }

  unfitItem() {
    if (this.items.length === 0) {
      return;
    }
    this.unfitItems.push(this.items[0]);
    this.items.splice(0, 1);
  }

  /**
   * Packs items into bin and returns items that cannot fit
   * @param bin
   * @param items
   */
  packToBin(bin: Bin, items: Item[]): Item[] {
    let bin2 = null;
    const unpacked = [];
    const fit = bin.weighItem(items[0]) && bin.putItem(items[0], startPosition);

    if (!fit) {
      const bin2 = this.getBiggerBinThan(bin);
      if (bin2) {
        return this.packToBin(bin2, items);
      }
      return this.items;
    }

    // Pack unpacked items.
    for (let i = 1; i < this.items.length; i += 1) {
      let fitted = false;
      const unpackedItem: Item = this.items[i];

      if (bin.weighItem(unpackedItem)) {
        // Try available pivots in current bin that are not intersect with
        // existing items in current bin.
        lookup:
          for (let dimensionIdx = 0; dimensionIdx < 3; dimensionIdx += 1) { // dimension
            for (let itemInBinIdx = 0; itemInBinIdx < bin.items.length; itemInBinIdx += 1) { // items loop
              let pv: [ number, number, number ];
              const packedItem: Item = bin.items[itemInBinIdx]; // item

              // shuffle item along an axis
              switch (dimensionIdx) { // dimension
                case DimensionsCartesian.x:
                  pv = [
                    packedItem.position[DimensionsLength.width] + packedItem.width,
                    packedItem.position[DimensionsLength.height],
                    packedItem.position[DimensionsLength.depth]
                  ];
                  break;
                case DimensionsCartesian.y:
                  pv = [
                    packedItem.position[DimensionsLength.width],
                    packedItem.position[DimensionsLength.height] + packedItem.height,
                    packedItem.position[DimensionsLength.depth]
                  ];
                  break;
                case DimensionsCartesian.z:
                default:
                  pv = [
                    packedItem.position[DimensionsLength.width],
                    packedItem.position[DimensionsLength.height],
                    packedItem.position[DimensionsLength.depth] + packedItem.depth
                  ];
                  break;
              }

              if (bin.putItem(unpackedItem, pv)) {
                fitted = true;
                break lookup;
              }
            }
          }
      }

      if (!fitted) {
        while (bin2 !== null) {
          bin2 = this.getBiggerBinThan(bin);
          if (bin2) {
            bin2.items.push(unpackedItem);
            const left = this.packToBin(bin2, bin2.items);
            if (left.length === 0) {
              // bin = bin2; // interesting .....
              fitted = true;
              break;
            }
          }
        }

        if (!fitted) {
          unpacked.push(unpackedItem);
        }
      }
    }

    return unpacked;
  }

  /**
   * Sort availableBins smallest to largest
   */
  sortAvailableBins() {
    this.availableBins.sort((a: Bin, b: Bin) => {
      if (a.volume === b.volume) {
        return 0;
      }
      return a.volume < b.volume ? -1 : 1;
    });
  }

  /**
   * sort items largest to smalles
   */
  sortItems() {
    const sortMethod = this.options.customItemSorting
      ? this.options.customItemSorting
      : this.defaultItemSorting;

    this.items.sort(sortMethod);
  }

  findOptimumBin(): Bin | null {
    const itemsTotals = this.items.reduce(
      (agg, item: Item) => (
      {
        volume: agg.volume + item.volume,
        weight: agg.weight + item.weight || 0
      }
      ),
      {
        volume: 0,
        weight: 0
      }
    );

    const length = this.availableBins.length;
    let optimumBin: Bin | null = null;

    for (let i = 0; i < length; i += 1) {
      const bin = this.availableBins[i];

      if (
        bin.volume < itemsTotals.volume || // items have too much volume
        (
          bin.maxWeight && bin.maxWeight < itemsTotals.weight
        ) // factoring weight and its too heavy
      ) {
        continue;
      }

      optimumBin = bin; // we have our bin, time to exit the loop
      break;
    }

    return optimumBin;
  }

  cloneBin(bin: Bin): Bin {
    return new Bin(bin.name, bin.width, bin.height, bin.depth, bin.maxWeight);
  }

  /**
   * Pack the availableBins with the items
   */
  pack(): void {
    this.sortAvailableBins();
    this.sortItems();

    while (this.items.length > 0) {
      let availableBin: Bin | null = null;

      if (this.options.optimiseBins) {
        const optimumBin = this.findOptimumBin();
        availableBin = optimumBin ? optimumBin : this.availableBins[this.availableBins.length - 1];
      } else {
        availableBin = this.findFittedBin(this.items[0]);
      }

      // Biggest item cannot fit in biggest availableBin, exit
      if (availableBin === null) {
        this.unfitItem();
        continue;
      }

      let bin: Bin = availableBin;

      if (this.options.binsAreUnlimited) {
        bin = this.cloneBin(availableBin);
        // Add the avaible bin to our used bins
        this.usedBins.push(bin);
      }

      // Reduces this.items each time a bin is packed
      this.items = this.packToBin(bin, this.items);
    }

    if (!this.options.binsAreUnlimited) {
      this.usedBins = this.availableBins;
    }

    // if (this.options.removeEmptyBins) {
    //   this.availableBins = this.availableBins.filter((bin: Bin) => bin.items.length !== 0);
    // }

  }

  stats() {
    const bins = this.usedBins.reduce(
      (agg: any[], bin) => {
        const totalItemsVolume = bin.items.reduce((agg, item) => agg + item.volume, 0);
        const totalItemsWeight = bin.items.reduce((agg, item) => agg + item.weight, 0);

        const result = {
          volume: bin.volume,
          usedVolume: totalItemsVolume,
          unusedVolume: bin.volume - totalItemsVolume,
          usedVolumePercent: totalItemsVolume / bin.volume * 100,
          unusedVolumePercent: 100 - totalItemsVolume / bin.volume * 100,
          usedWeight: totalItemsWeight
        };

        return [...agg, result];
      },
      []
    );

    return {
      bins,
      totals: {
        usedbins: this.usedBins.length,
        unusedVolumePercent: bins.reduce((agg, binStats) => agg + binStats.unusedVolumePercent, 0) / bins.length,
        totalBinVolume: this.usedBins.reduce((agg, bin) => agg + bin.volume, 0),
        totalWeightOfItems: bins.reduce((agg, binStats) => agg + binStats.usedWeight, 0)
      }
    };
  }
}
