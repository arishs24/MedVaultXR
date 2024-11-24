import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Box } from "@react-three/drei";

const ARMedicationGuide = () => {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Canvas>
                {/* Add lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

                {/* Add a 3D object */}
                <Box args={[1, 1, 1]} position={[0, 0, 0]}>
                    <meshStandardMaterial attach="material" color="orange" />
                </Box>

                {/* Controls */}
                <OrbitControls />
                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
};

export default ARMedicationGuide;
