import React from "react";

const STYLE_ID = "ds-button";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-btn{
    --_bg: var(--accent); --_fg: var(--accent-contrast); --_bd: transparent;
    display:inline-flex; align-items:center; justify-content:center; gap:.55em;
    font-family:var(--font-display); font-weight:600; letter-spacing:-0.01em;
    border:1px solid var(--_bd); background:var(--_bg); color:var(--_fg);
    border-radius:var(--r-pill); cursor:pointer; white-space:nowrap;
    text-decoration:none; position:relative; isolation:isolate;
    transition:transform var(--dur-fast) var(--ease-out),
               box-shadow var(--dur-base) var(--ease-out),
               background var(--dur-base) var(--ease-out),
               border-color var(--dur-base) var(--ease-out), color var(--dur-base);
    -webkit-tap-highlight-color:transparent;
  }
  .ds-btn:hover{ transform:translateY(-1px); }
  .ds-btn:active{ transform:translateY(0) scale(.985); }
  .ds-btn:disabled,.ds-btn[aria-disabled="true"]{ opacity:.45; pointer-events:none; transform:none; }

  .ds-btn--sm{ font-size:var(--fs-sm); padding:.5rem .95rem; }
  .ds-btn--md{ font-size:var(--fs-body); padding:.7rem 1.35rem; }
  .ds-btn--lg{ font-size:var(--fs-lg); padding:.95rem 1.9rem; }

  .ds-btn--primary{ --_bg:var(--accent); --_fg:var(--accent-contrast);
    box-shadow:var(--glow-photon-sm); }
  .ds-btn--primary:hover{ --_bg:var(--accent-bright); box-shadow:var(--glow-photon); }

  .ds-btn--secondary{ --_bg:var(--surface-raised); --_fg:var(--text-hi);
    --_bd:var(--border-strong); }
  .ds-btn--secondary:hover{ --_bg:var(--surface-pop); --_bd:var(--accent); }

  .ds-btn--ghost{ --_bg:transparent; --_fg:var(--text-body); --_bd:var(--border-strong); }
  .ds-btn--ghost:hover{ --_fg:var(--accent); --_bd:var(--accent); background:var(--accent-ghost); }

  .ds-btn--signal{ --_bg:var(--signal); --_fg:#fff; box-shadow:var(--glow-signal); }
  .ds-btn--signal:hover{ filter:brightness(1.08); }

  .ds-btn__ico{ display:inline-flex; width:1.1em; height:1.1em; }
  .ds-btn__ico svg{ width:100%; height:100%; }
  `;
  document.head.appendChild(el);
}

/**
 * Button — primary call-to-action across the portfolio.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...rest
}) {
  const cls = `ds-btn ds-btn--${variant} ds-btn--${size} ${className}`.trim();
  const inner = (
    <>
      {iconLeft && <span className="ds-btn__ico">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="ds-btn__ico">{iconRight}</span>}
    </>
  );
  if (href && !disabled) {
    return (
      <a className={cls} href={href} onClick={onClick} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button
      className={cls}
      type={type}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={onClick}
      {...rest}
    >
      {inner}
    </button>
  );
}
