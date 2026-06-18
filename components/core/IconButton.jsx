import React from "react";

const STYLE_ID = "ds-iconbtn";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-iconbtn{
    display:inline-flex; align-items:center; justify-content:center;
    background:var(--surface-raised); color:var(--text-body);
    border:1px solid var(--border-strong); border-radius:var(--r-md);
    cursor:pointer; text-decoration:none; flex:none;
    transition:transform var(--dur-fast) var(--ease-out),
               border-color var(--dur-base), color var(--dur-base),
               background var(--dur-base), box-shadow var(--dur-base);
  }
  .ds-iconbtn--round{ border-radius:var(--r-pill); }
  .ds-iconbtn--sm{ width:34px; height:34px; }
  .ds-iconbtn--md{ width:42px; height:42px; }
  .ds-iconbtn--lg{ width:52px; height:52px; }
  .ds-iconbtn svg, .ds-iconbtn img{ width:42%; height:42%; }
  .ds-iconbtn:hover{ transform:translateY(-2px); color:var(--accent);
    border-color:var(--accent); background:var(--accent-ghost);
    box-shadow:var(--glow-photon-sm); }
  .ds-iconbtn:active{ transform:translateY(0); }
  .ds-iconbtn--ghost{ background:transparent; border-color:var(--border); }
  `;
  document.head.appendChild(el);
}

/**
 * IconButton — square/round control for social links and toolbar actions.
 */
export function IconButton({
  children,
  href,
  size = "md",
  round = false,
  ghost = false,
  label,
  onClick,
  className = "",
  ...rest
}) {
  const cls = [
    "ds-iconbtn",
    `ds-iconbtn--${size}`,
    round && "ds-iconbtn--round",
    ghost && "ds-iconbtn--ghost",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const Tag = href ? "a" : "button";
  return (
    <Tag className={cls} href={href} aria-label={label} title={label} onClick={onClick} {...rest}>
      {children}
    </Tag>
  );
}
