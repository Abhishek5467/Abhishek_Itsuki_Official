import React from "react";

const STYLE_ID = "ds-timeline";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-tl{ position:relative; display:grid; grid-template-columns:auto 1fr;
    gap:0 var(--sp-5); padding-bottom:var(--sp-6); }
  .ds-tl:last-child{ padding-bottom:0; }
  .ds-tl__rail{ position:relative; display:flex; flex-direction:column; align-items:center; }
  .ds-tl__dot{ width:14px; height:14px; border-radius:50%; margin-top:5px; flex:none;
    background:var(--_c, var(--accent)); box-shadow:0 0 0 4px var(--bg), 0 0 14px var(--_c, var(--accent)); z-index:1; }
  .ds-tl__dot--hollow{ background:var(--surface); border:2px solid var(--divider); box-shadow:0 0 0 4px var(--bg); }
  .ds-tl__line{ width:2px; flex:1; margin-top:4px;
    background:linear-gradient(var(--divider), transparent); }
  .ds-tl:last-child .ds-tl__line{ display:none; }
  .ds-tl__body{ padding-bottom:2px; }
  .ds-tl__period{ font-family:var(--font-mono); font-size:var(--fs-2xs); letter-spacing:.12em;
    text-transform:uppercase; color:var(--_c, var(--accent)); }
  .ds-tl__title{ font-family:var(--font-display); font-weight:600; font-size:var(--fs-h3);
    color:var(--text-hi); margin:.35rem 0 .1rem; letter-spacing:-0.01em; }
  .ds-tl__org{ display:flex; flex-wrap:wrap; gap:.5rem; align-items:center;
    font-size:var(--fs-sm); color:var(--text-body); }
  .ds-tl__org b{ color:var(--text-hi); font-weight:600; }
  .ds-tl__loc{ color:var(--text-faint); }
  .ds-tl__desc{ color:var(--text-muted); font-size:var(--fs-sm); line-height:var(--lh-normal);
    margin:.5rem 0 0; }
  `;
  document.head.appendChild(el);
}

const TONES = { photon: "var(--photon)", optic: "var(--optic)", resonance: "var(--resonance)",
  signal: "var(--signal)", lime: "var(--lime)" };

/**
 * TimelineItem — one node in an education / experience timeline.
 * Stack several inside a flex column.
 */
export function TimelineItem({
  period,
  title,
  org,
  location,
  description,
  children,
  tone = "photon",
  hollow = false,
  className = "",
  ...rest
}) {
  return (
    <div className={`ds-tl ${className}`.trim()} style={{ "--_c": TONES[tone] || TONES.photon }} {...rest}>
      <div className="ds-tl__rail">
        <span className={`ds-tl__dot ${hollow ? "ds-tl__dot--hollow" : ""}`} />
        <span className="ds-tl__line" />
      </div>
      <div className="ds-tl__body">
        {period && <div className="ds-tl__period">{period}</div>}
        {title && <h3 className="ds-tl__title">{title}</h3>}
        {(org || location) && (
          <div className="ds-tl__org">
            {org && <span><b>{org}</b></span>}
            {location && <span className="ds-tl__loc">· {location}</span>}
          </div>
        )}
        {description && <p className="ds-tl__desc">{description}</p>}
        {children}
      </div>
    </div>
  );
}
