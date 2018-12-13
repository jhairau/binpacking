declare var THREE: THREE;
declare var TweenLite: any;
declare var TimelineLite: any;
declare var window: { [ key: string ]: any };
import {
  Packer,
  Bin,
  Item
} from '../../../libraries/bin-packing/src/index';
import { packer } from './youfoodz.order';

// @ts-ignore
import * as throttle from 'lodash/throttle';

const debounced = throttle(
  (parent: any, cube: any) => {
    debugger;
    parent.add(cube);
  },
  250
);

console.log(packer);
console.log(packer.stats());

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function itemTexture(color: any, num: number) {
  return new THREE.MeshBasicMaterial({
    color,
    wireframe: true
  });
}

function renderBinItems(parent: any, bin: Bin, items: Item[]) {
  items.forEach((item, idx: number) => {

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

    let geometry;
    const [ width, height, depth ] = item.getDimension();
    if (item.name.indexOf('ZYF') !== -1) {
      const radius = (
        width / 2
      );
      // geometry = new THREE.CylinderGeometry(radius, radius, height, 32);
      geometry = new THREE.BoxGeometry(width, height, depth);
    } else {
      geometry = new THREE.BoxGeometry(width, height, depth);
    }

    const material = itemTexture(color, idx + 1);

    const cube2 = new THREE.Mesh(geometry, material);

    cube2.position.x = item.position[ 0 ] - bin.width / 2 + width / 2;
    cube2.position.y = item.position[ 1 ] - bin.height / 2 + height / 2;
    cube2.position.z = item.position[ 2 ] - bin.depth / 2 + depth / 2;
    parent.add(cube2);
  });
}
//
// for (let i = 0; i < 2; i++) {
//   packer.usedBins.forEach((bin: Bin, idx: number) => {
//     const cubePositionX = parseInt(`${idx}000`, 10) / 2;
//     const cubePositionY = parseInt(`${i + 1}000`, 10) / 1.3;
//
//     const geometry = new THREE.BoxGeometry(bin.width, bin.height, bin.depth);
//     const material = new THREE.MeshBasicMaterial({
//       color: 0xffffff,
//       wireframe: true
//     });
//     const cube = new THREE.Mesh(geometry, material);
//     cube.position.x = cubePositionX;
//     cube.position.y = cubePositionY;
//     scene.add(cube);
//
//     if (i === 0) { // first level
//       renderBinItems(cube, bin, bin.items.filter((item: Item) => item.position[ 2 ] === 0));
//     } else {
//       renderBinItems(cube, bin, bin.items.filter((item: Item) => item.position[ 2 ] !== 0));
//     }
//
//   });
// }

packer.usedBins.forEach((bin: Bin, idx: number) => {
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

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 0, 700);

scene.add(camera);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

////////////////////////////////////////

const controls = new THREE.TrackballControls(camera);

controls.rotateSpeed = 3.6;
controls.zoomSpeed = 0.8;
controls.panSpeed = 1;

controls.noZoom = false;
controls.noPan = false;

controls.staticMoving = false;
controls.dynamicDampingFactor = 0.12;

controls.enabled = true;
TweenLite.ticker.addEventListener('tick', controls.update);

////////////////////////////////////////

const timeline = new TimelineLite({
  onStart() {
    TweenLite.ticker.removeEventListener('tick', controls.update);
    controls.enabled = false;
  },
  onComplete() {
    TweenLite.ticker.addEventListener('tick', controls.update);
    controls.position0.copy(camera.position);
    controls.reset();
    controls.enabled = true;
  }
});
const easing = 'Expo.easeInOut';

////////////////////////////////////////

camera.reset = function () {

  const pos = {
    x: 0,
    y: 0
  };
  const distance = 1000;
  const speed = 1;

  if (camera.parent !== scene) {
    const pos = camera.position.clone();
    camera.parent.localToWorld(camera.position);
    scene.add(camera);
  }

  timeline.clear();
  timeline.to(camera.position, speed, {
    x: pos.x,
    y: pos.y,
    z: distance,
    ease: easing
  }, 0);
  timeline.to(
    camera.rotation,
    speed,
    {
      x: 0,
      y: 0,
      z: 0,
      ease: easing
    },
    0
  );

};

////////////////////////////////////////

camera.getDistance = function (object: any) {

  const boundingBox = new THREE.Box3();
  boundingBox.setFromObject(object);

  // Set camera distance
  const vFOV = camera.fov * Math.PI / 180;
  const ratio = 2 * Math.tan(vFOV / 2);
  const screen = ratio * camera.aspect; // ( renderer.domElement.width / renderer.domElement.height );
  const size = Math.max(boundingBox.max.y, boundingBox.max.x);

  const distance = (
    size / screen
    ) +
    (
      boundingBox.max.z / screen
    );

  return distance;
};

////////////////////////////////////////

camera.zoom = function (object: any) {

  const pos = camera.position.clone();
  object.worldToLocal(camera.position);
  object.add(camera);

  const speed = 1;
  timeline.clear();

  timeline.to(camera.position, speed, {
    x: pos.x,
    y: pos.y,
    z: camera.getDistance(object),
    ease: easing
  }, 0);

};

////////////////////////////////////////

let startX: number;
let startY: number;
const $target = $(renderer.domElement);
let selected: any;

function mouseUp(e: any) {
  // e = e.originalEvent || e;
  e.preventDefault();

  const x = (
    e.touches ? e.touches[ 0 ].clientX : e.clientX
  );
  const y = (
    e.touches ? e.touches[ 0 ].clientY : e.clientY
  );
  const diff = Math.max(Math.abs(startX - x), Math.abs(startY - y));

  if (diff > 40) {
    return;
  }

  const mouse = {
    x: (
      x / window.innerWidth
    ) * 2 - 1,
    y: -(
      y / window.innerHeight
    ) * 2 + 1
  };

  const vector = new THREE.Vector3(mouse.x, mouse.y).unproject(camera);
  const raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
  const intersects = raycaster.intersectObject(scene, true);
  if (intersects.length > 0 && intersects[ 0 ].object !== selected) {
    selected = intersects[ 0 ].object;
    camera.zoom(selected);
  } else {
    selected = null;
    camera.reset();
  }
}

function mouseDown(e: any) {
  // e = e.originalEvent || e;
  startX =
    (
      e.touches ? e.touches[ 0 ].clientX : e.clientX
    );
  startY =
    (
      e.touches ? e.touches[ 0 ].clientY : e.clientY
    );

  $target.one('mouseup touchend', mouseUp);

  setTimeout(function () {
    $target.off('mouseup.part touchend.part');
  }, 300);
}

$target.on('mousedown touchend', mouseDown);
