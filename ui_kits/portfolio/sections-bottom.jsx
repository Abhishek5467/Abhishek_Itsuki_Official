/* Portfolio sections (cont.) — Research, Projects, Achievements, About, Studio, Contact. */
const NS2 = window.AbhishekSinghPortfolioDesignSystem_9edb24;
const {
  Button, Badge, Tag, Card, IconButton, Avatar, Divider,
  SectionHeading, StatCard, ProjectCard, TimelineItem, SkillMeter, SocialLink, TiltCard,
} = NS2;
const { Container, Section, ICON, Arrow } = window.PortfolioSections;

/* ───────────── RESEARCH ───────────── */
function Research() {
  return (
    <Section id="research" className="bg-grid" style={{ borderBottom: "1px solid var(--border)" }}>
      <Container>
        <SectionHeading index="01" eyebrow="Research"
          title={<>Reading the <em>anomalous</em> signal</>}
          description="Two active research threads at IIT Patna — one in deep-learning surveillance, one in integrated photonics." />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-5)", marginTop: "var(--sp-7)" }} className="two-col">
          <Card variant="glass" padding="none" accent interactive>
            <div style={{ aspectRatio: "16/9", overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
              <img src="../../assets/research-cuhk-hpfs.png" alt="Anomaly detection heatmap" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
            </div>
            <div style={{ padding: "var(--sp-5)" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}><Badge tone="signal" dot>Video Anomaly Detection</Badge></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--text-hi)", fontWeight: 600 }}>Dataset-Adaptive Hybrid Patch-Feature Scoring</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 10, lineHeight: 1.6 }}>
                A lightweight 3D convolutional autoencoder that calibrates anomaly scoring per dataset — balancing spatial reconstruction error against latent feature deviation.
              </p>
              <div style={{ display: "flex", gap: 18, marginTop: 18 }}>
                <div><div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--photon-bright)" }}>0.798</div><div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-faint)" }}>UCSD PED2 · AUC</div></div>
                <div><div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--optic-bright)" }}>0.816</div><div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-faint)" }}>CUHK AVENUE · AUC</div></div>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)", marginTop: 18 }}>Supervisor · Dr. Maheshkumar H. Kolekar</div>
            </div>
          </Card>

          <Card variant="glass" padding="none" accent accentColor="var(--grad-resonance)" interactive>
            <div style={{ aspectRatio: "16/9", display: "grid", placeItems: "center", borderBottom: "1px solid var(--border)", background: "radial-gradient(circle at 50% 50%, rgba(124,108,255,.18), transparent 60%), var(--surface-sunken)", position: "relative", overflow: "hidden" }} className="bg-scan">
              <div style={{ width: 130, height: 130, borderRadius: "50%", border: "2px solid var(--optic)", boxShadow: "0 0 40px -6px var(--optic), inset 0 0 30px -8px var(--optic)", display: "grid", placeItems: "center" }}>
                <div style={{ width: 86, height: 86, borderRadius: "50%", border: "1px solid var(--resonance)", boxShadow: "0 0 24px -6px var(--resonance)" }}></div>
              </div>
            </div>
            <div style={{ padding: "var(--sp-5)" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}><Badge tone="optic" dot>Silicon Photonics</Badge></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--text-hi)", fontWeight: 600 }}>Microring Resonators & Optical Coupling</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 10, lineHeight: 1.6 }}>
                FDTD simulation of photonic integrated circuits — analysing lateral / vertical coupling and series / parallel cascading of microring resonators for optical computing.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
                <Tag prefix="λ">MEEP FDTD</Tag><Tag prefix="#">Resonance</Tag><Tag prefix="#">Coupling Coeff.</Tag>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)", marginTop: 18 }}>Supervisor · Prof. Sumanta Gupta</div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────── PROJECTS ───────────── */
function Projects() {
  const data = [
    { category: "Computer Vision", image: "../../assets/research-ucsd-hpfs.png", title: "AI Surveillance System", description: "AutoEncoder-based video anomaly detection trained on UCSD, CUHK Avenue & ShanghaiTech.", tags: ["PyTorch","3D-CNN","OpenCV"], href: "https://github.com/Abhishek5467/ai-surveillance-system" },
    { category: "Infrastructure", title: "USAS Ingestor Engine", description: "Scalable multi-camera surveillance ingestion with frame sync & preprocessing pipeline.", tags: ["Python","CCTV","Pipelines"], href: "https://github.com/Abhishek5467" },
    { category: "Graphics", title: "Custom 3D Rendering Engine", description: "Real-time renderer with gesture control and an interactive quadratic-spline editor.", tags: ["WebGL","Canvas","Creative"], href: "https://github.com/Abhishek5467/Custom-3d-rendering-engine" },
    { category: "Photonics", title: "Silicon Photonics Sims", description: "MEEP FDTD resonance analysis & coupling-coefficient optimisation for ring resonators.", tags: ["MEEP","FDTD","Optics"], href: "https://github.com/Abhishek5467" },
    { category: "Healthcare IoT", title: "Inditronix Platform", description: "Company website on AWS EC2 + ESP32 IoT and Hugging Face ML inference backends.", tags: ["AWS","ESP32","HF Spaces"], href: "https://github.com/Abhishek5467" },
    { category: "3D / Web", title: "Sam Animation", description: "Three.js + Blender studio site showcasing real-time GLB models and shaders.", tags: ["Three.js","Blender","React"], href: "https://github.com/Abhishek5467/Sam_Animation" },
  ];
  return (
    <Section id="projects" style={{ borderBottom: "1px solid var(--border)" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
          <SectionHeading index="02" eyebrow="Selected Work"
            title={<>Things I've <em>built</em></>}
            description="Systems spanning AI, cloud, embedded and computer graphics." />
          <Button variant="ghost" href="https://github.com/Abhishek5467" iconRight={<Arrow/>}>All repositories</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--sp-5)", marginTop: "var(--sp-7)" }} className="proj-grid">
          {data.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </Container>
    </Section>
  );
}

/* ───────────── ACHIEVEMENTS / CP ───────────── */
function Achievements() {
  return (
    <Section id="achievements" className="bg-grid" style={{ borderBottom: "1px solid var(--border)" }}>
      <Container>
        <SectionHeading index="03" eyebrow="By the numbers" align="center"
          title={<>Ranks, ratings & <em>reps</em></>} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--sp-4)", marginTop: "var(--sp-7)" }} className="stat-grid">
          <StatCard label="GATE ECE" value="1046" unit="AIR" sub="Score 662" />
          <StatCard label="JEE Advanced" value="5701" unit="AIR" tone="optic" />
          <StatCard label="JEE Main" value="4311" unit="AIR" tone="resonance" />
          <StatCard label="DSA Solved" value="1000" unit="+" tone="lime" sub="Across 4 judges" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-6)", marginTop: "var(--sp-7)" }} className="two-col">
          <Card variant="glass" padding="lg">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 18 }}>Competitive Programming</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <SkillMeter name="Codeforces" display="1241 · Pupil" value={58} tone="optic" icon={ICON.codeforces} />
              <SkillMeter name="CodeChef" display="1643 · 3★" value={76} tone="resonance" icon={ICON.codechef} />
              <SkillMeter name="LeetCode" display="121 solved" value={48} tone="photon" />
              <SkillMeter name="GeeksforGeeks" display="183 solved" value={66} tone="lime" />
            </div>
          </Card>
          <Card variant="glass" padding="lg">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 18 }}>Core Stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
              {["Python","C++","PyTorch","OpenCV","Hugging Face","AWS","Linux","ESP32","MEEP","SQL","Git","Three.js"].map((t,i)=>(
                <Tag key={i} prefix="#">{t}</Tag>
              ))}
            </div>
            <Divider plain />
            <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6 }}>
              Active on Kaggle across healthcare prediction, financial risk modelling and environmental data — and an open-source author documenting silicon photonics.
            </p>
            <Button variant="secondary" size="sm" href="https://www.kaggle.com/shivaabhishek108" iconLeft={<img src={ICON.kaggle} alt="" style={{width:16,height:16}}/>}>Kaggle profile</Button>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────── ABOUT / TIMELINE ───────────── */
function About() {
  return (
    <Section id="about" style={{ borderBottom: "1px solid var(--border)" }}>
      <Container style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: "var(--sp-8)" }} className="two-col">
        <div>
          <SectionHeading index="04" eyebrow="Trajectory"
            title={<>Education & <em>experience</em></>}
            description="From entrance ranks to research labs and a startup engineering role." />
          <div style={{ marginTop: 26 }}>
            <Button variant="primary" href="../../assets/abhishek-resume.pdf" iconRight={<Arrow/>}>Download CV</Button>
          </div>
        </div>
        <div>
          <TimelineItem period="2023 — 2027 · Ongoing" title="B.Tech, Electrical Engineering" org="IIT Patna" location="Bihar, India"
            description="Researching video anomaly detection and silicon photonics across two labs." >
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}><Tag prefix="#">Research</Tag><Tag prefix="#">Photonics</Tag></div>
          </TimelineItem>
          <TimelineItem period="2024 — Present" title="Software Head" org="Inditronix AI Labs" location="Incubated · IIT Patna & AIIMS Patna" tone="optic"
            description="Lead software architecture: AWS EC2 deployment, ML inference on Hugging Face, SNR pipelines and ESP32 IoT for healthcare." />
          <TimelineItem period="2024 — Present" title="Research Assistant — Video Surveillance Lab" org="Dept. of Electrical Engineering, IIT Patna" tone="signal" hollow
            description="Under Dr. Maheshkumar H. Kolekar — unsupervised anomaly detection on surveillance datasets." />
          <TimelineItem period="2024 — Present" title="Research Assistant — Photonics" org="Microring Resonator Group, IIT Patna" tone="resonance" hollow
            description="Under Prof. Sumanta Gupta — FDTD simulation of photonic integrated circuits." />
        </div>
      </Container>
    </Section>
  );
}

/* ───────────── STUDIO / YOUTUBE ───────────── */
function Studio() {
  return (
    <Section id="studio" style={{ borderBottom: "1px solid var(--border)" }}>
      <Container>
        <TiltCard intensity={5} style={{ padding: 0, overflow: "hidden", background: "var(--surface)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", alignItems: "stretch" }} className="two-col">
            <div style={{ padding: "var(--sp-8)" }}>
              <div style={{ display: "flex", gap: 8 }}><Badge tone="signal" dot>Creator</Badge><Badge tone="neutral">Studio · Soon</Badge></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text-hi)", letterSpacing: "-0.03em", margin: "16px 0 0", lineHeight: 1.05 }}>
                3D, in motion —<br/>on <em style={{ fontStyle: "normal", background: "var(--grad-resonance)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>IITakuEdits</em>
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "var(--fs-lg)", lineHeight: 1.6, marginTop: 16, maxWidth: "42ch" }}>
                On my YouTube channel <b style={{ color: "var(--text-hi)", fontWeight: 600 }}>IITakuEdits</b>, engineering meets art — Blender models, Three.js shaders and real-time scenes, broken down step by step. Building toward <b style={{ color: "var(--text-hi)", fontWeight: 600 }}>Sam Animation Studio</b>, my upcoming venture.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
                <Button variant="signal" iconLeft={<img src={ICON.youtube} alt="" style={{width:18,height:18}}/>} href="https://www.youtube.com/@IITakuEdits">Watch IITakuEdits</Button>
                <Button variant="ghost" href="https://github.com/Abhishek5467/Sam_Animation">Studio repo</Button>
              </div>
            </div>
            <div style={{ display: "grid", placeItems: "center", padding: "var(--sp-7)", background: "radial-gradient(circle at 50% 30%, rgba(255,77,94,.12), transparent 60%), var(--surface-sunken)", borderLeft: "1px solid var(--border)" }}>
              <div style={{ background: "#fff", borderRadius: "var(--r-md)", padding: "18px 22px" }}>
                <img src="../../assets/sam-animation-logo.svg" alt="Sam Animation logo" style={{ width: 220, display: "block" }}/>
              </div>
            </div>
          </div>
        </TiltCard>
      </Container>
    </Section>
  );
}

/* ───────────── CONTACT / FOOTER ───────────── */
function Contact() {
  const socials = [
    { network: "GitHub", handle: "@Abhishek5467", icon: ICON.github, color: "#ffffff", href: "https://github.com/Abhishek5467" },
    { network: "LinkedIn", handle: "abhishek-singh", icon: ICON.linkedin, color: "#0A66C2", href: "https://www.linkedin.com/in/abhishek-singh-3a54a5294/" },
    { network: "YouTube", handle: "@IITakuEdits", icon: ICON.youtube, color: "#FF0000", href: "https://www.youtube.com/@IITakuEdits" },
    { network: "Kaggle", handle: "shivaabhishek108", icon: ICON.kaggle, color: "#20BEFF", href: "https://www.kaggle.com/shivaabhishek108" },
    { network: "Codeforces", handle: "journey_to_grandmaster", icon: ICON.codeforces, color: "#7C6CFF", href: "https://codeforces.com/profile/journey_to_grandmaster" },
    { network: "Instagram", handle: "iitianabhishek5701", icon: ICON.instagram, color: "#E4405F", href: "https://www.instagram.com/iitianabhishek5701/" },
  ];
  return (
    <Section id="contact" className="bg-bloom" style={{ paddingBottom: "var(--sp-8)" }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <SectionHeading index="05" eyebrow="Contact" align="center"
            title={<>Let's build something <em>intelligent</em></>}
            description="Open to research collaborations, internships and engineering roles." />
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 26 }}>
            <Button variant="primary" size="lg" href="mailto:abhishek@example.com" iconRight={<Arrow/>}>Email me</Button>
            <Button variant="ghost" size="lg" href="../../assets/abhishek-resume.pdf">Résumé (PDF)</Button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--sp-4)", marginTop: "var(--sp-8)" }} className="social-grid">
          {socials.map((s,i)=><SocialLink key={i} {...s} />)}
        </div>
        <Divider plain />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, color: "var(--text-faint)", fontFamily: "var(--font-mono)", fontSize: 12 }}>
          <span>© 2026 Abhishek Singh · IIT Patna</span>
          <span>Built with the Photonic Lab design system</span>
        </div>
      </Container>
    </Section>
  );
}

function PortfolioApp() {
  const { Hero, SkillsTicker } = window.PortfolioSections;
  return (
    <React.Fragment>
      <Hero />
      <SkillsTicker />
      <Research />
      <Projects />
      <Achievements />
      <About />
      <Studio />
      <Contact />
    </React.Fragment>
  );
}
window.PortfolioApp = PortfolioApp;
