import React from "react";

const STYLE_ID = "ds-statcard";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-stat{ position:relative; display:flex; flex-direction:column; gap:.35rem;
    padding:var(--sp-5); border-radius:var(--r-lg); background:var(--surface);
    border:1px solid var(--border); box-shadow:var(--rim-top);
    transition:border-color var(--dur-base), transform var(--dur-base) var(--ease-out); overflow:hidden; }
  .ds-stat::after{ content:""; position:absolute; right:-20%; top:-40%;
    width:160px; height:160px; background:var(--_glow, var(--accent-ghost));
    filter:blur(34px); opacity:.6; pointer-events:none; }
  .ds-stat:hover{ transform:translateY(-3px); border-color:var(--_edge, var(--accent)); }
  .ds-stat__label{ font-family:var(--font-mono); font-size:var(--fs-2xs);
    letter-spacing:.16em; text-transform:uppercase; color:var(--text-muted); }
  .ds-stat__value{ font-family:var(--font-display); font-weight:700;
    font-size:clamp(2rem,4.5vw,2.9rem); line-height:1; letter-spacing:-0.03em;
    color:var(--text-hi); font-variant-numeric:tabular-nums; display:flex;
    align-items:baseline; gap:.18em; }
  .ds-stat__unit{ font-size:.42em; color:var(--_edge, var(--accent)); font-weight:600; letter-spacing:0; }
  .ds-stat__sub{ font-size:var(--fs-sm); color:var(--text-faint); margin-top:.15rem; }
  `;
  document.head.appendChild(el);
}

const TONES = {
  photon: { edge: "var(--photon)", glow: "var(--photon-ghost)" },
  optic: { edge: "var(--optic)", glow: "var(--optic-ghost)" },
  resonance: { edge: "var(--resonance)", glow: "var(--resonance-ghost)" },
  signal: { edge: "var(--signal)", glow: "var(--signal-ghost)" },
  lime: { edge: "var(--lime)", glow: "var(--lime-ghost)" },
};

/**
 * StatCard — a single headline metric (rank, rating, AUC, count).
 */
export function StatCard({ value, unit, label, sub, tone = "photon", style, className = "", ...rest }) {
  const t = TONES[tone] || TONES.photon;
  return (
    <div
      className={`ds-stat ${className}`.trim()}
      style={{ "--_edge": t.edge, "--_glow": t.glow, ...style }}
      {...rest}
    >
      {label && <span className="ds-stat__label">{label}</span>}
      <span className="ds-stat__value">
        {value}
        {unit && <span className="ds-stat__unit">{unit}</span>}
      </span>
      {sub && <span className="ds-stat__sub">{sub}</span>}
    </div>
  );
}
