import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useData } from "./DataContext"; // Import the useData hook
import { useCubeTexture, useTexture } from "@react-three/drei";
import stripesFragment from "../shaders/stripes.fragment.glsl";
import stripesVertex from "../shaders/stripes.vertex.glsl";
import { useFrame } from "@react-three/fiber";

export function Shapes() {
  const mesh = useRef();
  const analyser = useRef();
  const { data, dataAv, setData } = useData(); // Get the setData function from the context and import the data value!!
  const time = useRef();

  const firstObjectValue = useRef();

  useFrame(() => {
    const originalMin = 0;
    const originalMax = 255;
    const newMin = 0;
    const newMax = 1;
    // get frequency of a single band in the spectrum. Apply to each band. optimize somehow?
    firstObjectValue.current =
      ((data[5] - originalMin) / (originalMax - originalMin)) *
        (newMax - newMin) +
      newMin;
    // console.log(firstObjectValue.current);
  });

  const StripesShaderMaterial = {
    uniforms: {
      uTime: { value: 0 },
      u_data: { value: firstObjectValue.current * -0.3 },
      u_data_Av: { value: dataAv },
    },
    vertexShader: stripesVertex,
    fragmentShader: stripesFragment,
  };

  const bumpMap = useTexture("/concrete_wall_008_ao_1k.jpg");
  const envMap = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "/" } //equirectangler
  );

  const [set] = useState();

  const [material] = useState();

  return (
    <>
      {/* <mesh position={[-5, 1, 0]}>
        <sphereGeometry args={[1, 30, 15]} />
        <shaderMaterial
          attach='material'
          args={[StripesShaderMaterial]}
          color={new THREE.Color(0.3, data / 500, data / 500)}
        />
      </mesh> */}
    </>
  );
}
// norml map, displacement map, bump map = grayscale
// video Analysis with three -- using video as texture
// look at live audio input
// optimizing long audio inputs?
//
