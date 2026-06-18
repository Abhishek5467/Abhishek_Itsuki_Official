/* Portfolio sections — composes the design-system components into a full
   single-page site. Exposes window.PortfolioApp. */
const NS = window.AbhishekSinghPortfolioDesignSystem_9edb24;
const {
  NavBar, Marquee, Button, Badge, Tag, Card, IconButton, Avatar, Divider,
  SectionHeading, StatCard, ProjectCard, TimelineItem, SkillMeter, SocialLink, TiltCard,
} = NS;

const ICON = {
  github: "https://cdn.simpleicons.org/github/white",
  linkedin: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234DBFF5'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'/%3E%3C/svg%3E",
  youtube: "https://cdn.simpleicons.org/youtube/FF4D5E",
  kaggle: "https://cdn.simpleicons.org/kaggle/16EAD5",
  instagram: "https://cdn.simpleicons.org/instagram/F5B642",
  codeforces: "https://cdn.simpleicons.org/codeforces/7C6CFF",
  codechef: "https://cdn.simpleicons.org/codechef/F5B642",
};

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
);
const Download = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>
);

function Container({ children, style }) {
  return <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)", ...style }}>{children}</div>;
}
function Section({ id, children, style }) {
  return <section id={id} style={{ padding: "var(--section-y) 0", position: "relative", ...style }}>{children}</section>;
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <header id="top" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <canvas id="photon-canvas" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}></canvas>
      <div style={{ position: "absolute", inset: 0, zIndex: 0, background:
        "radial-gradient(70% 50% at 50% 0%, rgba(22,234,213,.10), transparent 60%), linear-gradient(180deg, transparent 60%, var(--bg) 100%)" }}></div>

      <div style={{ position: "relative", zIndex: 2, paddingTop: 22 }}>
        <Container>
          <NavBar
            links={[
              { label: "Research", href: "#research" },
              { label: "Projects", href: "#projects" },
              { label: "Achievements", href: "#achievements" },
              { label: "About", href: "#about" },
            ]}
            action={<Button size="sm" variant="primary" href="../../assets/abhishek-resume.pdf" iconLeft={<Download/>}>Résumé</Button>} />
        </Container>
      </div>

      <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", paddingBlock: "64px" }}>
        <Container style={{ display: "grid", gridTemplateColumns: "1.25fr .75fr", gap: "var(--sp-8)", alignItems: "center", width: "100%" }} className="hero-grid">
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: ".6em", fontFamily: "var(--font-mono)", fontSize: "var(--fs-2xs)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--accent)", marginBottom: 22 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lime)", boxShadow: "0 0 10px var(--lime)" }}></span>
              B.Tech EE · IIT Patna · Batch of 2027
            </span>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-hero)", lineHeight: "var(--lh-tight)", letterSpacing: "var(--ls-tighter)", color: "var(--text-hi)", margin: 0 }}>
              Abhishek<br/>Singh
            </h1>
            <p style={{ fontSize: "var(--fs-lg)", color: "var(--text-muted)", maxWidth: "46ch", marginTop: 20, lineHeight: "var(--lh-normal)" }}>
              Building intelligent systems at the intersection of <span style={{ color: "var(--photon-bright)" }}>AI</span>,{" "}
              <span style={{ color: "var(--optic-bright)" }}>photonics</span>, mathematics and engineering.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
              <Badge tone="photon">Video Anomaly Detection</Badge>
              <Badge tone="optic">Silicon Photonics</Badge>
              <Badge tone="resonance">Software Engineering</Badge>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}>
              <Button variant="primary" size="lg" href="#projects" iconRight={<Arrow/>}>View Work</Button>
              <Button variant="ghost" size="lg" href="#contact">Get in touch</Button>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 30 }}>
              <IconButton label="GitHub" href="https://github.com/Abhishek5467" round><img src={ICON.github} alt=""/></IconButton>
              <IconButton label="LinkedIn" href="https://www.linkedin.com/in/abhishek-singh-3a54a5294/" round><img src={ICON.linkedin} alt=""/></IconButton>
              <IconButton label="Kaggle" href="https://www.kaggle.com/shivaabhishek108" round><img src={ICON.kaggle} alt=""/></IconButton>
              <IconButton label="Instagram" href="https://www.instagram.com/iitianabhishek5701/" round><img src={ICON.instagram} alt=""/></IconButton>
            </div>
          </div>

          <TiltCard intensity={8} className="hero-portrait" style={{ padding: 18, background: "var(--glass)", backdropFilter: "blur(var(--blur-glass))" }}>
            <div style={{ position: "relative", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
              <img src="../../assets/abhishek-portrait.png" alt="Abhishek Singh" style={{ width: "100%", display: "block", borderRadius: "var(--r-lg)" }}/>
              <div style={{ position: "absolute", left: 12, top: 12 }}><Badge tone="lime" dot>Available</Badge></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-hi)", fontSize: 18 }}>Abhishek Singh</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)", letterSpacing: ".08em" }}>SOFTWARE HEAD · INDITRONIX AI LABS</div>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)" }}>26°N</span>
            </div>
          </TiltCard>
        </Container>
      </div>

      <div style={{ position: "relative", zIndex: 2, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--scrim)", backdropFilter: "blur(8px)" }}>
        <Container style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }} className="hero-stats">
          {[["GATE ECE","AIR 1046"],["JEE ADV","AIR 5701"],["DSA SOLVED","1000+"],["CODECHEF","3★ · 1643"]].map(([k,v],i)=>(
            <div key={i} style={{ padding: "22px 18px", borderLeft: i ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".16em", color: "var(--text-faint)" }}>{k}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--text-hi)", marginTop: 6, letterSpacing: "-0.02em" }}>{v}</div>
            </div>
          ))}
        </Container>
      </div>
    </header>
  );
}

/* ───────────────────────── MARQUEE ───────────────────────── */
function SkillsTicker() {
  const items = ["Computer Vision","Silicon Photonics","PyTorch","Deep Learning","AutoEncoders","MEEP FDTD","OpenCV","Cloud / AWS","Embedded AI","Microring Resonators","Transformers"];
  return (
    <div style={{ padding: "26px 0", borderBottom: "1px solid var(--border)" }}>
      <Marquee items={items} size="1.5rem" speed={34} />
    </div>
  );
}

window.PortfolioSections = { Container, Section, Hero, SkillsTicker, ICON, Arrow };
