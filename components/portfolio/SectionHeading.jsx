import React from "react";

const STYLE_ID = "ds-section-heading";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-sh{ display:flex; flex-direction:column; gap:var(--sp-3); }
  .ds-sh--center{ align-items:center; text-align:center; }
  .ds-sh__eyebrow{ display:inline-flex; align-items:center; gap:.6em;
    font-family:var(--font-mono); font-size:var(--fs-2xs); font-weight:500;
    letter-spacing:var(--ls-eyebrow); text-transform:uppercase; color:var(--accent); }
  .ds-sh__eyebrow::before{ content:""; width:26px; height:1px; background:var(--accent);
    box-shadow:0 0 8px var(--accent); }
  .ds-sh--center .ds-sh__eyebrow::before{ display:none; }
  .ds-sh__idx{ font-family:var(--font-mono); color:var(--text-faint); }
  .ds-sh__title{ font-family:var(--font-display); font-weight:700;
    font-size:var(--fs-d2); line-height:var(--lh-tight); letter-spacing:var(--ls-tighter);
    color:var(--text-heading); margin:0; text-wrap:balance; }
  .ds-sh__title em{ font-style:normal; background:var(--grad-photon);
    -webkit-background-clip:text; background-clip:text; color:transparent; }
  .ds-sh__desc{ max-width:54ch; color:var(--text-muted); font-size:var(--fs-lg);
    line-height:var(--lh-normal); margin:0; }
  .ds-sh--center .ds-sh__desc{ margin-inline:auto; }
  `;
  document.head.appendChild(el);
}

/**
 * SectionHeading — eyebrow + display title + description block.
 * Wrap part of the title in <em> for a photon-gradient highlight.
 */
export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "start",
  className = "",
  ...rest
}) {
  return (
    <div className={`ds-sh ds-sh--${align} ${className}`.trim()} {...rest}>
      {(eyebrow || index) && (
        <span className="ds-sh__eyebrow">
          {index && <span className="ds-sh__idx">{index}</span>}
          {eyebrow}
        </span>
      )}
      {title && <h2 className="ds-sh__title">{title}</h2>}
      {description && <p className="ds-sh__desc">{description}</p>}
    </div>
  );
}
