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
  accent: "#00C8E8", // ScentPlanet cyan
  accentBlue: "#0055A4",
  textMuted: "#86868B",
  gradient1: "#1D1D1F",
  gradient2: "#000000",
};

// Repository data for ecosystem visualization
const REPOS = [
  {
    name: "scentplanet",
    description: "Desktop App",
    icon: "📱",
    color: "#00C8E8",
  },
  {
    name: "game-profiles",
    description: "Cloud Library",
    icon: "🎮",
    color: "#4ADE80",
  },
  {
    name: "Proto-1",
    description: "Core Engine",
    icon: "⚙️",
    color: "#F59E0B",
  },
];

const FEATURES = [
  { text: "AI Scene Recognition", icon: "🧠" },
  { text: "BLE Hardware", icon: "📡" },
  { text: "Multi-Game Support", icon: "🎮" },
  { text: "Cloud Profiles", icon: "☁️" },
];

// Logo Component
const Logo = ({ scale = 1, opacity = 1 }: { scale?: number; opacity?: number }) => {
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Img
        src={staticFile("logo.svg")}
        style={{
          width: 160,
          height: 160,
          filter: "drop-shadow(0 0 60px rgba(0, 200, 232, 0.3))",
        }}
      />
    </div>
  );
};

// Animated Text Component
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
    [0, 0.5 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const y = interpolate(
    frame - delay,
    [0, 0.5 * fps],
    [40, 0],
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
      }}
    >
      {text}
    </div>
  );
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
    [0, 0.4],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const scale = interpolate(
    frame - delay,
    [0, 2 * fps],
    [0.8, 1],
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
        filter: "blur(80px)",
      }}
    />
  );
};

// Feature Card Component
const FeatureCard = ({
  text,
  icon,
  index,
  startFrame,
}: {
  text: string;
  icon: string;
  index: number;
  startFrame: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = index * 0.15 * fps;
  const localFrame = frame - startFrame - delay;

  const opacity = interpolate(localFrame, [0, 0.3 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(localFrame, [0, 0.3 * fps], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "16px 24px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: 16,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        opacity,
        transform: `translateY(${y}px)`,
        backdropFilter: "blur(10px)",
      }}
    >
      <span style={{ fontSize: 28 }}>{icon}</span>
      <span
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: COLORS.text,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        }}
      >
        {text}
      </span>
    </div>
  );
};

// Repository Node Component
const RepoNode = ({
  repo,
  index,
  startFrame,
  isCenter = false,
}: {
  repo: typeof REPOS[0];
  index: number;
  startFrame: number;
  isCenter?: boolean;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = index * 0.2 * fps;
  const localFrame = frame - startFrame - delay;

  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const glowOpacity = interpolate(
    localFrame,
    [0.5 * fps, 1 * fps],
    [0, 0.6],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          width: isCenter ? 120 : 100,
          height: isCenter ? 120 : 100,
          borderRadius: 24,
          background: `linear-gradient(135deg, ${repo.color}20 0%, ${repo.color}05 100%)`,
          border: `2px solid ${repo.color}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isCenter ? 48 : 40,
          boxShadow: `0 0 ${isCenter ? 60 : 40}px ${repo.color}${Math.round(glowOpacity * 60).toString(16).padStart(2, "0")}`,
        }}
      >
        {repo.icon}
      </div>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: isCenter ? 18 : 16,
            fontWeight: 600,
            color: COLORS.text,
            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
          }}
        >
          {repo.name}
        </div>
        <div
          style={{
            fontSize: 13,
            color: COLORS.textMuted,
            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
          }}
        >
          {repo.description}
        </div>
      </div>
    </div>
  );
};

// Connection Line Component
const ConnectionLine = ({
  startFrame,
  fromX,
  fromY,
  toX,
  toY,
  delay = 0,
}: {
  startFrame: number;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  delay?: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - startFrame - delay;
  const progress = interpolate(localFrame, [0, 0.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const length = Math.sqrt((toX - fromX) ** 2 + (toY - fromY) ** 2);
  const angle = Math.atan2(toY - fromY, toX - fromX) * (180 / Math.PI);

  return (
    <div
      style={{
        position: "absolute",
        left: fromX,
        top: fromY,
        width: length * progress,
        height: 2,
        background: `linear-gradient(90deg, ${COLORS.accent}80 0%, ${COLORS.accent}20 100%)`,
        transformOrigin: "left center",
        transform: `rotate(${angle}deg)`,
        borderRadius: 1,
      }}
    />
  );
};

// Scene 1: Logo Reveal
const Scene1_LogoReveal = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const logoOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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
      <GlowingOrb x="50%" y="45%" size={600} color={COLORS.accent} delay={0} />
      <GlowingOrb x="30%" y="60%" size={400} color={COLORS.accentBlue} delay={10} />
      <GlowingOrb x="70%" y="40%" size={300} color="#4ADE80" delay={20} />

      <Logo scale={logoScale} opacity={logoOpacity} />

      <Sequence from={0.8 * fps} layout="none">
        <AnimatedText
          text="ScentPlanet"
          fontSize={64}
          fontWeight={700}
          letterSpacing={-3}
        />
      </Sequence>

      <Sequence from={1.2 * fps} layout="none">
        <AnimatedText
          text="Real-time Olfactory Gaming"
          fontSize={28}
          fontWeight={400}
          color={COLORS.textMuted}
          letterSpacing={0}
        />
      </Sequence>
    </AbsoluteFill>
  );
};

// Scene 2: Features
const Scene2_Features = () => {
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
        gap: 60,
      }}
    >
      <GlowingOrb x="20%" y="30%" size={400} color={COLORS.accent} delay={0} />
      <GlowingOrb x="80%" y="70%" size={350} color={COLORS.accentBlue} delay={15} />

      <AnimatedText text="Immersive Experience" fontSize={56} fontWeight={600} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
          marginTop: 20,
        }}
      >
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={feature.text}
            text={feature.text}
            icon={feature.icon}
            index={index}
            startFrame={0.5 * fps}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: Ecosystem
const Scene3_Ecosystem = () => {
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
        gap: 60,
      }}
    >
      <GlowingOrb x="50%" y="50%" size={500} color={COLORS.accent} delay={0} />

      <AnimatedText text="Open Ecosystem" fontSize={56} fontWeight={600} />

      <div style={{ position: "relative", width: 700, height: 300 }}>
        {/* Connection lines */}
        <ConnectionLine
          startFrame={1 * fps}
          fromX={175}
          fromY={150}
          toX={290}
          toY={150}
          delay={0}
        />
        <ConnectionLine
          startFrame={1 * fps}
          fromX={410}
          fromY={150}
          toX={525}
          toY={150}
          delay={0.2 * fps}
        />

        {/* Repo nodes */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "0 50px",
          }}
        >
          <RepoNode repo={REPOS[2]} index={0} startFrame={0.3 * fps} />
          <RepoNode repo={REPOS[0]} index={1} startFrame={0.3 * fps} isCenter />
          <RepoNode repo={REPOS[1]} index={2} startFrame={0.3 * fps} />
        </div>
      </div>

      <Sequence from={2 * fps} layout="none">
        <AnimatedText
          text="Private Development → Public Distribution → Community Profiles"
          fontSize={18}
          fontWeight={400}
          color={COLORS.textMuted}
          letterSpacing={0}
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
    frame: frame - 1.5 * fps,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const buttonGlow = interpolate(
    frame - 2 * fps,
    [0, 0.5 * fps, 1 * fps],
    [0, 0.8, 0.4],
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

      <Logo scale={0.8} opacity={1} />

      <Sequence from={0.5 * fps} layout="none">
        <AnimatedText
          text="Experience Gaming Like Never Before"
          fontSize={42}
          fontWeight={600}
        />
      </Sequence>

      <Sequence from={1.5 * fps} layout="none">
        <div
          style={{
            transform: `scale(${buttonScale})`,
            padding: "20px 48px",
            background: `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.accentBlue} 100%)`,
            borderRadius: 16,
            boxShadow: `0 0 ${40 * buttonGlow}px ${COLORS.accent}${Math.round(buttonGlow * 80).toString(16).padStart(2, "0")}`,
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: COLORS.text,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
            }}
          >
            Download Now
          </span>
        </div>
      </Sequence>

      <Sequence from={2.5 * fps} layout="none">
        <AnimatedText
          text="github.com/ScentPlanet/scentplanet"
          fontSize={18}
          fontWeight={400}
          color={COLORS.textMuted}
          letterSpacing={0}
        />
      </Sequence>
    </AbsoluteFill>
  );
};

// Main Composition
export const ScentPlanetPromo = () => {
  const { fps } = useVideoConfig();

  const scene1Duration = 4 * fps; // 4 seconds
  const scene2Duration = 4 * fps; // 4 seconds
  const scene3Duration = 4 * fps; // 4 seconds
  const scene4Duration = 3 * fps; // 3 seconds

  return (
    <AbsoluteFill style={{ background: COLORS.bg }}>
      <Sequence durationInFrames={scene1Duration} premountFor={fps}>
        <Scene1_LogoReveal />
      </Sequence>

      <Sequence from={scene1Duration} durationInFrames={scene2Duration} premountFor={fps}>
        <Scene2_Features />
      </Sequence>

      <Sequence
        from={scene1Duration + scene2Duration}
        durationInFrames={scene3Duration}
        premountFor={fps}
      >
        <Scene3_Ecosystem />
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
