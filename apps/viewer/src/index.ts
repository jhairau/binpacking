import {Mesh, BoxGeometry, PhongMaterial, EmphasisMaterial, CameraControl, Group, getDefaultScene} from 'xeogl';
import {Packer} from "../../../libraries/bin-packing/src/packer"
import {Bin} from "../../../libraries/bin-packing/src/bin"
import {Item} from "../../../libraries/bin-packing/src/item"

interface BoxOptions {
    parent?: Mesh;
    position: number[];
    pickable: boolean;
    boxGeometryOptions: BoxGeometryOptions
}

interface BoxGeometryOptions {
    xSize: number;
    ySize: number;
    zSize: number;
}

const makeBox = (boxOptions: BoxOptions, children: Mesh[] = []) => {
    const mesh =  new Mesh({
        geometry: new BoxGeometry(boxOptions.boxGeometryOptions),
        children,
        position: boxOptions.position,
        parent: boxOptions.parent,
        material: new PhongMaterial({
            diffuse: [0.2, 0.2, 1.0]
        }),
        ghostMaterial: new EmphasisMaterial({
            edges: true,
            edgeAlpha: 1.0,
            edgeColor: [0.2, 1.0, 0.2],
            edgeWidth: 2,
            vertices: true,
            vertexAlpha: 1.0,
            vertexColor: [0.6, 1.0, 0.6],
            vertexSize: 8,
            fill: true,
            fillColor: [0.5, 0, 0],
            fillAlpha: 0.7
        }),
        ghosted: true
    });

    return mesh;
}


const packer = new Packer({binsAreUnlimted: true});
packer.addBin(new Bin('Bin Small', 10, 10, 10));
packer.addBin(new Bin('Bin Large', 30, 30, 30));
packer.addBin(new Bin('Bin Medium', 20, 20, 20));

packer.addItem(new Item('Item 1: bin1', 10, 8, 10));
packer.addItem(new Item('Item 2: bin1', 10, 5, 10));
packer.addItem(new Item('Item 3: bin2', 10, 5, 10));
packer.pack();


packer.usedBins
    .map((bin: Bin, idx: number, array: Bin[]) => {
        const xPosition = idx === 0 ? 0 : array[idx-1].width * 3;
        const binGeometry = makeBox({
                boxGeometryOptions: {
                    xSize: bin.width,
                    ySize: bin.height,
                    zSize: bin.depth,
                },
                position: [xPosition, 0, 0],
                pickable: true
            },
            []
        )

        bin.items
            .forEach(
                (item: Item) => {
                    const [xSize, ySize, zSize] = item.getDimension()
                    /**
                     * Note we are using a Cartesian coordinate system
                     * Objects are placed relative to the parent at 0,0,0 of the parent
                     */
                    const position = [
                        (item.position[0] * 2) - bin.width + xSize,
                        (item.position[1] * 2) - bin.height + ySize,
                        (item.position[2] * 2) - bin.depth + zSize
                    ]

                    console.log(position)

                    return makeBox({
                        boxGeometryOptions: {
                            xSize,
                            ySize,
                            zSize,
                        },
                        parent: binGeometry,
                        position,
                        pickable: false
                    })
                }
            )


        console.log(binGeometry)
    })

const scene = getDefaultScene()
let lastEntity:Mesh = null;
let lastColorize:Mesh = null;
const input = scene.input

input.on("mousemove", function (coords: number[]) {
    const hit = scene.pick({
        canvasPos: coords
    });
    if (hit) {
        if (!lastEntity || hit.mesh.id !== lastEntity.id) {
            if (lastEntity) {
                lastEntity.colorize = lastColorize;
            }
            lastEntity = hit.mesh;
            lastColorize = hit.mesh.ghostMaterial.fillColor.slice();
            hit.mesh.ghostMaterial.fillColor = [0, 0, 0];
        }
    } else {
        if (lastEntity) {
            lastEntity.ghostMaterial.fillColor  = lastColorize;
            lastEntity = null;
        }
    }
});

new CameraControl()
