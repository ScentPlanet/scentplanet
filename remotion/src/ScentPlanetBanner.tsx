import { AbsoluteFill, staticFile, Img } from "remotion";

// Apple-style color palette
const COLORS = {
  bg: "#000000",
  text: "#FFFFFF",
  accent: "#00C8E8",
  accentBlue: "#0055A4",
  textMuted: "#86868B",
};

// Static banner for GitHub social preview (1280x640)
export const ScentPlanetBanner = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          left: "20%",
          top: "30%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accent}30 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "15%",
          bottom: "20%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accentBlue}25 0%, transparent 70%)`,
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "40%",
          top: "10%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, #4ADE8020 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 60,
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <Img
          src={staticFile("logo.svg")}
          style={{
            width: 180,
            height: 180,
            filter: "drop-shadow(0 0 40px rgba(0, 200, 232, 0.3))",
          }}
        />

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: COLORS.text,
              letterSpacing: -3,
              margin: 0,
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
            }}
          >
            ScentPlanet
          </h1>

          <p
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: COLORS.textMuted,
              margin: 0,
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
            }}
          >
            Real-time Olfactory Gaming Experience
          </p>

          {/* Feature tags */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 8,
            }}
          >
            {["AI Vision", "BLE Hardware", "Multi-Game", "Open Profiles"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "8px 16px",
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: 8,
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: COLORS.text,
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.accent} 30%, ${COLORS.accentBlue} 70%, transparent 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};
