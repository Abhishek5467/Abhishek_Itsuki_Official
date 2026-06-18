import React from "react";

const STYLE_ID = "ds-marquee";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-marquee{ position:relative; overflow:hidden; width:100%;
    -webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);
    mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); }
  .ds-marquee__track{ display:flex; width:max-content; gap:var(--_gap,3rem);
    align-items:center; animation:ds-marquee-roll var(--_dur,28s) linear infinite; }
  .ds-marquee--reverse .ds-marquee__track{ animation-direction:reverse; }
  .ds-marquee:hover .ds-marquee__track{ animation-play-state:paused; }
  .ds-marquee__item{ display:inline-flex; align-items:center; gap:.6rem; flex:none;
    font-family:var(--font-display); font-weight:600; font-size:var(--_size,1.4rem);
    color:var(--text-muted); letter-spacing:-0.01em; }
  .ds-marquee__sep{ color:var(--accent); font-size:.7em; }
  @keyframes ds-marquee-roll{ from{transform:translateX(0)} to{transform:translateX(calc(-50% - var(--_gap,3rem)/2))} }
  @media (prefers-reduced-motion: reduce){ .ds-marquee__track{ animation:none; } }
  `;
  document.head.appendChild(el);
}

const DOT = <span className="ds-marquee__sep">◆</span>;

/**
 * Marquee — infinite horizontal ticker. Pass an array of `items` (strings or
 * nodes); they are duplicated for a seamless loop. Pauses on hover.
 */
export function Marquee({
  items = [],
  separator = DOT,
  speed = 28,
  size = "1.4rem",
  gap = "3rem",
  reverse = false,
  className = "",
  ...rest
}) {
  const row = (key) => (
    <div className="ds-marquee__track" key={key} aria-hidden={key === "b" || undefined}>
      {items.map((it, i) => (
        <span className="ds-marquee__item" key={i}>
          {it}
          {separator}
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={`ds-marquee ${reverse ? "ds-marquee--reverse" : ""} ${className}`.trim()}
      style={{ "--_dur": `${speed}s`, "--_size": size, "--_gap": gap }}
      {...rest}
    >
      <div style={{ display: "flex" }}>
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
