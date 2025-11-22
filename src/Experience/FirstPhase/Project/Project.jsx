import { useTexture } from "@react-three/drei";
import Skill from "./Skill";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { color } from "three/tsl";
function Project({
  projectName = "outfit oasis",
  projectDescription = "",
  projectImage = "",
  skills = [
    {
      logo: "reactlogo",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      radius: 1,
      offset: 1,
    },
  ],
  planet = "moon",
  radius = 0.5,
  position = [0, 0, 0],
  projectLink = "https://solarsysytembyzyad.vercel.app/",
  error = "",
}) {
  const texture = useTexture(`./project_assets/projects/${planet}`);
  const planetRef = useRef();

  const [hovered, setHovered] = useState(false);
  useFrame((s, d) => {
    if (hovered) {
      planetRef.current.rotation.y += d * 0.5;
    }
  });
  return (
    <group position={position}>
      <Html transform position={[0, 3.5, 0]} distanceFactor={10}>
        <a
          style={{
            width: "220px",
            padding: "15px",
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
          href={projectLink}
          target="_blank"
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <img
              src={`./project_assets/${projectImage}`}
              style={{
                width: "80px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "6px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            />
            <h1
              style={{
                color: "white",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "14px",
                fontWeight: "700",
                margin: 0,
                flex: 1,
                textAlign: "right",
              }}
            >
              {projectName}
            </h1>
          </div>

          {error && (
            <span style={{ color: "#ff6b6b", fontSize: "10px", fontFamily: "'Outfit', sans-serif" }}>
              ({error})
            </span>
          )}

          <p
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "11px",
              fontWeight: "300",
              margin: 0,
              lineHeight: "1.4",
              textAlign: "left",
              width: "100%",
            }}
          >
            {projectDescription}
          </p>
        </a>
      </Html>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        ref={planetRef}
      >
        <sphereGeometry args={[radius]} />
        <meshMatcapMaterial map={texture} />
      </mesh>
      {skills.map(({ logo, position, rotation, radius, offset }, i) => {
        return (
          <Skill
            key={i}
            logo={logo}
            position={position}
            rotation={rotation}
            radius={radius}
            offset={offset}
          />
        );
      })}
    </group>
  );
}

export default Project;
