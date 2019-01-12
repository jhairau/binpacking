import {
  DimensionsCartesian,
  DimensionsLength
} from './models';
import { Item } from './item';

export class Bin {

  public volume = 0;
  items: Item[] = [];

  constructor(
    public name: string,
    public width: number,
    public height: number,
    public depth: number,
    public maxWeight?: number
  ) {
    this.volume = width * height * depth;
  }

  getPackedWeight() {
    return this.items.reduce(
      (weight, item) => weight + item.weight,
      0
    );
  }

  weighItem(item: Item) {
    return !this.maxWeight
      || item.weight + this.getPackedWeight() <= this.maxWeight;
  }

  putItem(item: Item, p: [ number, number, number ]) {
    let fit = false;

    item.position = p;
    for (let i = 0; i < 6; i++) {

      item.rotationType = i;
      const d = item.getDimension();

      if ( // doesn't fit
        this.width < p[DimensionsCartesian.x] + d[DimensionsLength.width] ||
        this.height < p[DimensionsCartesian.y] + d[DimensionsLength.height] ||
        this.depth < p[DimensionsCartesian.z] + d[DimensionsLength.depth]
      ) {
        continue;
      }

      fit = true;

      // Check to see if the item intersects with another item
      for (let idx = 0; idx < this.items.length; idx++) {
        const itemInBox = this.items[idx];
        if (item.intersect(itemInBox)) {
          fit = false;
          break;
        }
      }

      if (fit) {
        this.items.push(item);
      }

      return fit;
    }

    return fit;
  }
}
