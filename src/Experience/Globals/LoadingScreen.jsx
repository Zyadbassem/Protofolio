import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (active) {
      setDisplayProgress(progress);
    } else if (progress === 100) {
      setDisplayProgress(100);
    }
  }, [progress, active]);

  useEffect(() => {
    if (!active && progress === 100) {
      // Small delay to ensure smooth transition
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
        setVisible(true);
    }
  }, [active, progress]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 0.5s ease-out",
        opacity: active || displayProgress < 100 ? 1 : 0,
        pointerEvents: active || displayProgress < 100 ? "auto" : "none",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          marginBottom: "20px",
          animation: "spin 2s linear infinite",
        }}
      >
        <img
          src="./rocket_loader.png"
          alt="Loading Rocket"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div
        style={{
          color: "white",
          fontSize: "24px",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: "bold",
        }}
      >
        {Math.round(displayProgress)}%
      </div>
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
