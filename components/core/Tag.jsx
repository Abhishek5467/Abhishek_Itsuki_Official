import React from "react";

const STYLE_ID = "ds-tag";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-tag{
    display:inline-flex; align-items:center; gap:.45em;
    font-family:var(--font-mono); font-size:var(--fs-xs); font-weight:400;
    color:var(--text-body); background:var(--surface-sunken);
    border:1px solid var(--border); border-radius:var(--r-sm);
    padding:.4em .7em; line-height:1; white-space:nowrap;
    transition:border-color var(--dur-base) var(--ease-out), color var(--dur-base);
  }
  .ds-tag--interactive{ cursor:pointer; }
  .ds-tag--interactive:hover{ border-color:var(--accent); color:var(--accent); }
  .ds-tag__pre{ color:var(--text-faint); }
  `;
  document.head.appendChild(el);
}

/**
 * Tag — tech / tool chip with optional leading sigil (e.g. "#", "λ").
 */
export function Tag({ children, prefix, interactive = false, onClick, className = "", ...rest }) {
  return (
    <span
      className={`ds-tag ${interactive ? "ds-tag--interactive" : ""} ${className}`.trim()}
      onClick={onClick}
      {...rest}
    >
      {prefix && <span className="ds-tag__pre">{prefix}</span>}
      {children}
    </span>
  );
}
