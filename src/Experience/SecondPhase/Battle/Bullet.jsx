import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import fragmentShader from "./fragment.glsl";
import vertexShader from "./vertex.glsl";
import { gsap } from "gsap";
import { Html } from "@react-three/drei";
import useAudioListener from "../../Globals/useAudioListener";
import { useAssetLoader } from "../../Globals/useAssetLoader";

function Bullet({
  count = 1500,
  positionA = { x: -5, y: 0, z: 0 },
  positionB = { x: 30, y: 0, z: 0 },
  invert = false,
  index = 0,
  removeBullet = () => {},
  bulletColor = "#fff",
  skillName = "React",
}) {
  // Handle the color of the bullet (will be passed as a uniform)
  const { r, g, b } = new THREE.Color(bulletColor);
  const passColor = new THREE.Vector3(r, g, b);
  const audioListener = useAudioListener();
  const assets = useAssetLoader();

  // Audio setup
  const positionalAudioRef = useRef();

  // create the points geometry
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    // Positioning is more on x so the bullet is long and thin
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 1;
      positions[i3 + 1] = (Math.random() - 0.5) * 0.04;
      positions[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [count]);

  // create the points material
  const material = useMemo(() => {
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_invert: {
          value: invert,
        },
        u_color: {
          value: passColor,
        },
      },
    });
    return material;
  }, []);

  // a state to return null when the point arrives to it's destination (this state will remove the bullet)
  const [visible, setVisible] = useState(true);

  // a ref to dispose geometry and material for better performance
  const bulletRef = useRef();
  const groupRef = useRef();

  // useEffect to handle the sound effect
  useEffect(() => {
    if (audioListener && groupRef.current && assets.laserAudio) {
      const positionalAudio = new THREE.PositionalAudio(audioListener);

      positionalAudio.setBuffer(assets.laserAudio);
      positionalAudio.setRefDistance(5);
      positionalAudio.setVolume(0.5);
      positionalAudio.setLoop(false);
      positionalAudio.setRefDistance(5);
      positionalAudio.setRolloffFactor(2);
      positionalAudio.setMaxDistance(10);

      groupRef.current.add(positionalAudio);
      positionalAudioRef.current = positionalAudio;

      positionalAudio.play();
    }
  }, [audioListener, assets.laserAudio]);

  // useEffect to handle the animation of the bullet
  useEffect(() => {
    // timeline for ordering
    const tl = gsap.timeline({
      repeat: 0,
    });

    // animate the group ref to it's position B then call a function that will remove the bullet
    tl.to(groupRef.current.position, {
      duration: 10,
      x: positionB.x,
      y: positionB.y,
      z: positionB.z,
      ease: "none",
    }).call(() => {
      removeBullet(index);
      bulletRef.current.geometry.dispose();
      bulletRef.current.material.dispose();

      setVisible(false);
    });

    return () => tl.kill();
  }, [positionA, positionB]);

  // return null when the bullet reaches its distination
  if (!visible) return null;
  return (
    <group ref={groupRef} position={[positionA.x, positionA.y, positionA.z]}>
      <points geometry={geometry} material={material} ref={bulletRef} />
      <Html position={[0, 0.5, 0]} transform scale={[1, 1, 1]}>
        <h1
          style={{
            color: "white",
            fontFamily: "sans-serif",
            fontWeight: "lighter",
            fontSize: "15px",
            padding: "0px",
          }}
        >
          {skillName}
        </h1>
      </Html>
    </group>
  );
}

export default Bullet;
