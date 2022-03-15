import React, { useState, useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
// import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

// import { Stats } from 'three/examples/jsm/libs/stats.module'
const CameraController = () => {
  // const [text, setText] = useState();
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleStationBtnClick = () => {
    console.log('btn-click');
    setIsToggleOn(true);
    if (isToggleOn === true) {
      setIsToggleOn(false);
    }
  };

  useEffect(() => {
    console.log('useEffect');
    initThree();
  }, []);
  const initThree = () => {
    let scene;
    let camera;
    let renderer;
    let container = document.getElementById('webgl');
    console.log('container:' + container);

    // const stats = Stats()
    // container.appendChild(stats.dom)
    var mouseDown = false,
      mouseX = 0,
      mouseY = 0,
      mouseDeletaX = 0,
      mouseDeletaY = 0;
    // camera setup
    const fov = 60;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    let starMesh;
    let ambientlight;
    let pointLight;
    let Helper;
    let earthMesh;
    let cloudGeometry;
    let cloudMesh;
    let cloudMetarial;
    let starGeometry;
    let starMaterial;
    let controls;
    let notRotateGroup;
    let group;
    const Init = () => {
      // scene setup
      scene = new THREE.Scene();
      group = new THREE.Group();
      notRotateGroup = new THREE.Group();
      scene.add(group);
      camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 2;
      camera.lookAt(scene.position);
      scene.add(camera);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(
        window.devicePixelRatio ? window.devicePixelRatio : 1
      );
      renderer.autoClear = false;
      renderer.setClearColor(0x000000, 0.0);
      container.appendChild(renderer.domElement);
      // orbit control setup
      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = false;
      //可以縮放
      controls.enableZoom = false;
      controls.enabled = false;
      //new THREE.TextureLoader().load('img/grid.png')
      let earthMaterialMapTexture = new TextureLoader().load(
        './index_earth/earthmap1k.jpg'
      );
      let earthMaterialBumpTexture = new TextureLoader().load(
        './index_earth/earthbump1k.jpg'
      );
      console.log(earthMaterialMapTexture);
      console.log(earthMaterialBumpTexture);
      // earth material
      const earthMaterial = new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: earthMaterialMapTexture,
        bumpMap: earthMaterialBumpTexture,
        bumpScale: 0.3,
      });
      // earth geometry
      const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
      // #region  ScrenBulid
      // earth mesh
      earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
      group.add(earthMesh);
      // cloud Geometry
      cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);
      let cloudMapTexture = new TextureLoader().load(
        './index_earth/earthCloud.png'
      );
      // cloud metarial
      cloudMetarial = new THREE.MeshPhongMaterial({
        map: cloudMapTexture,
        transparent: true,
      });
      // cloud mesh
      cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
      group.add(cloudMesh);
      // galaxy geometry
      starGeometry = new THREE.SphereGeometry(80, 64, 64);
      let galaxyTexture = new THREE.TextureLoader().load(
        './index_earth/galaxy.png',
        function (texture) {
          console.log('OK');
          console.log(texture);
        },
        // 目前暂不支持onProgress的回调
        undefined,
        // onError回调
        function (err) {
          console.error(err);
        }
      );
      // galaxy material
      starMaterial = new THREE.MeshBasicMaterial({
        map: galaxyTexture,
        side: THREE.BackSide,
      });
      // galaxy mesh
      starMesh = new THREE.Mesh(starGeometry, starMaterial);
      notRotateGroup.add(starMesh);
      scene.add(notRotateGroup);
      // ambient light
      ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
      group.add(ambientlight);
      // point light
      pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(5, 3, 5);
      group.add(pointLight);
      // point light helper
      Helper = new THREE.PointLightHelper(pointLight);
      group.add(Helper);
      //#endregion
    };
    // renderer setup
    // current fps
    // const stats = Stats()
    // document.body.appendChild(stats.dom)
    // spinning animation
    const animate = () => {
      requestAnimationFrame(animate);
      starMesh.rotation.y -= 0.0004;
      earthMesh.rotation.y -= 0.0015;
      cloudMesh.rotation.y -= 0.001;
      if (mouseDown) {
        earthMesh.rotation.x += mouseDeletaY * 0.01;
        earthMesh.rotation.y += mouseDeletaX * 0.01;
        // starMesh.rotation.x += mouseDeletaY * 0.01
        // starMesh.rotation.y += mouseDeletay * 0.01
        cloudMesh.rotation.x += mouseDeletaY * 0.01;
        cloudMesh.rotation.y += mouseDeletaX * 0.01;
        mouseDeletaX = 0;
        mouseDeletaY = 0;
        // console.log(mouseDeletaX, mouseDeletaY)
      }
      controls.update();
      render();
      // stats.update()
    };

    // rendering
    function render() {
      renderer.render(scene, camera);
    }
    //#region  MouseEvent
    function onMouseMove(evt) {
      if (!mouseDown) {
        return;
      }
      // console.log(evt)
      evt.preventDefault();

      mouseDeletaX = evt.clientX - mouseX;
      mouseDeletaY = evt.clientY - mouseY;
      mouseX = evt.clientX;
      mouseY = evt.clientY;
      // rotateScene(deltaX, deltaY)
    }

    function onMouseDown(evt) {
      evt.preventDefault();
      mouseDown = true;
      mouseX = evt.clientX;
      mouseY = evt.clientY;
    }

    function onMouseUp(evt) {
      evt.preventDefault();

      mouseDown = false;
    }

    function addMouseHandler(canvas) {
      console.log(canvas);
      // canvas 內滑鼠操作事件
      canvas.addEventListener(
        'mousemove',
        function (e) {
          onMouseMove(e);
        },
        false
      );
      canvas.addEventListener(
        'mousedown',
        function (e) {
          onMouseDown(e);
          // console.log('onMouseDown')
        },
        false
      );
      canvas.addEventListener(
        'mouseup',
        function (e) {
          onMouseUp(e);
        },
        false
      );
    }
    addMouseHandler(window);
    //#endregion
    Init();
    animate();
  };
  return (
    <>
      <div class="index-earth-container">
        <div class="index-sec1-title">APEXING SOON</div>
        <div class="index-earth">
          <div class="index-earth-speed">
            <div class="index-earth-speed-title">Earth</div>
            <div class="index-earth-speed-text">TILT____ 23.26</div>
            <div class="index-earth-speed-text">DAY____ 23.9</div>
            <div class="index-earth-speed-text">YEAR____ 365.3</div>
          </div>
        </div>
        <div className="index-taiwanstation">
          <div className="index-taiwanstation_card_container">
            <div className="index-taiwanstation_card">
              <div className="index-taiwanstation_card_front">
                <img src="./index_img/taiwanstation.png" alt="" />
              </div>
              <div className="index-taiwanstation_card_back">
                <img src="./index_img/taiwanstation.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="index_button_container">
          <button
            className="taiwan-station-btn"
            onClick={handleStationBtnClick}
          >
            <img src="./index_img/watchmore.png" alt="" />
          </button>
          <div
            className="taiwan-station-text"
            style={{
              visibility: isToggleOn === true ? 'visible' : 'hidden',
              opacity: isToggleOn === true ? '0.8' : '0.3',
              lineHeight: isToggleOn === true ? '2' : '1.5',
            }}
          >
            太空站設立於台灣-台北，經過數年由多個模組在軌道上組裝而成，特點是多艙，積木式結構。
          </div>
        </div>
      </div>
      <div id="webgl"></div>
    </>
  );
};
export default CameraController;
