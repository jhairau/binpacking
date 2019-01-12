export const rotationTypeWHD = 0;
export const rotationTypeHWD = 1;
export const rotationTypeHDW = 2;
export const rotationTypeDHW = 3;
export const rotationTypeDWH = 4;
export const rotationTypeWDH = 5;

export const widthAxis = 0;
export const heightAxis = 1;
export const depthAxis = 2;

export const startPosition: [ number, number, number ] = [
  0,
  0,
  0
];

export const rotationTypeStrings = {
  [rotationTypeWHD]: 'rotationTypeWHD (w,h,d)',
  [rotationTypeHWD]: 'rotationTypeHWD (h,w,d)',
  [rotationTypeHDW]: 'rotationTypeHDW (h,d,w)',
  [rotationTypeDHW]: 'rotationTypeDHW (d,h,w)',
  [rotationTypeDWH]: 'rotationTypeDWH (d,w,h)',
  [rotationTypeWDH]: 'rotationTypeWDH (w,d,h)'
};

export class Item {
  rotationType: number = rotationTypeWHD;
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
    return rotationTypeStrings[this.rotationType];
  }

  /**
   * XYZ Dimensions of the item after rotation is applied
   */
  getDimension(): [ number, number, number ] {
    switch (this.rotationType) {
      case rotationTypeWHD:
        return [
          this.width,
          this.height,
          this.depth
        ];
      case rotationTypeHWD:
        return [
          this.height,
          this.width,
          this.depth
        ];
      case rotationTypeHDW:
        return [
          this.height,
          this.depth,
          this.width
        ];
      case rotationTypeDHW:
        return [
          this.depth,
          this.height,
          this.width
        ];
      case rotationTypeDWH:
        return [
          this.depth,
          this.width,
          this.height
        ];
      case rotationTypeWDH:
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
    return rectIntersect(this, i2, widthAxis, heightAxis) &&
      rectIntersect(this, i2, heightAxis, depthAxis) &&
      rectIntersect(this, i2, widthAxis, depthAxis);
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
