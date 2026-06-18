import React from "react";

const STYLE_ID = "ds-avatar";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-avatar{ position:relative; display:inline-flex; flex:none; border-radius:var(--r-pill);
    background:var(--surface-raised); overflow:visible; }
  .ds-avatar__img{ width:100%; height:100%; border-radius:inherit; object-fit:cover;
    display:block; background:var(--surface-sunken); }
  .ds-avatar--ring{ padding:3px; background:var(--grad-photon); }
  .ds-avatar--ring .ds-avatar__img{ border:2px solid var(--bg); }
  .ds-avatar--glow{ box-shadow:var(--glow-photon-sm); }
  .ds-avatar--square{ border-radius:var(--r-lg); }
  .ds-avatar--square .ds-avatar__img{ border-radius:var(--r-md); }
  .ds-avatar__status{ position:absolute; right:2px; bottom:2px;
    width:26%; height:26%; min-width:8px; min-height:8px; border-radius:50%;
    border:2px solid var(--bg); background:var(--lime); box-shadow:0 0 8px var(--lime); }
  `;
  document.head.appendChild(el);
}

/**
 * Avatar — portrait with optional gradient ring, glow and status dot.
 */
export function Avatar({
  src,
  alt = "",
  size = 56,
  ring = false,
  glow = false,
  square = false,
  status = false,
  className = "",
  ...rest
}) {
  const cls = [
    "ds-avatar",
    ring && "ds-avatar--ring",
    glow && "ds-avatar--glow",
    square && "ds-avatar--square",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} style={{ width: size, height: size }} {...rest}>
      <img className="ds-avatar__img" src={src} alt={alt} />
      {status && <span className="ds-avatar__status" />}
    </span>
  );
}
