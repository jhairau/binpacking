export const RotationType_WHD = 0;
export const RotationType_HWD = 1;
export const RotationType_HDW = 2;
export const RotationType_DHW = 3;
export const RotationType_DWH = 4;
export const RotationType_WDH = 5;

export const WidthAxis = 0;
export const HeightAxis = 1;
export const DepthAxis = 2;

export const StartPosition: [ number, number, number ] = [
  0,
  0,
  0
];

export const RotationTypeStrings = {
  [RotationType_WHD]: 'RotationType_WHD (w,h,d)',
  [RotationType_HWD]: 'RotationType_HWD (h,w,d)',
  [RotationType_HDW]: 'RotationType_HDW (h,d,w)',
  [RotationType_DHW]: 'RotationType_DHW (d,h,w)',
  [RotationType_DWH]: 'RotationType_DWH (d,w,h)',
  [RotationType_WDH]: 'RotationType_WDH (w,d,h)'
};

export class Item {
  rotationType: number = RotationType_WHD;
  volume: number = 0;
  position: [ number, number, number ] = [
    0,
    0,
    0
  ]; // x, y, z

  constructor(
    public name: string,
    public width: number,
    public height: number,
    public depth: number,
    public weight: number = 0,
    public restrictRotation: false | { x: boolean, y: boolean, z: boolean } = false
  ) {
    this.volume = width * height * depth;
  }

  getRotationTypeString(): string {
    // @ts-ignore
    return RotationTypeStrings[this.rotationType];
  }

  /**
   * XYZ Dimensions of the item after rotation is applied
   */
  getDimension(): [ number, number, number ] {
    switch (this.rotationType) {
      case RotationType_WHD:
        return [
          this.width,
          this.height,
          this.depth
        ];
      case RotationType_HWD:
        return [
          this.height,
          this.width,
          this.depth
        ];
      case RotationType_HDW:
        return [
          this.height,
          this.depth,
          this.width
        ];
      case RotationType_DHW:
        return [
          this.depth,
          this.height,
          this.width
        ];
      case RotationType_DWH:
        return [
          this.depth,
          this.width,
          this.height
        ];
      case RotationType_WDH:
        return [
          this.width,
          this.depth,
          this.height
        ];
      default:
        return [
          0,
          0,
          0
        ];
    }
  }

  intersect(i2: Item) {
    return rectIntersect(this, i2, WidthAxis, HeightAxis) &&
      rectIntersect(this, i2, HeightAxis, DepthAxis) &&
      rectIntersect(this, i2, WidthAxis, DepthAxis);
  }
}

export const rectIntersect = (i1: Item, i2: Item, x: number, y: number) => {
  const d1 = i1.getDimension();
  const d2 = i2.getDimension();

  const cx1 = i1.position[x] + d1[x] / 2;
  const cy1 = i1.position[y] + d1[y] / 2;
  const cx2 = i2.position[x] + d2[x] / 2;
  const cy2 = i2.position[y] + d2[y] / 2;

  const ix = Math.max(cx1, cx2) - Math.min(cx1, cx2);
  const iy = Math.max(cy1, cy2) - Math.min(cy1, cy2);

  return ix <
    (
      d1[x] + d2[x]
    ) /
    2 &&
    iy <
    (
      d1[y] + d2[y]
    ) /
    2;
};
