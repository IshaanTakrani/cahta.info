import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function RotatingModel({ url }) {
  const modelRef = useRef();
  const { scene } = useGLTF("assets/CAHTAnet2.glb");

  // Rotate the model continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.07} />;
}

export default function App() {
  return (
    <Canvas style={{ height: "100%" }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <RotatingModel url="/model.glb" />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
