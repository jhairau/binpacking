import {
  Item,
  StartPosition
} from './item';
import { Bin } from './bin';
import {
  DimensionsCartesian,
  DimensionsLength
} from './models';

interface PackerOptions {
  removeEmptyBins?: boolean;
  optimiseBoxes?: boolean;
  restrictRotation?: false | { x: boolean, y: boolean, z: boolean }
}

const defaultPackerOptions: PackerOptions = {
  removeEmptyBins: false,
  optimiseBoxes: false,
  restrictRotation: false
};

export class Packer {
  bins: Bin[] = [];
  items: Item[] = [];
  unfitItems: Item[] = [];

  options: PackerOptions;

  constructor(options?: PackerOptions) {
    this.options = {
      ...defaultPackerOptions,
      ...options
    };
  }

  addBin(bin: Bin) {
    this.bins.push(bin);
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  findFittedBin(item: Item): Bin | null {
    for (let i = 0; i < this.bins.length; i++) {
      const bin = this.bins[ i ];

      // Check if item can fit in bin
      if (!bin.weighItem(item) || !bin.putItem(item, StartPosition)) {
        continue;
      }

      if (bin.items.length === 1 && bin.items[ 0 ] === item) {
        bin.items = [];
      }

      return bin;
    }
    return null;
  }

  getBiggerBinThan(bin: Bin): Bin | null {
    const volume = bin.volume;
    for (let i = 0; i < this.bins.length; i++) {
      const bin2 = this.bins[ i ];
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
    this.unfitItems.push(this.items[ 0 ]);
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
    const fit = bin.weighItem(items[ 0 ]) && bin.putItem(items[ 0 ], StartPosition);

    if (!fit) {
      const bin2 = this.getBiggerBinThan(bin);
      if (bin2) {
        return this.packToBin(bin2, items);
      }
      return this.items;
    }

    // Pack unpacked items.
    for (let i = 1; i < this.items.length; i++) {
      let fitted = false;
      const unpackedItem: Item = this.items[ i ];

      if (bin.weighItem(unpackedItem)) {
        // Try available pivots in current bin that are not intersect with
        // existing items in current bin.
        lookup:
          for (let dimensionIdx = 0; dimensionIdx < 3; dimensionIdx++) { // dimension
            for (let itemInBinIdx = 0; itemInBinIdx < bin.items.length; itemInBinIdx++) { // items loop
              let pv: [ number, number, number ];
              const packedItem: Item = bin.items[ itemInBinIdx ]; // item

              // shuffle item along an axis
              switch (dimensionIdx) { // dimension
                case DimensionsCartesian.x:
                  pv = [
                    packedItem.position[ DimensionsLength.width ] + packedItem.width,
                    packedItem.position[ DimensionsLength.height ],
                    packedItem.position[ DimensionsLength.depth ]
                  ];
                  break;
                case DimensionsCartesian.y:
                  pv = [
                    packedItem.position[ DimensionsLength.width ],
                    packedItem.position[ DimensionsLength.height ] + packedItem.height,
                    packedItem.position[ DimensionsLength.depth ]
                  ];
                  break;
                case DimensionsCartesian.z:
                default:
                  pv = [
                    packedItem.position[ DimensionsLength.width ],
                    packedItem.position[ DimensionsLength.height ],
                    packedItem.position[ DimensionsLength.depth ] + packedItem.depth
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
              bin = bin2; // interesting .....
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
   * Sort bins smallest to largest
   */
  sortBins() {
    this.bins.sort((a: Bin, b: Bin) => {
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
    this.items.sort((a: Item, b: Item) => {
      if (a.volume === b.volume) {
        return 0;
      }
      return a.volume > b.volume ? -1 : 1;
    });
  }

  /**
   * Pack the bins with the items
   */
  pack(): void {
    this.sortBins();
    this.sortItems();

    while (this.items.length > 0) {
      const bin = this.findFittedBin(this.items[ 0 ]);

      // Biggest item cannot fit in biggest bin, exit
      if (bin === null) {
        this.unfitItem();
        continue;
      }

      // Reduces this.items each time a bin is packed
      this.items = this.packToBin(bin, this.items);
    }

    if (this.options.removeEmptyBins) {
      this.bins = this.bins.filter((bin: Bin) => bin.items.length !== 0);
    }

  }
}
