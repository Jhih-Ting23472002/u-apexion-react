import React, { useState, useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
// import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { motion } from 'framer-motion';

// import { Stats } from 'three/examples/jsm/libs/stats.module'
const CameraController = () => {
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
        './index_earth/earthbump.jpg'
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
      // evt.preventDefault();
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
          // console.log('onMouseDown');
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
        <div class="index_sec1-icon">
          <motion.svg
            className="index-svg"
            width="118"
            height="36"
            viewBox="0 0 31 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // animate={{ rotate: 360 }}
            // transition={{ duration: 2 }}
            animate={{ y: 100, x: 100 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <motion.path
              d="M24.176 2L24.3897 1.77488C24.332 1.72012 24.2555 1.68959 24.176 1.68959V2ZM0.655109 2L2.44727 3.79216L4.23942 2L2.44727 0.207843L0.655109 2ZM2.44727 2.31041H3.05084V1.68959H2.44727V2.31041ZM4.25799 2.31041H5.46515V1.68959H4.25799V2.31041ZM6.6723 2.31041H7.87945V1.68959H6.6723V2.31041ZM9.0866 2.31041H10.2938V1.68959H9.0866V2.31041ZM11.5009 2.31041H12.7081V1.68959H11.5009V2.31041ZM13.9152 2.31041H15.1224V1.68959H13.9152V2.31041ZM16.3295 2.31041H17.5367V1.68959H16.3295V2.31041ZM18.7438 2.31041H19.951V1.68959H18.7438V2.31041ZM21.1581 2.31041H22.3653V1.68959H21.1581V2.31041ZM23.5724 2.31041H24.176V1.68959H23.5724V2.31041ZM23.9623 2.22512L24.4796 2.71627L24.9071 2.26604L24.3897 1.77488L23.9623 2.22512ZM25.5143 3.69859L26.549 4.6809L26.9765 4.23066L25.9418 3.24835L25.5143 3.69859ZM27.5837 5.66321L28.6185 6.64552L29.0459 6.19529L28.0112 5.21297L27.5837 5.66321ZM29.6532 7.62783L30.1705 8.11899L30.5979 7.66875L30.0806 7.1776L29.6532 7.62783Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <motion.img
          className="index_img_shape"
          src="./index_img/shape.png"
          alt=""
          animate={{ y: 100, x: 100 }}
          transition={{ ease: 'easeOut', duration: 2 }}
        />
        <div class="index-earth">
          <div class="index-earth-speed">
            <div class="index-earth-speed-title">Earth</div>
            <div class="index-earth-speed-text">TILT____ 23.26</div>
            <div class="index-earth-speed-text">DAY____ 23.9</div>
            <div class="index-earth-speed-text">YEAR____ 365.3</div>
          </div>
        </div>
        <motion.div
          className="index-taiwanstation"
          animate={{ y: 100, x: 100 }}
          transition={{ ease: 'easeOut', duration: 2 }}
        >
          <div className="index-taiwanstation_card_container">
            <div className="index-taiwanstation_card">
              <div className="index-taiwanstation_card_front">
                <img
                  src="./index_img/SpaceX BFR lander on Mars.jpg"
                  alt=""
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="index-taiwanstation_card_back">
                <img
                  src="./index_img/blue-origin-first-human-flight-l0-new-shepard-launch.jpg"
                  alt=""
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="index_button_container"
          animate={{ y: 100, x: 100 }}
          transition={{ ease: 'easeOut', duration: 2 }}
        >
          <button
            className="taiwan-station-btn"
            onClick={handleStationBtnClick}
          >
            <div className="taiwan-station-btn-text">
              BASED IN TAIWAN
              <br />
              --CLICK MORE--
            </div>
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
        </motion.div>
      </div>
      <div id="webgl"></div>
    </>
  );
};
export default CameraController;
