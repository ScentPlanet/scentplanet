import { AbsoluteFill, staticFile, Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

// ScentPlanet brand colors
const COLORS = {
  bg: "#0A0A0A",
  text: "#FFFFFF",
  accent: "#00C8E8",
  accentBlue: "#0055A4",
  success: "#00C853",
  textMuted: "#86868B",
  textSecondary: "#9A9A9A",
};

// Animated particle for static still (uses frame-based positioning)
const Particle = ({
  x,
  y,
  size,
  color,
  opacity,
}: {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
}) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: size,
      height: size,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      opacity,
      filter: `blur(${size * 0.4}px)`,
    }}
  />
);

// Enhanced static banner for GitHub social preview (1280x640)
export const ScentPlanetBanner = () => {
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse 120% 80% at 50% 50%, #111118 0%, ${COLORS.bg} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow orbs */}
      <Particle x={150} y={100} size={500} color={`${COLORS.accent}25`} opacity={0.6} />
      <Particle x={800} y={350} size={400} color={`${COLORS.accentBlue}20`} opacity={0.5} />
      <Particle x={1000} y={80} size={300} color={`${COLORS.success}15`} opacity={0.4} />
      <Particle x={50} y={400} size={250} color={`${COLORS.accent}10`} opacity={0.3} />

      {/* Subtle grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 70,
          zIndex: 10,
          padding: "0 100px",
        }}
      >
        {/* Logo with glow */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div
            style={{
              position: "absolute",
              inset: -40,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${COLORS.accent}30 0%, transparent 70%)`,
              filter: "blur(30px)",
            }}
          />
          <Img
            src={staticFile("logo-dark.svg")}
            style={{
              width: 200,
              height: 200,
              position: "relative",
              filter: `drop-shadow(0 0 50px ${COLORS.accent}40)`,
            }}
          />
        </div>

        {/* Text content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: COLORS.text,
              letterSpacing: -4,
              margin: 0,
              lineHeight: 1,
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
              letterSpacing: 0.5,
            }}
          >
            Real-time Olfactory Gaming Experience
          </p>

          {/* Feature chips */}
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            {[
              { label: "AI Vision", color: COLORS.accent },
              { label: "BLE Hardware", color: COLORS.accentBlue },
              { label: "Multi-Game", color: COLORS.success },
              { label: "Open Profiles", color: COLORS.textSecondary },
            ].map((chip) => (
              <div
                key={chip.label}
                style={{
                  padding: "10px 20px",
                  background: "rgba(255, 255, 255, 0.06)",
                  borderRadius: 10,
                  border: `1px solid ${chip.color}30`,
                  fontSize: 15,
                  fontWeight: 500,
                  color: chip.color,
                  letterSpacing: 0.3,
                }}
              >
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent 5%, ${COLORS.accent}80 25%, ${COLORS.accentBlue} 50%, ${COLORS.success}60 75%, transparent 95%)`,
        }}
      />

      {/* Top-right version tag */}
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 40,
          padding: "6px 16px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: 20,
          fontSize: 13,
          fontWeight: 500,
          color: COLORS.textSecondary,
          letterSpacing: 0.5,
        }}
      >
        v0.3.7
      </div>
    </AbsoluteFill>
  );
};
