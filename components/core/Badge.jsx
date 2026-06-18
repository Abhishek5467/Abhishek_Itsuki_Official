import React from "react";

const STYLE_ID = "ds-badge";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-badge{
    display:inline-flex; align-items:center; gap:.4em;
    font-family:var(--font-mono); font-size:var(--fs-2xs); font-weight:500;
    letter-spacing:.04em; text-transform:uppercase;
    padding:.32em .7em; border-radius:var(--r-pill);
    border:1px solid transparent; line-height:1; white-space:nowrap;
  }
  .ds-badge--solid{ background:var(--accent); color:var(--accent-contrast); }
  .ds-badge--photon{ background:var(--accent-ghost); color:var(--photon-bright); border-color:rgba(22,234,213,.32); }
  .ds-badge--optic{ background:var(--optic-ghost); color:var(--optic-bright); border-color:rgba(124,108,255,.34); }
  .ds-badge--resonance{ background:var(--resonance-ghost); color:var(--resonance); border-color:rgba(245,182,66,.34); }
  .ds-badge--signal{ background:var(--signal-ghost); color:var(--signal); border-color:rgba(255,77,94,.34); }
  .ds-badge--lime{ background:var(--lime-ghost); color:var(--lime); border-color:rgba(136,255,176,.34); }
  .ds-badge--neutral{ background:var(--surface-raised); color:var(--text-muted); border-color:var(--border-strong); }
  .ds-badge__dot{ width:.5em; height:.5em; border-radius:50%; background:currentColor;
    box-shadow:0 0 8px currentColor; }
  `;
  document.head.appendChild(el);
}

/**
 * Badge — small status / category pill in mono caps.
 */
export function Badge({ children, tone = "photon", dot = false, className = "", ...rest }) {
  return (
    <span className={`ds-badge ds-badge--${tone} ${className}`.trim()} {...rest}>
      {dot && <span className="ds-badge__dot" />}
      {children}
    </span>
  );
}
