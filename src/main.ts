import './style.css';

import THREEx3 from 'three-x3';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import scene from './resources/scenes';

import knight from './resources/character/knight';

import * as THREE from 'three'

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight)
camera.position.z = 5

scene.add( knight );

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

document.querySelector<HTMLDivElement>('#app')!.appendChild(renderer.domElement);

var xSpeed = 0.2

document.addEventListener("keydown", onDocumentKeyDown, false);

function onDocumentKeyDown(event: KeyboardEvent) {
    var keyCode = event.code;
    if (keyCode == 'KeyD') {
			knight.position.x += xSpeed;
    } else if (keyCode == 'KeyA') {
      knight.position.x -= xSpeed;
		}
};

renderer.setAnimationLoop(() => {
	knight.rotation.x += 0.01;
	knight.rotation.y += 0.01;

	renderer.render(scene, camera);
})

const x3 = new THREEx3({
THREE,
OrbitControls,
camera,
renderer,
scene
})
