import React from "react";

const STYLE_ID = "ds-tiltcard";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-tilt{ position:relative; border-radius:var(--r-xl);
    background:var(--surface); border:1px solid var(--border-strong);
    box-shadow:var(--sh-lg), var(--rim-top);
    transform-style:preserve-3d; transition:transform var(--dur-base) var(--ease-out);
    will-change:transform; }
  .ds-tilt__glare{ position:absolute; inset:0; border-radius:inherit; pointer-events:none;
    background:radial-gradient(220px 220px at var(--_mx,50%) var(--_my,0%),
      rgba(22,234,213,.18), transparent 60%);
    opacity:0; transition:opacity var(--dur-base); mix-blend-mode:screen; }
  .ds-tilt:hover .ds-tilt__glare{ opacity:1; }
  .ds-tilt__layer{ transform:translateZ(40px); }
  @media (prefers-reduced-motion: reduce){ .ds-tilt{ transform:none !important; } }
  `;
  document.head.appendChild(el);
}

/**
 * TiltCard — surface that tilts in 3D toward the cursor with a photon glare.
 * `intensity` is the max tilt in degrees. Content is given a small parallax pop.
 */
export function TiltCard({ children, intensity = 9, style, className = "", ...rest }) {
  const ref = React.useRef(null);

  const onMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * intensity * 2;
    const ry = (px - 0.5) * intensity * 2;
    node.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    node.style.setProperty("--_mx", `${px * 100}%`);
    node.style.setProperty("--_my", `${py * 100}%`);
  };
  const onLeave = () => {
    const node = ref.current;
    if (node) node.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      className={`ds-tilt ${className}`.trim()}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      <span className="ds-tilt__glare" />
      <div className="ds-tilt__layer">{children}</div>
    </div>
  );
}
