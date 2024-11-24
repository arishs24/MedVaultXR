import { useGLTF } from '@react-three/drei';

function MedicationGuide() {
    const model = useGLTF('/assets/models/0.glb');
    return (
        <Canvas>
            <ambientLight />
            <primitive object={model.scene} scale={0.5} />
            <OrbitControls />
        </Canvas>
    );
}

export default MedicationGuide;
