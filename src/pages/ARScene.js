import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ARScene = () => {
  let medicationModel;

  try {
    medicationModel = useLoader(GLTFLoader, "/models/0.glb");
  } catch (error) {
    console.error("Error loading the GLTF model:", error);
    medicationModel = null; // Ensure the app doesn't break if the model fails to load
  }

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 60px)", // Adjust height to account for navbar
        background: "#ffffff", // Set white background
      }}
    >
      <Canvas
        style={{
          background: "transparent", // Makes canvas background transparent
        }}
      >
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={0.7}
        />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Suspense to handle loading state */}
        <Suspense fallback={<Html>Loading model...</Html>}>
          {medicationModel ? (
            <primitive
              object={medicationModel.scene}
              scale={0.3}
              position={[0, -1, 0]}
            />
          ) : (
            <Html center>
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  borderRadius: "5px",
                  color: "white",
                }}
              >
                <p>Model failed to load. Please try again.</p>
              </div>
            </Html>
          )}
        </Suspense>

        {/* Orbit Controls */}
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.5} />

        {/* Informative Text Overlay */}
        <Html position={[0, 1.5, 0]} center>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "white", margin: 0 }}>Aspirin</h3>
            <p style={{ color: "white", fontSize: "14px" }}>
              Dosage: Take 1 tablet (325 mg) daily with food.
            </p>
          </div>
        </Html>

        {/* Text Label */}
        <Text
          position={[0, 2, 0]}
          color="white"
          fontSize={0.5}
          anchorX="center"
          anchorY="middle"
        >
          Aspirin
        </Text>
      </Canvas>
    </div>
  );
};

export default ARScene;
