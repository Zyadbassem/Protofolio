function Navigation() {
  const sections = [
    { name: "Projects", y: 20 },
    { name: "Certificates", y: 70 },
    { name: "About", y: 110 },
    { name: "Contact", y: 170 },
  ];

  const handleNavigate = (y) => {
    const event = new CustomEvent("rocket-navigate", { detail: { y } });
    window.dispatchEvent(event);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "20px",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 1000,
        pointerEvents: "auto",
      }}
    >
      {sections.map((section) => (
        <button
          key={section.name}
          onClick={() => handleNavigate(section.y)}
          style={{
            padding: "12px 24px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            color: "white",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.2s ease",
            textAlign: "left",
            userSelect: "none",
            WebkitUserSelect: "none",
            WebkitTapHighlightColor: "transparent",
            outline: "none",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.15)";
            e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "translateX(5px)";
            e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.05)";
            e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
            e.target.style.transform = "translateX(0)";
            e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
          onMouseDown={(e) => {
            e.target.style.transform = "scale(0.98)";
          }}
          onMouseUp={(e) => {
            e.target.style.transform = "scale(1)";
          }}
          onTouchStart={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(0.95)";
          }}
          onTouchEnd={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.05)";
            e.target.style.transform = "scale(1)";
          }}
        >
          {section.name}
        </button>
      ))}
    </div>
  );
}

export default Navigation;
