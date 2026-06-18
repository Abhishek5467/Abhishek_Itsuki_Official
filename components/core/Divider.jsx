import React from "react";

const STYLE_ID = "ds-divider";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-divider{ display:flex; align-items:center; gap:var(--sp-3); width:100%;
    color:var(--text-faint); font-family:var(--font-mono); font-size:var(--fs-2xs);
    letter-spacing:.18em; text-transform:uppercase; }
  .ds-divider::before,.ds-divider::after{ content:""; height:1px; flex:1;
    background:linear-gradient(90deg, transparent, var(--divider), transparent); }
  .ds-divider--start::before{ display:none; }
  .ds-divider--end::after{ display:none; }
  .ds-divider--plain::before,.ds-divider--plain::after{
    background:var(--border); }
  .ds-divider__node{ display:inline-flex; align-items:center; gap:.5em; }
  `;
  document.head.appendChild(el);
}

/**
 * Divider — horizontal rule with an optional centered mono label.
 */
export function Divider({ children, align = "center", plain = false, className = "", ...rest }) {
  const cls = [
    "ds-divider",
    align !== "center" && `ds-divider--${align}`,
    plain && "ds-divider--plain",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls} {...rest}>
      {children && <span className="ds-divider__node">{children}</span>}
    </div>
  );
}
