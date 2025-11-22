import { useGLTF } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useRef, useEffect, useMemo } from "react";
import MeteoriteFlames from "./MeteoriteFlames";
import useAudioListener from "../Globals/useAudioListener";
import * as THREE from "three";
import { useAssetLoader } from "../Globals/useAssetLoader";

function Meteorite({
  position = [0, 0, 0],
  initialImpulse = 1,
  rotation = [0, 0, 0],
  onRef = () => {},
}) {
  const assets = useAssetLoader();
  // load the model and clone for each meteorite
  const { scene } = useGLTF("/meteorite/meteorite.glb");
  const model = useMemo(() => {
    return scene.clone(true);
  }, [scene]);

  // create a ref for the rigid body
  const rigidBodyRef = useRef();
  const meteoriteRef = useRef();

  // Audio setup - each meteorite gets its own completely independent audio
  const listener = useAudioListener();
  const audioRef = useRef();
  const hasPlayedSound = useRef(false);
  const isAudioReady = useRef(false);

  /** FLAMES CONTROLLER */
  const { countHolder, maxWidth, maxHeight, maxDepth, speed } = {
    countHolder: 400,
    maxWidth: 0.5,
    maxHeight: 5,
    maxDepth: 0.4,
    speed: 0.1,
  };

  // Setup audio using preloaded buffer
  useEffect(() => {
    if (listener && !audioRef.current && assets.meteoriteAudio) {
      // Create a completely new PositionalAudio instance
      audioRef.current = new THREE.PositionalAudio(listener);

      // Set the buffer to this specific instance
      audioRef.current.setBuffer(assets.meteoriteAudio);
      audioRef.current.setRefDistance(5);
      audioRef.current.setVolume(0.2 + Math.random() * 0.2); // Random volume variation
      audioRef.current.setLoop(false);

      // Distance settings for close-range audio (corrected)
      audioRef.current.setRefDistance(5); // Distance where volume is at reference level
      audioRef.current.setMaxDistance(10); // Maximum distance where sound is audible
      audioRef.current.setRolloffFactor(2); // Natural rolloff
      audioRef.current.setPlaybackRate(0.8 + Math.random() * 0.4);
      
      isAudioReady.current = true;
      meteoriteRef.current.add(audioRef.current);

      // If the meteorite is already moving, play the sound
      if (rigidBodyRef.current && !hasPlayedSound.current) {
        try {
          audioRef.current.play();
          hasPlayedSound.current = true;
        } catch (error) {
          console.warn("Failed to play meteorite sound:", error);
        }
      }
    }
  }, [listener, assets.meteoriteAudio]);

  // Expose the ref to parent component and play sound
  useEffect(() => {
    if (rigidBodyRef.current) {
      onRef(rigidBodyRef);
      rigidBodyRef.current.setLinvel({ x: 0, y: 0, z: 0 });
      rigidBodyRef.current.setAngvel({ x: 0, y: 0, z: 0 });

      // Apply initial impulse
      rigidBodyRef.current.applyImpulse({
        x: -initialImpulse * 1.2,
        y: -initialImpulse,
        z: 0,
      });

      // Play sound when meteorite starts moving (if audio is ready)
      if (audioRef.current && isAudioReady.current && !hasPlayedSound.current) {
        try {
          audioRef.current.play();
          hasPlayedSound.current = true;
        } catch (error) {
          console.warn("Failed to play meteorite sound:", error);
        }
      }
    }
  }, [onRef, initialImpulse]);

  // Cleanup audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        if (audioRef.current.isPlaying) {
          audioRef.current.stop();
        }
        audioRef.current.disconnect();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders={false}
      rotation={rotation}
      position={position}
    >
      <group ref={meteoriteRef}>
        <primitive
          object={model}
          scale={0.3}
          rotation={[0, 0, Math.PI * 0.25]}
          visible={true}
        />
      </group>
      <MeteoriteFlames
        countHolder={countHolder}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        maxDepth={maxDepth}
        speed={speed}
        position={[1.8, 1.8, 0]}
        rotation={[0, 0, -Math.PI * 0.25]}
        initialImpulse={initialImpulse}
        secRot={rotation}
      />
      <CylinderCollider args={[0.5, 0.4]} rotation={[0, 0, -0.7]} />
    </RigidBody>
  );
}

// Preload the model once to improve performance
useGLTF.preload("/meteorite/meteorite.glb");

export default Meteorite;
