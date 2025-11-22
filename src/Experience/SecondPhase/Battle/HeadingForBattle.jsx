import { Html } from "@react-three/drei";

function HeadingForBattle({ mobile = false }) {
  return (
    <group>
      <Html transform position={[mobile ? -4 : -7, 7, 0, 0]}>
        <h1
          style={{
            color: "white",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "700",
          }}
        >
          Skills
        </h1>
      </Html>
      <Html transform position={[mobile ? 4 : 7, 7, 0]}>
        <h1
          style={{
            color: "white",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "700",
          }}
        >
          Certificates
        </h1>
      </Html>
    </group>
  );
}

export default HeadingForBattle;
