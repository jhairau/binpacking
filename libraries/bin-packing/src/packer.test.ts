import {Bin} from './bin';
import {Item} from './item';
import {Packer} from './packer';

function shouldHaveXBins(packer: Packer, x: number) {
  expect(packer.usedBins).toHaveLength(x);
}

function shouldHaveXItemsInBin(bin: Bin, x: number) {
  expect(bin.items).toHaveLength(x);
}

function shouldHaveXUnfitItems(packer: Packer, x: number) {
  expect(packer.unfitItems).toHaveLength(x);
}

function allItemShouldHaveNoRotation(item: Item) {

}

function itemShouldHaveNoRotation(item: Item) {

}

describe('Single Bin', () => {
  describe('Packer sorts correctly', () => {
    const packer = new Packer();

    packer.addItem(new Item('Item Small', 10, 10, 10));
    packer.addItem(new Item('Item Large', 30, 30, 30));
    packer.addItem(new Item('Item Medium', 20, 20, 20));

    packer.sortItems();

    it('should sort items largest to smallest', () => {
      expect(packer.items[0].name).toEqual('Item Large');
      expect(packer.items[1].name).toEqual('Item Medium');
      expect(packer.items[2].name).toEqual('Item Small');
    });

  });

  describe('Packing 2 perfect fit stacked items', () => {
    const packer = new Packer();
    packer.addBin(new Bin('Bin1', 50, 50, 50));
    packer.addItem(new Item('Item 1', 50, 50, 25));
    packer.addItem(new Item('Item 2', 50, 50, 25));
    packer.pack();

    it('should have 2 usedBins', () => {
      shouldHaveXBins(packer, 1);
    });

    it('should not have unfit items', () => {
      shouldHaveXUnfitItems(packer, 0);
    });

    it('should have 2 items in bin 1', () => {
      console.log(JSON.stringify(packer));
      shouldHaveXItemsInBin(packer.usedBins[0], 2);
    });

    it('should be stacked in bin 1', () => {
      const item1 = packer.usedBins[0].items[0];
      const item2 = packer.usedBins[0].items[1];
      expect(item1.name).toEqual('Item 1');
      expect(item1.position[2]).toEqual(0);

      expect(item2.name).toEqual('Item 2');
      expect(item2.position[2]).toEqual(25);
    });

    it('should not have rotation on items', () => {
      const items = packer.usedBins[0].items;
      items.forEach((item) => {
        expect(item.rotationType).toEqual(0);
      });
    });
  });

  describe('Packing 2 perfect fit end to end items', () => {
    const packer = new Packer();
    packer.addBin(new Bin('Bin1', 100, 50, 50));
    packer.addItem(new Item('Item 1', 50, 50, 50));
    packer.addItem(new Item('Item 2', 50, 50, 50));
    packer.pack();

    it('should have 2 usedBins', () => {
      shouldHaveXBins(packer, 1);
    });

    it('should not have unfit items', () => {
      shouldHaveXUnfitItems(packer, 0);
    });

    it('should have 2 items in bin 1', () => {
      shouldHaveXItemsInBin(packer.usedBins[0], 2);
    });

    it('should be end to end in bin 1', () => {
      const item1 = packer.usedBins[0].items[0];
      const item2 = packer.usedBins[0].items[1];

      expect(item1.name).toEqual('Item 1');
      expect(item1.position[0]).toEqual(0);
      expect(item1.position[1]).toEqual(0);

      expect(item2.name).toEqual('Item 2');
      expect(item2.position[0]).toEqual(50);
      expect(item2.position[1]).toEqual(0);
    });

    it('should not have rotation on items', () => {
      const items = packer.usedBins[0].items;
      items.forEach((item) => {
        expect(item.rotationType).toEqual(0);
      });
    });
  });

  describe('Packing 3 items 1 half, 2 quarter', () => {
    const packer = new Packer();
    packer.addBin(new Bin('Bin1', 100, 50, 50));
    packer.addItem(new Item('Item Half', 50, 50, 50));
    packer.addItem(new Item('Item Quarter', 50, 25, 50));
    packer.addItem(new Item('Item Quarter', 50, 25, 50));
    packer.pack();

    it('should have 3 items in bin 1', () => {
      shouldHaveXItemsInBin(packer.usedBins[0], 3);
    });
  });
});

describe('Multi Bin', () => {
  describe('Packer sorts correctly', () => {
    const packer = new Packer();
    packer.addBin(new Bin('Bin Small', 10, 10, 10));
    packer.addBin(new Bin('Bin Large', 30, 30, 30));
    packer.addBin(new Bin('Bin Medium', 20, 20, 20));

    packer.sortAvailableBins();

    it('should sort usedBins smallest to largest', () => {
      expect(packer.availableBins[0].name).toEqual('Bin Small');
      expect(packer.availableBins[1].name).toEqual('Bin Medium');
      expect(packer.availableBins[2].name).toEqual('Bin Large');
    });

  });

  describe('2 usedBins no rotation', () => {
    const packer = new Packer({binsAreUnlimited: true});
    packer.addBin(new Bin('Bin Small', 10, 10, 10));
    // packer.addBin(new Bin('Bin Small', 10, 10, 10));
    // packer.addBin(new Bin('Bin Small', 10, 10, 10));
    // packer.addBin(new Bin('Bin Small', 10, 10, 10));
    // packer.addBin(new Bin('Bin Small', 10, 10, 10));
    packer.addBin(new Bin('Bin Large', 30, 30, 30));
    packer.addBin(new Bin('Bin Medium', 20, 20, 20));

    packer.addItem(new Item('Item 1: bin1', 10, 8, 10));
    packer.addItem(new Item('Item 2: bin1', 10, 5, 10));
    packer.addItem(new Item('Item 3: bin2', 10, 5, 10));
    packer.pack();

    it('a should have 2 usedBins', () => {
      shouldHaveXBins(packer, 2);
    });

    it('should bin in 2 small usedBins', () => {
      expect(packer.usedBins[0].name).toEqual('Bin Small');
      expect(packer.usedBins[1].name).toEqual('Bin Small');
    });

    it('should have 1 items in bin 1', () => {
      shouldHaveXItemsInBin(packer.usedBins[0], 1);
    });

    it('should have 2 items in bin 2', () => {
      shouldHaveXItemsInBin(packer.usedBins[1], 2);
    });

  });
});

describe('Rotation', () => {

  describe('Rotate NONE', () => {
    const packer = new Packer({binsAreUnlimited: true});
    packer.addBin(new Bin('Bin Rectangle', 100, 50, 50));
    packer.addItem(new Item('Item Wide:', 100, 50, 50));
    packer.pack();

    it('should have rotationType of 0', () => {
      expect(packer.usedBins[0].items[0].rotationType).toEqual(0);
    });

    it('should have position [0,0,0]', () => {
      expect(packer.usedBins[0].items[0].position)
        .toEqual([
          0,
          0,
          0
        ]);
    });
  });

  describe('Rotate Z Axis', () => {
    const packer = new Packer({binsAreUnlimited: true});
    packer.addBin(new Bin('Bin Rectangle', 100, 50, 50));
    packer.addItem(new Item('Item Tall:', 50, 100, 50));
    packer.pack();

    it('should have rotationType of 1', () => {
      expect(packer.usedBins[0].items[0].rotationType).toEqual(1);
    });

    it('should have Dimension [100, 50 , 50]', () => {
      expect(packer.usedBins[0].items[0].getDimension())
        .toEqual([
          100,
          50,
          50
        ]);
    });
  });

  // TODO: Fix
  describe('Rotate Y Axis', () => {
    const packer = new Packer({binsAreUnlimited: true});
    packer.addBin(new Bin('Rectangle', 100, 50, 50));
    packer.addItem(new Item('Item Half of bin', 100, 25, 50));
    packer.addItem(new Item('Item Half of bin', 100, 25, 25));
    packer.pack();

    it('should have rotationType of 2', () => {
      expect(packer.usedBins[0].items[0].rotationType).toEqual(0);
    });

    it('should have Dimension [100,25,50]', () => {
      expect(packer.usedBins[0].items[0].getDimension())
        .toEqual([
          100,
          25,
          50
        ]);
    });
  });
});
