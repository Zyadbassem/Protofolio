import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stats } from "@react-three/drei";
import Earth from "./Earth/Earth";
import Stars from "./Globals/Stars";
import SpaceRocket from "./Globals/SpaceRocket";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import MagicWalls from "./Globals/MagicWalls";
import FirstPhase from "./FirstPhase/FirstPhase";
import SecondPhase from "./SecondPhase/SecondPhase";
import Background from "./Background/Background";
import ThirdPhase from "./ThirdPhase/ThirdPhase";
import FourthPhase from "./FourthPhase/FourthPhase";
import BackgroundAudio from "./Background/BackgroundAudio";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import Divider from "./Globals/Divider";
import { Cloud } from "@react-three/drei";

function Experience({ mobile = false }) {
  return (
    <>
      <Leva />
      <Canvas
        style={{
          background: "black",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
        camera={{
          position: [0, 0, mobile ? 10 : 7],
          fov: 35,
          rotation: [0, 0, 0],
        }}
      >
        <Stats />
        <Physics gravity={[0, 0, 0]} paused={false} debug={false}>
          <MagicWalls mobile={mobile} />
          <Background />
          <Earth />
          {/* <Clouds position={[0, 10, 0]} /> */}
          <Divider position={[0, 10, 0]} section="Projects" />
          <FirstPhase position={[0, 20, 0]} mobile={mobile} />
          <Divider position={[0, 60, 0]} section="Certificates & Skills" />
          <SecondPhase position={[0, 70, mobile ? -30 : -20]} mobile={mobile} />
          <Divider position={[0, 90, 0]} section="About me" />
          <ThirdPhase position={[0, 110, 0]} mobile={mobile} />
          <Divider position={[0, 130, 0]} section="Black Hole 👽" />
          <Divider position={[0, 150, 0]} section="Contact" />
          <FourthPhase position={[0, 140, 0]} mobile={mobile} />
          <OrbitControls enabled={false} />
          <Stars />
          <ambientLight intensity={0.5} />
          <directionalLight intensity={3} position={[-10, 20, 10]} />
          <SpaceRocket cameraFollower={true} mobile={mobile} />
          <BackgroundAudio />
        </Physics>
        {!mobile && (
          <EffectComposer multisampling={0} disableNormalPass>
            {/* Subtle glow on stars, lasers, engines */}
            <Bloom
              intensity={0.5}
              luminanceThreshold={0.6}
              luminanceSmoothing={0.5}
              mipmapBlur // Added for better performance/quality balance
            />

            {/* Adds depth, mood — like space ambient darkness */}
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        )}
        <Cloud
          opacity={0.5}
          speed={0.4}
          segments={10} // Reduced from 20
          volume={3} // Reduced from 6
          color="#2f2f2f"
          fade={true}
          position={[0, -4, -5]}
          scale={[5, 5, 5]}
        />
      </Canvas>
    </>
  );
}
export default Experience;
