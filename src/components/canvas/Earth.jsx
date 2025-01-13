import {useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./purple_planet/scene.gltf');

  useEffect(() => {
    earth.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        if (node.material) {
          node.material.metalness = 2.8;
          node.material.roughness = 1.8;
        }
      }
    });
  }, [earth]);

  return (
    <primitive
      object={earth.scene}
      scale={2}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
        <EffectComposer>
          <Bloom intensity={1.5} luminanceThreshold={0.3} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
