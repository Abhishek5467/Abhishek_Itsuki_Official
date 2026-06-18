import React from "react";

const STYLE_ID = "ds-navbar";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-nav{ display:flex; align-items:center; justify-content:space-between;
    gap:var(--sp-5); padding:.85rem 1.25rem; border-radius:var(--r-pill);
    background:var(--glass); backdrop-filter:blur(var(--blur-glass));
    -webkit-backdrop-filter:blur(var(--blur-glass));
    border:1px solid var(--border-strong); box-shadow:var(--sh-md), var(--rim-top); }
  .ds-nav__brand{ display:inline-flex; align-items:center; gap:.6rem; text-decoration:none;
    font-family:var(--font-display); font-weight:700; color:var(--text-hi);
    letter-spacing:-0.02em; font-size:var(--fs-lg); }
  .ds-nav__mono{ width:34px; height:34px; border-radius:var(--r-sm); flex:none;
    display:grid; place-items:center; background:var(--grad-photon);
    color:var(--accent-contrast); font-weight:700; font-size:1rem;
    box-shadow:var(--glow-photon-sm); }
  .ds-nav__links{ display:none; align-items:center; gap:.35rem; }
  @media (min-width:820px){ .ds-nav__links{ display:flex; } }
  .ds-nav__link{ position:relative; font-size:var(--fs-sm); font-weight:500;
    color:var(--text-muted); text-decoration:none; padding:.5rem .85rem; border-radius:var(--r-sm);
    transition:color var(--dur-base), background var(--dur-base); }
  .ds-nav__link:hover{ color:var(--text-hi); background:var(--surface-raised); }
  .ds-nav__link--active{ color:var(--accent); }
  .ds-nav__right{ display:flex; align-items:center; gap:.6rem; }
  .ds-nav__status{ display:none; align-items:center; gap:.45rem;
    font-family:var(--font-mono); font-size:var(--fs-2xs); letter-spacing:.1em;
    text-transform:uppercase; color:var(--text-muted); }
  @media (min-width:680px){ .ds-nav__status{ display:inline-flex; } }
  .ds-nav__pulse{ width:8px; height:8px; border-radius:50%; background:var(--lime);
    box-shadow:0 0 0 0 var(--lime); animation:ds-nav-pulse 2.4s var(--ease-out) infinite; }
  @keyframes ds-nav-pulse{ 0%{box-shadow:0 0 0 0 rgba(136,255,176,.5)} 70%{box-shadow:0 0 0 7px rgba(136,255,176,0)} 100%{box-shadow:0 0 0 0 rgba(136,255,176,0)} }
  `;
  document.head.appendChild(el);
}

/**
 * NavBar — floating glass navigation pill with monogram brand, links,
 * a live status indicator and a right-side action slot.
 */
export function NavBar({
  brand = "Abhishek Singh",
  monogram = "AS",
  links = [],
  status = "Available for research",
  action,
  className = "",
  ...rest
}) {
  return (
    <nav className={`ds-nav ${className}`.trim()} {...rest}>
      <a className="ds-nav__brand" href="#top">
        <span className="ds-nav__mono">{monogram}</span>
        {brand}
      </a>
      <div className="ds-nav__links">
        {links.map((l, i) => (
          <a
            key={i}
            className={`ds-nav__link ${l.active ? "ds-nav__link--active" : ""}`}
            href={l.href}
            onClick={l.onClick}
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="ds-nav__right">
        {status && (
          <span className="ds-nav__status">
            <span className="ds-nav__pulse" />
            {status}
          </span>
        )}
        {action}
      </div>
    </nav>
  );
}
