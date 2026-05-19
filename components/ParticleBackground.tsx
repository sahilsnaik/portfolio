"use client";

import { Float, Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";

function ParticleCluster({ reduceMotion }: { reduceMotion: boolean }) {
  const groupRef = useRef<Group>(null);
  const particles = useMemo(() => {
    const values = new Float32Array(420);

    for (let index = 0; index < values.length; index += 3) {
      values[index] = (Math.random() - 0.5) * 8;
      values[index + 1] = (Math.random() - 0.5) * 8;
      values[index + 2] = (Math.random() - 0.5) * 8;
    }

    return values;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    if (reduceMotion) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      return;
    }

    // Keep the movement subtle so the scene feels reactive without becoming distracting.
    groupRef.current.rotation.x = state.pointer.y * 0.16;
    groupRef.current.rotation.y = state.pointer.x * 0.22 + state.clock.elapsedTime * 0.028;
    groupRef.current.position.x = state.pointer.x * 0.12;
    groupRef.current.position.y = state.pointer.y * 0.12;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.1} rotationIntensity={0.24} floatIntensity={0.32}>
        <mesh position={[0, 0.1, 0]} scale={1.02}>
          <icosahedronGeometry args={[1.45, 1]} />
          <meshStandardMaterial
            color="#0b1220"
            emissive="#06b6d4"
            emissiveIntensity={0.5}
            metalness={0.45}
            roughness={0.22}
            wireframe
            transparent
            opacity={0.82}
          />
        </mesh>
      </Float>

      <Points positions={particles} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#67e8f9"
          size={0.036}
          sizeAttenuation
          depthWrite={false}
          opacity={0.58}
        />
      </Points>
    </group>
  );
}

export default function ParticleBackground() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="absolute inset-0">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 4.5], fov: 50 }}
          gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        >
          <color attach="background" args={["#000000"]} />
          <fog attach="fog" args={["#020617", 4.2, 10]} />
          <ambientLight intensity={1.25} />
          <directionalLight position={[2, 3, 2]} intensity={1.4} color="#67e8f9" />
          <ParticleCluster reduceMotion={reduceMotion} />
        </Canvas>
      </Suspense>
    </div>
  );
}
