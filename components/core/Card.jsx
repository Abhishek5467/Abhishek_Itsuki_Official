import React from "react";

const STYLE_ID = "ds-card";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-card{
    position:relative; border-radius:var(--r-lg);
    background:var(--surface); border:1px solid var(--border);
    box-shadow:var(--sh-md), var(--rim-top); overflow:hidden;
    transition:transform var(--dur-base) var(--ease-out),
               border-color var(--dur-base) var(--ease-out),
               box-shadow var(--dur-base) var(--ease-out);
  }
  .ds-card--glass{
    background:var(--glass); backdrop-filter:blur(var(--blur-glass));
    -webkit-backdrop-filter:blur(var(--blur-glass));
    border-color:var(--border-strong);
  }
  .ds-card--outline{ background:transparent; box-shadow:none; }
  .ds-card--sunken{ background:var(--surface-sunken); box-shadow:none; }

  .ds-card--pad-sm{ padding:var(--sp-4); }
  .ds-card--pad-md{ padding:var(--sp-5); }
  .ds-card--pad-lg{ padding:var(--sp-6); }
  .ds-card--pad-none{ padding:0; }

  .ds-card--interactive{ cursor:pointer; }
  .ds-card--interactive:hover{
    transform:translateY(-3px); border-color:var(--accent);
    box-shadow:var(--sh-lg), var(--glow-photon-sm);
  }

  /* top accent rule, color via --card-accent */
  .ds-card--accent::before{
    content:""; position:absolute; inset:0 0 auto 0; height:2px;
    background:var(--card-accent, var(--grad-photon));
    opacity:.9;
  }
  /* corner registration tick (instrument motif) */
  .ds-card__tick{ position:absolute; top:10px; right:12px;
    font-family:var(--font-mono); font-size:var(--fs-2xs);
    letter-spacing:.12em; color:var(--text-faint); text-transform:uppercase; }
  `;
  document.head.appendChild(el);
}

/**
 * Card — glass / solid surface container with optional top accent rule.
 */
export function Card({
  children,
  variant = "default",
  padding = "md",
  interactive = false,
  accent = false,
  accentColor,
  tick,
  style,
  className = "",
  ...rest
}) {
  const cls = [
    "ds-card",
    variant !== "default" && `ds-card--${variant}`,
    `ds-card--pad-${padding}`,
    interactive && "ds-card--interactive",
    accent && "ds-card--accent",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls} style={{ "--card-accent": accentColor, ...style }} {...rest}>
      {tick && <span className="ds-card__tick">{tick}</span>}
      {children}
    </div>
  );
}
