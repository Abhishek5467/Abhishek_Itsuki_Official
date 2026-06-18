import React from "react";

const STYLE_ID = "ds-skillmeter";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-skill{ display:flex; flex-direction:column; gap:.5rem; }
  .ds-skill__top{ display:flex; align-items:baseline; justify-content:space-between; gap:.5rem; }
  .ds-skill__name{ font-size:var(--fs-sm); color:var(--text-body); font-weight:500;
    display:flex; align-items:center; gap:.5rem; }
  .ds-skill__name img{ width:16px; height:16px; }
  .ds-skill__val{ font-family:var(--font-mono); font-size:var(--fs-xs);
    color:var(--_c, var(--accent)); font-variant-numeric:tabular-nums; }
  .ds-skill__track{ position:relative; height:6px; border-radius:var(--r-pill);
    background:var(--surface-sunken); overflow:hidden; border:1px solid var(--border); }
  .ds-skill__fill{ position:absolute; inset:0 auto 0 0; border-radius:inherit;
    width:var(--_pct,0%); background:var(--_grad, var(--grad-photon));
    box-shadow:0 0 12px -2px var(--_c, var(--accent));
    transition:width var(--dur-glacial) var(--ease-out); }
  `;
  document.head.appendChild(el);
}

const TONES = {
  photon: { c: "var(--photon)", g: "var(--grad-photon)" },
  optic: { c: "var(--optic)", g: "linear-gradient(90deg,var(--optic),var(--optic-bright))" },
  resonance: { c: "var(--resonance)", g: "var(--grad-resonance)" },
  lime: { c: "var(--lime)", g: "linear-gradient(90deg,var(--photon),var(--lime))" },
};

/**
 * SkillMeter — labeled progress bar for proficiencies / contest ratings.
 * `value` is 0–100; `display` overrides the printed figure (e.g. "1643").
 */
export function SkillMeter({ name, icon, value = 0, display, tone = "photon", className = "", ...rest }) {
  const t = TONES[tone] || TONES.photon;
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={`ds-skill ${className}`.trim()} style={{ "--_c": t.c, "--_grad": t.g }} {...rest}>
      <div className="ds-skill__top">
        <span className="ds-skill__name">
          {icon && <img src={icon} alt="" />}
          {name}
        </span>
        {(display ?? value) !== undefined && (
          <span className="ds-skill__val">{display ?? `${pct}%`}</span>
        )}
      </div>
      <div className="ds-skill__track">
        <span className="ds-skill__fill" style={{ "--_pct": `${pct}%` }} />
      </div>
    </div>
  );
}
