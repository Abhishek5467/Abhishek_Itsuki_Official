import React from "react";

const STYLE_ID = "ds-sociallink";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-soc{ display:inline-flex; align-items:center; gap:.7rem;
    padding:.7rem .9rem; border-radius:var(--r-md); text-decoration:none;
    background:var(--surface-raised); border:1px solid var(--border);
    color:var(--text-body); transition:transform var(--dur-fast) var(--ease-out),
      border-color var(--dur-base), background var(--dur-base), box-shadow var(--dur-base); }
  .ds-soc:hover{ transform:translateY(-2px); border-color:var(--_c,var(--accent));
    box-shadow:0 0 18px -6px var(--_c,var(--accent)); color:var(--text-hi); }
  .ds-soc__ic{ width:22px; height:22px; display:inline-flex; flex:none; }
  .ds-soc__ic img,.ds-soc__ic svg{ width:100%; height:100%; }
  .ds-soc__tx{ display:flex; flex-direction:column; line-height:1.25; }
  .ds-soc__net{ font-size:var(--fs-sm); font-weight:600; color:inherit; }
  .ds-soc__handle{ font-family:var(--font-mono); font-size:var(--fs-2xs); color:var(--text-faint); }
  .ds-soc__arrow{ margin-left:auto; color:var(--text-faint); transition:transform var(--dur-base) var(--ease-out), color var(--dur-base); }
  .ds-soc:hover .ds-soc__arrow{ color:var(--_c,var(--accent)); transform:translate(2px,-2px); }
  `;
  document.head.appendChild(el);
}

const ARROW = (
  <svg className="ds-soc__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

/**
 * SocialLink — branded link row with icon, network name and handle.
 * `color` sets the per-brand hover glow (e.g. "#0A66C2" for LinkedIn).
 */
export function SocialLink({ network, handle, icon, href, color, arrow = true, className = "", ...rest }) {
  return (
    <a
      className={`ds-soc ${className}`.trim()}
      href={href}
      style={{ "--_c": color }}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      {icon && <span className="ds-soc__ic">{typeof icon === "string" ? <img src={icon} alt="" /> : icon}</span>}
      <span className="ds-soc__tx">
        <span className="ds-soc__net">{network}</span>
        {handle && <span className="ds-soc__handle">{handle}</span>}
      </span>
      {arrow && ARROW}
    </a>
  );
}
