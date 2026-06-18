import React from "react";

const STYLE_ID = "ds-projectcard";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-proj{ position:relative; display:flex; flex-direction:column;
    border-radius:var(--r-lg); background:var(--surface); border:1px solid var(--border);
    overflow:hidden; box-shadow:var(--sh-md), var(--rim-top); text-decoration:none;
    transition:transform var(--dur-base) var(--ease-out), border-color var(--dur-base),
               box-shadow var(--dur-base); height:100%; }
  .ds-proj:hover{ transform:translateY(-4px); border-color:var(--accent);
    box-shadow:var(--sh-lg), var(--glow-photon-sm); }
  .ds-proj__media{ position:relative; aspect-ratio:16/10; overflow:hidden;
    background:var(--surface-sunken); }
  .ds-proj__media img{ width:100%; height:100%; object-fit:cover;
    transition:transform var(--dur-slow) var(--ease-out); }
  .ds-proj:hover .ds-proj__media img{ transform:scale(1.05); }
  .ds-proj__media::after{ content:""; position:absolute; inset:0;
    background:linear-gradient(180deg, transparent 40%, rgba(5,7,14,.55) 100%); }
  .ds-proj__media--blank{ display:flex; align-items:center; justify-content:center;
    background:var(--surface-sunken);
    background-image:linear-gradient(var(--line) 1px,transparent 1px),
      linear-gradient(90deg,var(--line) 1px,transparent 1px); background-size:28px 28px; }
  .ds-proj__cat{ position:absolute; top:12px; left:12px; z-index:1;
    font-family:var(--font-mono); font-size:var(--fs-2xs); letter-spacing:.14em;
    text-transform:uppercase; color:var(--accent); background:var(--scrim);
    border:1px solid var(--border-strong); border-radius:var(--r-pill);
    padding:.32em .7em; backdrop-filter:blur(8px); }
  .ds-proj__body{ display:flex; flex-direction:column; gap:.6rem; padding:var(--sp-5); flex:1; }
  .ds-proj__title{ font-family:var(--font-display); font-weight:600; font-size:var(--fs-h3);
    color:var(--text-hi); letter-spacing:-0.01em; display:flex; align-items:center; gap:.5rem; }
  .ds-proj__arrow{ margin-left:auto; color:var(--text-faint); transition:transform var(--dur-base) var(--ease-out), color var(--dur-base); }
  .ds-proj:hover .ds-proj__arrow{ color:var(--accent); transform:translate(3px,-3px); }
  .ds-proj__desc{ color:var(--text-muted); font-size:var(--fs-sm); line-height:var(--lh-normal); margin:0; }
  .ds-proj__tags{ display:flex; flex-wrap:wrap; gap:.4rem; margin-top:auto; padding-top:.4rem; }
  .ds-proj__tag{ font-family:var(--font-mono); font-size:var(--fs-2xs); color:var(--text-faint);
    border:1px solid var(--border); border-radius:var(--r-sm); padding:.3em .55em; }
  `;
  document.head.appendChild(el);
}

const ARROW = (
  <svg className="ds-proj__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

/**
 * ProjectCard — image/visual + title + description + tech tags. Renders as
 * a link when `href` is provided.
 */
export function ProjectCard({
  title,
  description,
  category,
  image,
  imageAlt = "",
  tags = [],
  href,
  arrow = true,
  className = "",
  ...rest
}) {
  const Tag = href ? "a" : "div";
  return (
    <Tag className={`ds-proj ${className}`.trim()} href={href} {...rest}>
      <div className={`ds-proj__media ${image ? "" : "ds-proj__media--blank"}`}>
        {category && <span className="ds-proj__cat">{category}</span>}
        {image && <img src={image} alt={imageAlt} />}
      </div>
      <div className="ds-proj__body">
        <h3 className="ds-proj__title">
          {title}
          {arrow && ARROW}
        </h3>
        {description && <p className="ds-proj__desc">{description}</p>}
        {tags.length > 0 && (
          <div className="ds-proj__tags">
            {tags.map((t, i) => (
              <span className="ds-proj__tag" key={i}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </Tag>
  );
}
