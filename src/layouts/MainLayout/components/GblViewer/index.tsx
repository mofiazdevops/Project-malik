// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// // Lazy-loaded Model Component
// const Model = React.memo(() => {
//   const { scene } = useGLTF("/public/idea.gbl"); // Replace with your .gbl file path
//   return <primitive object={scene} scale={1} />;
// });

// // Main 3D Viewer Component
// export const GblViewer = () => {
//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <Canvas>
//         {/* Add Lights */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />

//         {/* Suspense for Lazy Loading */}
//         <Suspense fallback={<LoadingSpinner />}>
//           <Model />
//         </Suspense>

//         {/* OrbitControls for User Interaction */}
//         <OrbitControls enablePan enableZoom enableRotate />
//       </Canvas>
//     </div>
//   );
// };

// // Fallback Component While Loading
// const LoadingSpinner = () => (
//   <div>
//     <div className="spinner"></div>
//     <p>Loading 3D Model...</p>
//   </div>
// );

// // Spinner Styles
// const spinnerStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   textAlign: "center",
//   color: "#555",
// };

// // Export the Main Component
// export default GblViewer;
import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import "../gltfmodel/ideaglt.gltf";
function Model({ url }) {
  const { scene }: any = useGLTF(url);
  return <primitive object={scene} scale={0.5} />;
}

export function GblViewer() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model url="../gltfmodel/ideaglt.gltf" />
      <OrbitControls />
    </Canvas>
  );
}
