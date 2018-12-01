// import * as THREE from 'three';
declare var THREE: THREE;
declare var window: {[key: string]: any} ;
// window.THREE = THREE;
// import './orbit';
import {
  Packer,
  Bin,
  Item
} from '../../../libraries/bin-packing/src/index';
import { packer } from './youfoodz.order';
console.log(packer);

const el = window.document.getElementById('info');
if (el) {
  // el.innerHTML = `${time}ms to pack ${bins.length} bins`;
}

const scene = new THREE.Scene();
//  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function renderBinItems(parent: any, bin: Bin, items: Item[]) {
  items.forEach((item) => {

    let color: any = '';
    switch (item.rotationType) {
      case 0:
        color = 0xffffff;
        break;
      case 1:
        color = 0x0F3CFF;
        break;
      case 2:
        color = 0xFF358F;
        break;
      case 3:
        color = 0xFF5F49;
        break;

      case 4:
        color = 0xFFB40F;
        break;
      case 5:
        color = 0x8FFF49;
        break;
    }

    const geometry = new THREE.BoxGeometry(item.width, item.height, item.depth);
    const material = new THREE.MeshBasicMaterial({
      color,
      wireframe: true
    });
    const cube2 = new THREE.Mesh(geometry, material);

    if (item.rotationType === 0) {
      cube2.position.x = item.position[ 0 ] - bin.width / 2 + item.width / 2;
      cube2.position.y = item.position[ 1 ] - bin.height / 2 + item.height / 2;
      cube2.position.z = item.position[ 2 ] - bin.depth / 2 + item.depth / 2;
    }

    if (item.rotationType === 1) {
      // geometry.rotateOnAxis()
      geometry.rotateZ(-1.57);
      geometry.rotateX(-1.57);

      cube2.position.x = item.position[ 0 ] - bin.width / 2 + item.height / 2;
      cube2.position.y = item.position[ 1 ] - bin.height / 2 + item.width / 2;
      cube2.position.z = item.position[ 2 ] - bin.depth / 2 + item.depth / 2;
    }

    if (item.rotationType === 2) {
      geometry.rotateY(1.57);
      geometry.rotateZ(1.57);

      cube2.position.x = item.position[ 0 ] - bin.width / 2 + item.height / 2;
      cube2.position.y = item.position[ 1 ] - bin.height / 2 + item.depth / 2;
      cube2.position.z = item.position[ 2 ] - bin.depth / 2 + item.width / 2;
    }

    if (item.rotationType === 3) {
      geometry.rotateY(-1.57);
      // geometry.rotateX(-1.57)

      cube2.position.x = item.position[ 0 ] - bin.width / 2 + item.depth / 2;
      cube2.position.y = item.position[ 1 ] - bin.height / 2 + item.height / 2;
      cube2.position.z = item.position[ 2 ] - bin.depth / 2 + item.width / 2;
    }

    parent.add(cube2);
  });
}

for (let i = 0; i < 2; i++) {
  packer.bins.forEach((bin: Bin, idx: number) => {
    const cubePositionX = parseInt(`${idx}000`, 10) / 2;
    const cubePositionY = parseInt(`${i + 1}000`, 10) / 1.3;

    const geometry = new THREE.BoxGeometry(bin.width, bin.height, bin.depth);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = cubePositionX;
    cube.position.y = cubePositionY;
    scene.add(cube);

    if (i === 0) { // first level
      renderBinItems(cube, bin, bin.items.filter((item: Item) => item.position[ 2 ] === 0));
    } else {
      renderBinItems(cube, bin, bin.items.filter((item: Item) => item.position[ 2 ] !== 0));
    }

  });
}

packer.bins.forEach((bin: Bin, idx: number) => {
  const cubePosition = parseInt(`${idx}000`, 10) / 2;
  const geometry = new THREE.BoxGeometry(bin.width, bin.height, bin.depth);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = cubePosition;
  scene.add(cube);

  renderBinItems(cube, bin, bin.items);
});

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);

const controls = new THREE.OrbitControls(camera);

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 20, 1000);
controls.update();

function animate() {

  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);

}

animate();
