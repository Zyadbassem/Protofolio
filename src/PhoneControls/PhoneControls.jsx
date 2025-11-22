function PhoneControls({ mobile = true }) {
  const handleControllersDown = (e) => {
    e.preventDefault();
    const controllerId = e.currentTarget.id;
    const event = new CustomEvent("controllerDown", {
      detail: { action: controllerId },
    });
    console.log(event.detail.action);
    window.dispatchEvent(event);
  };

  const handleControllersUp = (e) => {
    e.preventDefault();
    const controllerId = e.currentTarget.id;
    const event = new CustomEvent("controllerUp", {
      detail: { action: controllerId },
    });
    window.dispatchEvent(event);
  };
  return !mobile ? null : (
    <div
      style={{
        position: "fixed",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        zIndex: 1000,
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          id="ArrowUp"
          onTouchStart={handleControllersDown}
          onTouchEnd={handleControllersUp}
          style={{
            width: "60px",
            height: "60px",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            color: "white",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.1s ease, background 0.2s ease",
            outline: "none",
          }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          id="ArrowLeft"
          onTouchStart={handleControllersDown}
          onTouchEnd={handleControllersUp}
          style={{
            width: "60px",
            height: "60px",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            color: "white",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.1s ease, background 0.2s ease",
            outline: "none",
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          id="ArrowDown"
          onTouchStart={handleControllersDown}
          onTouchEnd={handleControllersUp}
          style={{
            width: "60px",
            height: "60px",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            color: "white",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.1s ease, background 0.2s ease",
            outline: "none",
          }}
        >
          <i className="fa-solid fa-arrow-down"></i>
        </button>
        <button
          id="ArrowRight"
          onTouchStart={handleControllersDown}
          onTouchEnd={handleControllersUp}
          style={{
            width: "60px",
            height: "60px",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            color: "white",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.1s ease, background 0.2s ease",
            outline: "none",
          }}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default PhoneControls;
