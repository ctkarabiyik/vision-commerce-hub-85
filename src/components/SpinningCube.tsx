import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Slider } from "@/components/ui/slider";

interface CubeProps {
  manualRotation: number;
  isAutoRotating: boolean;
}

const Cube = ({ manualRotation, isAutoRotating }: CubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const autoRotationRef = useRef(0);

  useFrame((_, delta) => {
    if (meshRef.current) {
      if (isAutoRotating) {
        autoRotationRef.current += delta * 0.5;
        // Limit to one full rotation (2π radians)
        if (autoRotationRef.current > Math.PI * 2) {
          autoRotationRef.current = 0;
        }
        meshRef.current.rotation.y = autoRotationRef.current;
      } else {
        meshRef.current.rotation.y = (manualRotation / 100) * Math.PI * 2;
        autoRotationRef.current = meshRef.current.rotation.y;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const SpinningCube = () => {
  const [rotation, setRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const handleSliderChange = (value: number[]) => {
    setRotation(value[0]);
    setIsAutoRotating(false);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 min-h-0 relative">
        <Canvas
          camera={{ position: [4, 3, 5], fov: 50 }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <Cube manualRotation={rotation} isAutoRotating={isAutoRotating} />
          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>
      <div className="px-4 pb-4 pt-2">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground whitespace-nowrap">Rotate</span>
          <Slider
            value={[rotation]}
            onValueChange={handleSliderChange}
            max={100}
            step={1}
            className="flex-1"
          />
          <button
            onClick={() => setIsAutoRotating(true)}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              isAutoRotating 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Auto
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpinningCube;
