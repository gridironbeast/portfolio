import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const transformer = useGLTF("./transformers_-_animated_soundwave_character_rig/scene.gltf");
  return (
    <mesh>
      {/* Общее освещение */}
      <hemisphereLight intensity={0.35} groundColor="black" />
      
      {/* Основной источник света сверху */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* Точечный свет рядом с моделью */}
      <pointLight position={[10, 10, 10]} intensity={2} />
      
      {/* Направленный свет для акцентов */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={0.5}
        castShadow
      />
      
      {/* Модель */}
      <primitive
        object={transformer.scene}
        scale={isMobile ? 0.4 : 0.5} // Уменьшение масштаба модели
        position={isMobile ? [0, -2.5, -2.2] : [0, -3, -1.5]} // Регулировка высоты модели
        rotation={[-0.01, -0.2, -0.1]} // Небольшой наклон
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 5, 10], fov: 30 }} // Камера подальше от модели
      gl={{ preserveDrawingBuffer: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // maxAzimuthAngle={Math.PI / 4}
          // minAzimuthAngle={-Math.PI / 4}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
