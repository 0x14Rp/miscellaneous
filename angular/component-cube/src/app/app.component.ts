import {Component, OnInit} from '@angular/core';
import * as THREE from 'three-full';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'component-cube';

  ngOnInit(): void {

    this.cube();

  }

  cube() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 10000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 1000;

    const render = () => {
      requestAnimationFrame(render);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    render();

  }

  linea() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();
    //create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial({color: 0x0000ff});

    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    renderer.render(scene, camera);
  }


}
