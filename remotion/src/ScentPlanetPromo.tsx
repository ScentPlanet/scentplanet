import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  Easing,
  AbsoluteFill,
  staticFile,
  Img,
} from "remotion";

// Apple-style color palette
const COLORS = {
  bg: "#000000",
  text: "#FFFFFF",
  accent: "#00C8E8",
  accentBlue: "#0055A4",
  textMuted: "#86868B",
};

// Glowing Orb Background
const GlowingOrb = ({
  x,
  y,
  size,
  color,
  delay = 0,
}: {
  x: string;
  y: string;
  size: number;
  color: string;
  delay?: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(
    frame - delay,
    [0, 1 * fps],
    [0, 0.5],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const scale = interpolate(
    frame - delay,
    [0, 3 * fps],
    [0.8, 1.1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
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
        transform: `scale(${scale}) translate(-50%, -50%)`,
        filter: "blur(100px)",
      }}
    />
  );
};

// Animated Text - Apple style fade up
const AnimatedText = ({
  text,
  delay = 0,
  fontSize = 72,
  fontWeight = 600,
  color = COLORS.text,
  letterSpacing = -2,
}: {
  text: string;
  delay?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  letterSpacing?: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(
    frame - delay,
    [0, 0.6 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const y = interpolate(
    frame - delay,
    [0, 0.6 * fps],
    [50, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.exp),
    }
  );

  return (
    <div
      style={{
        fontSize,
        fontWeight,
        color,
        letterSpacing,
        opacity,
        transform: `translateY(${y}px)`,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
        textAlign: "center",
        lineHeight: 1.2,
      }}
    >
      {text}
    </div>
  );
};

// Scene 1: Mysterious Opening - "What if..."
const Scene1_Opening = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GlowingOrb x="50%" y="50%" size={800} color={COLORS.accent} delay={0} />
      <GlowingOrb x="30%" y="40%" size={400} color={COLORS.accentBlue} delay={15} />

      <AnimatedText
        text="What if you could"
        fontSize={48}
        fontWeight={400}
        color={COLORS.textMuted}
        letterSpacing={0}
        delay={0}
      />

      <Sequence from={0.8 * fps} layout="none">
        <AnimatedText
          text="smell your game?"
          fontSize={80}
          fontWeight={700}
          letterSpacing={-3}
        />
      </Sequence>
    </AbsoluteFill>
  );
};

// Scene 2: Immersion - Show the experience
const Scene2_Immersion = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = ["Pine forests.", "Campfire smoke.", "Fresh rain."];

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
      }}
    >
      <GlowingOrb x="70%" y="30%" size={500} color="#4ADE80" delay={0} />
      <GlowingOrb x="25%" y="70%" size={400} color={COLORS.accent} delay={20} />

      {words.map((word, index) => (
        <Sequence key={word} from={index * 0.6 * fps} layout="none">
          <AnimatedText
            text={word}
            fontSize={64}
            fontWeight={600}
            letterSpacing={-1}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

// Scene 3: The Product - Logo Reveal
const Scene3_ProductReveal = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const logoOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const glowIntensity = interpolate(
    frame,
    [0.5 * fps, 1.5 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      <GlowingOrb x="50%" y="45%" size={700} color={COLORS.accent} delay={0} />

      <div
        style={{
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
        }}
      >
        <Img
          src={staticFile("logo.svg")}
          style={{
            width: 200,
            height: 200,
            filter: `drop-shadow(0 0 ${60 * glowIntensity}px rgba(0, 200, 232, ${0.4 * glowIntensity}))`,
          }}
        />
      </div>

      <Sequence from={1 * fps} layout="none">
        <AnimatedText
          text="ScentPlanet"
          fontSize={72}
          fontWeight={700}
          letterSpacing={-3}
        />
      </Sequence>

      <Sequence from={1.5 * fps} layout="none">
        <AnimatedText
          text="Gaming, Reimagined"
          fontSize={32}
          fontWeight={400}
          color={COLORS.textMuted}
          letterSpacing={1}
        />
      </Sequence>
    </AbsoluteFill>
  );
};

// Scene 4: Call to Action
const Scene4_CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const buttonScale = spring({
    frame: frame - 1 * fps,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const buttonGlow = interpolate(
    frame - 1.5 * fps,
    [0, 0.5 * fps, 1.5 * fps],
    [0, 1, 0.6],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 50,
      }}
    >
      <GlowingOrb x="50%" y="40%" size={600} color={COLORS.accent} delay={0} />

      <AnimatedText
        text="Experience it yourself"
        fontSize={52}
        fontWeight={600}
        delay={0}
      />

      <Sequence from={1 * fps} layout="none">
        <div
          style={{
            transform: `scale(${buttonScale})`,
            padding: "24px 56px",
            background: `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.accentBlue} 100%)`,
            borderRadius: 18,
            boxShadow: `0 0 ${50 * buttonGlow}px ${COLORS.accent}${Math.round(buttonGlow * 100).toString(16).padStart(2, "0")}`,
          }}
        >
          <span
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: COLORS.text,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
            }}
          >
            Download Free
          </span>
        </div>
      </Sequence>

      <Sequence from={2 * fps} layout="none">
        <AnimatedText
          text="Windows 10/11"
          fontSize={18}
          fontWeight={400}
          color={COLORS.textMuted}
          letterSpacing={1}
        />
      </Sequence>
    </AbsoluteFill>
  );
};

// Main Composition - 12 seconds total
export const ScentPlanetPromo = () => {
  const { fps } = useVideoConfig();

  const scene1Duration = 3 * fps;  // "What if you could smell your game?"
  const scene2Duration = 3.5 * fps; // Pine forests. Campfire smoke. Fresh rain.
  const scene3Duration = 3 * fps;  // Logo reveal
  const scene4Duration = 2.5 * fps; // CTA

  return (
    <AbsoluteFill style={{ background: COLORS.bg }}>
      <Sequence durationInFrames={scene1Duration} premountFor={fps}>
        <Scene1_Opening />
      </Sequence>

      <Sequence from={scene1Duration} durationInFrames={scene2Duration} premountFor={fps}>
        <Scene2_Immersion />
      </Sequence>

      <Sequence
        from={scene1Duration + scene2Duration}
        durationInFrames={scene3Duration}
        premountFor={fps}
      >
        <Scene3_ProductReveal />
      </Sequence>

      <Sequence
        from={scene1Duration + scene2Duration + scene3Duration}
        durationInFrames={scene4Duration}
        premountFor={fps}
      >
        <Scene4_CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
