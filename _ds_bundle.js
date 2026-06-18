/* @ds-bundle: {"format":3,"namespace":"AbhishekSinghPortfolioDesignSystem_9edb24","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"NavBar","sourcePath":"components/layout/NavBar.jsx"},{"name":"Marquee","sourcePath":"components/portfolio/Marquee.jsx"},{"name":"ProjectCard","sourcePath":"components/portfolio/ProjectCard.jsx"},{"name":"SectionHeading","sourcePath":"components/portfolio/SectionHeading.jsx"},{"name":"SkillMeter","sourcePath":"components/portfolio/SkillMeter.jsx"},{"name":"SocialLink","sourcePath":"components/portfolio/SocialLink.jsx"},{"name":"StatCard","sourcePath":"components/portfolio/StatCard.jsx"},{"name":"TiltCard","sourcePath":"components/portfolio/TiltCard.jsx"},{"name":"TimelineItem","sourcePath":"components/portfolio/TimelineItem.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"6320ca2b49bf","components/core/Badge.jsx":"7153fa717f5d","components/core/Button.jsx":"26ce44cb51d9","components/core/Card.jsx":"977d4840bff2","components/core/Divider.jsx":"4d5368ed0b1c","components/core/IconButton.jsx":"6a8e722bfa38","components/core/Tag.jsx":"999cdcc23287","components/layout/NavBar.jsx":"0023f4834049","components/portfolio/Marquee.jsx":"ec0cf361eb8f","components/portfolio/ProjectCard.jsx":"bb763d99fb04","components/portfolio/SectionHeading.jsx":"a5a78ae7d262","components/portfolio/SkillMeter.jsx":"9fe8574b3b11","components/portfolio/SocialLink.jsx":"e49cf32000ad","components/portfolio/StatCard.jsx":"fdf071ad7d28","components/portfolio/TiltCard.jsx":"0084cce0587d","components/portfolio/TimelineItem.jsx":"aeef3bb17bb1","ui_kits/portfolio/photon-bg.js":"238e5c438b67","ui_kits/portfolio/sections-bottom.jsx":"02fada51f70b","ui_kits/portfolio/sections-top.jsx":"aea9bc89eb3c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AbhishekSinghPortfolioDesignSystem_9edb24 = window.AbhishekSinghPortfolioDesignSystem_9edb24 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "ds-avatar";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-avatar{ position:relative; display:inline-flex; flex:none; border-radius:var(--r-pill);
    background:var(--surface-raised); overflow:visible; }
  .ds-avatar__img{ width:100%; height:100%; border-radius:inherit; object-fit:cover;
    display:block; background:var(--surface-sunken); }
  .ds-avatar--ring{ padding:3px; background:var(--grad-photon); }
  .ds-avatar--ring .ds-avatar__img{ border:2px solid var(--bg); }
  .ds-avatar--glow{ box-shadow:var(--glow-photon-sm); }
  .ds-avatar--square{ border-radius:var(--r-lg); }
  .ds-avatar--square .ds-avatar__img{ border-radius:var(--r-md); }
  .ds-avatar__status{ position:absolute; right:2px; bottom:2px;
    width:26%; height:26%; min-width:8px; min-height:8px; border-radius:50%;
    border:2px solid var(--bg); background:var(--lime); box-shadow:0 0 8px var(--lime); }
  `;
  document.head.appendChild(el);
}

/**
 * Avatar — portrait with optional gradient ring, glow and status dot.
 */
function Avatar({
  src,
  alt = "",
  size = 56,
  ring = false,
  glow = false,
  square = false,
  status = false,
  className = "",
  ...rest
}) {
  const cls = ["ds-avatar", ring && "ds-avatar--ring", glow && "ds-avatar--glow", square && "ds-avatar--square", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      width: size,
      height: size
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    className: "ds-avatar__img",
    src: src,
    alt: alt
  }), status && /*#__PURE__*/React.createElement("span", {
    className: "ds-avatar__status"
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "ds-badge";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-badge{
    display:inline-flex; align-items:center; gap:.4em;
    font-family:var(--font-mono); font-size:var(--fs-2xs); font-weight:500;
    letter-spacing:.04em; text-transform:uppercase;
    padding:.32em .7em; border-radius:var(--r-pill);
    border:1px solid transparent; line-height:1; white-space:nowrap;
  }
  .ds-badge--solid{ background:var(--accent); color:var(--accent-contrast); }
  .ds-badge--photon{ background:var(--accent-ghost); color:var(--photon-bright); border-color:rgba(22,234,213,.32); }
  .ds-badge--optic{ background:var(--optic-ghost); color:var(--optic-bright); border-color:rgba(124,108,255,.34); }
  .ds-badge--resonance{ background:var(--resonance-ghost); color:var(--resonance); border-color:rgba(245,182,66,.34); }
  .ds-badge--signal{ background:var(--signal-ghost); color:var(--signal); border-color:rgba(255,77,94,.34); }
  .ds-badge--lime{ background:var(--lime-ghost); color:var(--lime); border-color:rgba(136,255,176,.34); }
  .ds-badge--neutral{ background:var(--surface-raised); color:var(--text-muted); border-color:var(--border-strong); }
  .ds-badge__dot{ width:.5em; height:.5em; border-radius:50%; background:currentColor;
    box-shadow:0 0 8px currentColor; }
  `;
  document.head.appendChild(el);
}

/**
 * Badge — small status / category pill in mono caps.
 */
function Badge({
  children,
  tone = "photon",
  dot = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ds-badge ds-badge--${tone} ${className}`.trim()
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "ds-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "ds-btn__ico"
  }, iconLeft), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "ds-btn__ico"
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href,
      onClick: onClick
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    "aria-disabled": disabled || undefined,
    onClick: onClick
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
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
  const cls = ["ds-card", variant !== "default" && `ds-card--${variant}`, `ds-card--pad-${padding}`, interactive && "ds-card--interactive", accent && "ds-card--accent", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      "--card-accent": accentColor,
      ...style
    }
  }, rest), tick && /*#__PURE__*/React.createElement("span", {
    className: "ds-card__tick"
  }, tick), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "ds-divider";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-divider{ display:flex; align-items:center; gap:var(--sp-3); width:100%;
    color:var(--text-faint); font-family:var(--font-mono); font-size:var(--fs-2xs);
    letter-spacing:.18em; text-transform:uppercase; }
  .ds-divider::before,.ds-divider::after{ content:""; height:1px; flex:1;
    background:linear-gradient(90deg, transparent, var(--divider), transparent); }
  .ds-divider--start::before{ display:none; }
  .ds-divider--end::after{ display:none; }
  .ds-divider--plain::before,.ds-divider--plain::after{
    background:var(--border); }
  .ds-divider__node{ display:inline-flex; align-items:center; gap:.5em; }
  `;
  document.head.appendChild(el);
}

/**
 * Divider — horizontal rule with an optional centered mono label.
 */
function Divider({
  children,
  align = "center",
  plain = false,
  className = "",
  ...rest
}) {
  const cls = ["ds-divider", align !== "center" && `ds-divider--${align}`, plain && "ds-divider--plain", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children && /*#__PURE__*/React.createElement("span", {
    className: "ds-divider__node"
  }, children));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
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
  const cls = ["ds-iconbtn", `ds-iconbtn--${size}`, round && "ds-iconbtn--round", ghost && "ds-iconbtn--ghost", className].filter(Boolean).join(" ");
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    "aria-label": label,
    title: label,
    onClick: onClick
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Tag({
  children,
  prefix,
  interactive = false,
  onClick,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ds-tag ${interactive ? "ds-tag--interactive" : ""} ${className}`.trim(),
    onClick: onClick
  }, rest), prefix && /*#__PURE__*/React.createElement("span", {
    className: "ds-tag__pre"
  }, prefix), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/layout/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function NavBar({
  brand = "Abhishek Singh",
  monogram = "AS",
  links = [],
  status = "Available for research",
  action,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: `ds-nav ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "ds-nav__brand",
    href: "#top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-nav__mono"
  }, monogram), brand), /*#__PURE__*/React.createElement("div", {
    className: "ds-nav__links"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: `ds-nav__link ${l.active ? "ds-nav__link--active" : ""}`,
    href: l.href,
    onClick: l.onClick
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "ds-nav__right"
  }, status && /*#__PURE__*/React.createElement("span", {
    className: "ds-nav__status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-nav__pulse"
  }), status), action));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const DOT = /*#__PURE__*/React.createElement("span", {
  className: "ds-marquee__sep"
}, "\u25C6");

/**
 * Marquee — infinite horizontal ticker. Pass an array of `items` (strings or
 * nodes); they are duplicated for a seamless loop. Pauses on hover.
 */
function Marquee({
  items = [],
  separator = DOT,
  speed = 28,
  size = "1.4rem",
  gap = "3rem",
  reverse = false,
  className = "",
  ...rest
}) {
  const row = key => /*#__PURE__*/React.createElement("div", {
    className: "ds-marquee__track",
    key: key,
    "aria-hidden": key === "b" || undefined
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "ds-marquee__item",
    key: i
  }, it, separator)));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-marquee ${reverse ? "ds-marquee--reverse" : ""} ${className}`.trim(),
    style: {
      "--_dur": `${speed}s`,
      "--_size": size,
      "--_gap": gap
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, row("a"), row("b")));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const ARROW = /*#__PURE__*/React.createElement("svg", {
  className: "ds-proj__arrow",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7M9 7h8v8"
}));

/**
 * ProjectCard — image/visual + title + description + tech tags. Renders as
 * a link when `href` is provided.
 */
function ProjectCard({
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
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `ds-proj ${className}`.trim(),
    href: href
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: `ds-proj__media ${image ? "" : "ds-proj__media--blank"}`
  }, category && /*#__PURE__*/React.createElement("span", {
    className: "ds-proj__cat"
  }, category), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  })), /*#__PURE__*/React.createElement("div", {
    className: "ds-proj__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ds-proj__title"
  }, title, arrow && ARROW), description && /*#__PURE__*/React.createElement("p", {
    className: "ds-proj__desc"
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ds-proj__tags"
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    className: "ds-proj__tag",
    key: i
  }, t)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "start",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-sh ds-sh--${align} ${className}`.trim()
  }, rest), (eyebrow || index) && /*#__PURE__*/React.createElement("span", {
    className: "ds-sh__eyebrow"
  }, index && /*#__PURE__*/React.createElement("span", {
    className: "ds-sh__idx"
  }, index), eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "ds-sh__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "ds-sh__desc"
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SkillMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "ds-skillmeter";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-skill{ display:flex; flex-direction:column; gap:.5rem; }
  .ds-skill__top{ display:flex; align-items:baseline; justify-content:space-between; gap:.5rem; }
  .ds-skill__name{ font-size:var(--fs-sm); color:var(--text-body); font-weight:500;
    display:flex; align-items:center; gap:.5rem; }
  .ds-skill__name img{ width:16px; height:16px; }
  .ds-skill__val{ font-family:var(--font-mono); font-size:var(--fs-xs);
    color:var(--_c, var(--accent)); font-variant-numeric:tabular-nums; }
  .ds-skill__track{ position:relative; height:6px; border-radius:var(--r-pill);
    background:var(--surface-sunken); overflow:hidden; border:1px solid var(--border); }
  .ds-skill__fill{ position:absolute; inset:0 auto 0 0; border-radius:inherit;
    width:var(--_pct,0%); background:var(--_grad, var(--grad-photon));
    box-shadow:0 0 12px -2px var(--_c, var(--accent));
    transition:width var(--dur-glacial) var(--ease-out); }
  `;
  document.head.appendChild(el);
}
const TONES = {
  photon: {
    c: "var(--photon)",
    g: "var(--grad-photon)"
  },
  optic: {
    c: "var(--optic)",
    g: "linear-gradient(90deg,var(--optic),var(--optic-bright))"
  },
  resonance: {
    c: "var(--resonance)",
    g: "var(--grad-resonance)"
  },
  lime: {
    c: "var(--lime)",
    g: "linear-gradient(90deg,var(--photon),var(--lime))"
  }
};

/**
 * SkillMeter — labeled progress bar for proficiencies / contest ratings.
 * `value` is 0–100; `display` overrides the printed figure (e.g. "1643").
 */
function SkillMeter({
  name,
  icon,
  value = 0,
  display,
  tone = "photon",
  className = "",
  ...rest
}) {
  const t = TONES[tone] || TONES.photon;
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-skill ${className}`.trim(),
    style: {
      "--_c": t.c,
      "--_grad": t.g
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-skill__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-skill__name"
  }, icon && /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: ""
  }), name), (display ?? value) !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "ds-skill__val"
  }, display ?? `${pct}%`)), /*#__PURE__*/React.createElement("div", {
    className: "ds-skill__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-skill__fill",
    style: {
      "--_pct": `${pct}%`
    }
  })));
}
Object.assign(__ds_scope, { SkillMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SkillMeter.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SocialLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const ARROW = /*#__PURE__*/React.createElement("svg", {
  className: "ds-soc__arrow",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7M9 7h8v8"
}));

/**
 * SocialLink — branded link row with icon, network name and handle.
 * `color` sets the per-brand hover glow (e.g. "#0A66C2" for LinkedIn).
 */
function SocialLink({
  network,
  handle,
  icon,
  href,
  color,
  arrow = true,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: `ds-soc ${className}`.trim(),
    href: href,
    style: {
      "--_c": color
    },
    target: "_blank",
    rel: "noreferrer"
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "ds-soc__ic"
  }, typeof icon === "string" ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: ""
  }) : icon), /*#__PURE__*/React.createElement("span", {
    className: "ds-soc__tx"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-soc__net"
  }, network), handle && /*#__PURE__*/React.createElement("span", {
    className: "ds-soc__handle"
  }, handle)), arrow && ARROW);
}
Object.assign(__ds_scope, { SocialLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SocialLink.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "ds-statcard";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-stat{ position:relative; display:flex; flex-direction:column; gap:.35rem;
    padding:var(--sp-5); border-radius:var(--r-lg); background:var(--surface);
    border:1px solid var(--border); box-shadow:var(--rim-top);
    transition:border-color var(--dur-base), transform var(--dur-base) var(--ease-out); overflow:hidden; }
  .ds-stat::after{ content:""; position:absolute; right:-20%; top:-40%;
    width:160px; height:160px; background:var(--_glow, var(--accent-ghost));
    filter:blur(34px); opacity:.6; pointer-events:none; }
  .ds-stat:hover{ transform:translateY(-3px); border-color:var(--_edge, var(--accent)); }
  .ds-stat__label{ font-family:var(--font-mono); font-size:var(--fs-2xs);
    letter-spacing:.16em; text-transform:uppercase; color:var(--text-muted); }
  .ds-stat__value{ font-family:var(--font-display); font-weight:700;
    font-size:clamp(2rem,4.5vw,2.9rem); line-height:1; letter-spacing:-0.03em;
    color:var(--text-hi); font-variant-numeric:tabular-nums; display:flex;
    align-items:baseline; gap:.18em; }
  .ds-stat__unit{ font-size:.42em; color:var(--_edge, var(--accent)); font-weight:600; letter-spacing:0; }
  .ds-stat__sub{ font-size:var(--fs-sm); color:var(--text-faint); margin-top:.15rem; }
  `;
  document.head.appendChild(el);
}
const TONES = {
  photon: {
    edge: "var(--photon)",
    glow: "var(--photon-ghost)"
  },
  optic: {
    edge: "var(--optic)",
    glow: "var(--optic-ghost)"
  },
  resonance: {
    edge: "var(--resonance)",
    glow: "var(--resonance-ghost)"
  },
  signal: {
    edge: "var(--signal)",
    glow: "var(--signal-ghost)"
  },
  lime: {
    edge: "var(--lime)",
    glow: "var(--lime-ghost)"
  }
};

/**
 * StatCard — a single headline metric (rank, rating, AUC, count).
 */
function StatCard({
  value,
  unit,
  label,
  sub,
  tone = "photon",
  style,
  className = "",
  ...rest
}) {
  const t = TONES[tone] || TONES.photon;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-stat ${className}`.trim(),
    style: {
      "--_edge": t.edge,
      "--_glow": t.glow,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    className: "ds-stat__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "ds-stat__value"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "ds-stat__unit"
  }, unit)), sub && /*#__PURE__*/React.createElement("span", {
    className: "ds-stat__sub"
  }, sub));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/TiltCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "ds-tiltcard";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
  .ds-tilt{ position:relative; border-radius:var(--r-xl);
    background:var(--surface); border:1px solid var(--border-strong);
    box-shadow:var(--sh-lg), var(--rim-top);
    transform-style:preserve-3d; transition:transform var(--dur-base) var(--ease-out);
    will-change:transform; }
  .ds-tilt__glare{ position:absolute; inset:0; border-radius:inherit; pointer-events:none;
    background:radial-gradient(220px 220px at var(--_mx,50%) var(--_my,0%),
      rgba(22,234,213,.18), transparent 60%);
    opacity:0; transition:opacity var(--dur-base); mix-blend-mode:screen; }
  .ds-tilt:hover .ds-tilt__glare{ opacity:1; }
  .ds-tilt__layer{ transform:translateZ(40px); }
  @media (prefers-reduced-motion: reduce){ .ds-tilt{ transform:none !important; } }
  `;
  document.head.appendChild(el);
}

/**
 * TiltCard — surface that tilts in 3D toward the cursor with a photon glare.
 * `intensity` is the max tilt in degrees. Content is given a small parallax pop.
 */
function TiltCard({
  children,
  intensity = 9,
  style,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const onMove = e => {
    const node = ref.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * intensity * 2;
    const ry = (px - 0.5) * intensity * 2;
    node.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    node.style.setProperty("--_mx", `${px * 100}%`);
    node.style.setProperty("--_my", `${py * 100}%`);
  };
  const onLeave = () => {
    const node = ref.current;
    if (node) node.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: `ds-tilt ${className}`.trim(),
    style: style,
    onMouseMove: onMove,
    onMouseLeave: onLeave
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ds-tilt__glare"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-tilt__layer"
  }, children));
}
Object.assign(__ds_scope, { TiltCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/TiltCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/TimelineItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const TONES = {
  photon: "var(--photon)",
  optic: "var(--optic)",
  resonance: "var(--resonance)",
  signal: "var(--signal)",
  lime: "var(--lime)"
};

/**
 * TimelineItem — one node in an education / experience timeline.
 * Stack several inside a flex column.
 */
function TimelineItem({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-tl ${className}`.trim(),
    style: {
      "--_c": TONES[tone] || TONES.photon
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-tl__rail"
  }, /*#__PURE__*/React.createElement("span", {
    className: `ds-tl__dot ${hollow ? "ds-tl__dot--hollow" : ""}`
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-tl__line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ds-tl__body"
  }, period && /*#__PURE__*/React.createElement("div", {
    className: "ds-tl__period"
  }, period), title && /*#__PURE__*/React.createElement("h3", {
    className: "ds-tl__title"
  }, title), (org || location) && /*#__PURE__*/React.createElement("div", {
    className: "ds-tl__org"
  }, org && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, org)), location && /*#__PURE__*/React.createElement("span", {
    className: "ds-tl__loc"
  }, "\xB7 ", location)), description && /*#__PURE__*/React.createElement("p", {
    className: "ds-tl__desc"
  }, description), children));
}
Object.assign(__ds_scope, { TimelineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/TimelineItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/photon-bg.js
try { (() => {
// Photonic 3D background — a lightweight Three.js scene:
// a slowly-rotating wireframe core ringed by a drifting particle field,
// tinted with the photon palette and gently reactive to the cursor.
// Exposes window.mountPhotonBackground(canvas).
// Three.js is loaded at runtime via dynamic import() so the design-system
// bundler doesn't try to resolve it as a build-time dependency.

window.mountPhotonBackground = async function mountPhotonBackground(canvas) {
  const THREE = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.z = 9;
  const group = new THREE.Group();
  scene.add(group);

  // --- Wireframe core (icosahedron) ---
  const coreGeo = new THREE.IcosahedronGeometry(2.6, 1);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0x16ead5,
    wireframe: true,
    transparent: true,
    opacity: 0.5
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  group.add(core);

  // inner violet shell
  const shellGeo = new THREE.IcosahedronGeometry(1.7, 0);
  const shellMat = new THREE.MeshBasicMaterial({
    color: 0x7c6cff,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });
  const shell = new THREE.Mesh(shellGeo, shellMat);
  group.add(shell);

  // --- Particle field ---
  const COUNT = 900;
  const positions = new Float32Array(COUNT * 3);
  const palette = [[0.086, 0.918, 0.835],
  // photon
  [0.486, 0.424, 1.0],
  // optic
  [0.96, 0.71, 0.26],
  // resonance
  [0.53, 1.0, 0.69] // lime
  ];
  const colors = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const r = 4 + Math.random() * 9;
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(p) * Math.cos(t);
    positions[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
    positions[i * 3 + 2] = r * Math.cos(p);
    const c = palette[Math.random() * palette.length | 0];
    colors[i * 3] = c[0];
    colors[i * 3 + 1] = c[1];
    colors[i * 3 + 2] = c[2];
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const pMat = new THREE.PointsMaterial({
    size: 0.06,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  // --- Resize ---
  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  // --- Pointer parallax ---
  const target = {
    x: 0,
    y: 0
  };
  const cur = {
    x: 0,
    y: 0
  };
  window.addEventListener("pointermove", e => {
    target.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
    target.y = (e.clientY / window.innerHeight - 0.5) * 0.6;
  });
  let raf;
  const clock = new THREE.Clock();
  function tick() {
    const dt = clock.getDelta();
    const t = clock.elapsedTime;
    cur.x += (target.x - cur.x) * 0.05;
    cur.y += (target.y - cur.y) * 0.05;
    group.rotation.y += dt * 0.18;
    group.rotation.x = Math.sin(t * 0.2) * 0.25 + cur.y;
    group.rotation.z += dt * 0.02;
    shell.rotation.y -= dt * 0.35;
    shell.rotation.x += dt * 0.12;
    points.rotation.y += dt * 0.04;
    points.rotation.x = cur.y * 0.4;
    camera.position.x += (cur.x * 2 - camera.position.x) * 0.04;
    camera.lookAt(scene.position);
    const pulse = 1 + Math.sin(t * 1.4) * 0.04;
    core.scale.setScalar(pulse);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  }
  if (reduce) {
    renderer.render(scene, camera);
  } else {
    tick();
  }
  return () => {
    cancelAnimationFrame(raf);
    renderer.dispose();
  };
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/photon-bg.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/sections-bottom.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Portfolio sections (cont.) — Research, Projects, Achievements, About, Studio, Contact. */
const NS2 = window.AbhishekSinghPortfolioDesignSystem_9edb24;
const {
  Button,
  Badge,
  Tag,
  Card,
  IconButton,
  Avatar,
  Divider,
  SectionHeading,
  StatCard,
  ProjectCard,
  TimelineItem,
  SkillMeter,
  SocialLink,
  TiltCard
} = NS2;
const {
  Container,
  Section,
  ICON,
  Arrow
} = window.PortfolioSections;

/* ───────────── RESEARCH ───────────── */
function Research() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "research",
    className: "bg-grid",
    style: {
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    index: "01",
    eyebrow: "Research",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Reading the ", /*#__PURE__*/React.createElement("em", null, "anomalous"), " signal"),
    description: "Two active research threads at IIT Patna \u2014 one in deep-learning surveillance, one in integrated photonics."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-5)",
      marginTop: "var(--sp-7)"
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "glass",
    padding: "none",
    accent: true,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/9",
      overflow: "hidden",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/research-cuhk-hpfs.png",
    alt: "Anomaly detection heatmap",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "signal",
    dot: true
  }, "Video Anomaly Detection")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      color: "var(--text-hi)",
      fontWeight: 600
    }
  }, "Dataset-Adaptive Hybrid Patch-Feature Scoring"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 14,
      marginTop: 10,
      lineHeight: 1.6
    }
  }, "A lightweight 3D convolutional autoencoder that calibrates anomaly scoring per dataset \u2014 balancing spatial reconstruction error against latent feature deviation."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 700,
      color: "var(--photon-bright)"
    }
  }, "0.798"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-faint)"
    }
  }, "UCSD PED2 \xB7 AUC")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 700,
      color: "var(--optic-bright)"
    }
  }, "0.816"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-faint)"
    }
  }, "CUHK AVENUE \xB7 AUC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-faint)",
      marginTop: 18
    }
  }, "Supervisor \xB7 Dr. Maheshkumar H. Kolekar"))), /*#__PURE__*/React.createElement(Card, {
    variant: "glass",
    padding: "none",
    accent: true,
    accentColor: "var(--grad-resonance)",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/9",
      display: "grid",
      placeItems: "center",
      borderBottom: "1px solid var(--border)",
      background: "radial-gradient(circle at 50% 50%, rgba(124,108,255,.18), transparent 60%), var(--surface-sunken)",
      position: "relative",
      overflow: "hidden"
    },
    className: "bg-scan"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      height: 130,
      borderRadius: "50%",
      border: "2px solid var(--optic)",
      boxShadow: "0 0 40px -6px var(--optic), inset 0 0 30px -8px var(--optic)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 86,
      height: 86,
      borderRadius: "50%",
      border: "1px solid var(--resonance)",
      boxShadow: "0 0 24px -6px var(--resonance)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "optic",
    dot: true
  }, "Silicon Photonics")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      color: "var(--text-hi)",
      fontWeight: 600
    }
  }, "Microring Resonators & Optical Coupling"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 14,
      marginTop: 10,
      lineHeight: 1.6
    }
  }, "FDTD simulation of photonic integrated circuits \u2014 analysing lateral / vertical coupling and series / parallel cascading of microring resonators for optical computing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    prefix: "\u03BB"
  }, "MEEP FDTD"), /*#__PURE__*/React.createElement(Tag, {
    prefix: "#"
  }, "Resonance"), /*#__PURE__*/React.createElement(Tag, {
    prefix: "#"
  }, "Coupling Coeff.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-faint)",
      marginTop: 18
    }
  }, "Supervisor \xB7 Prof. Sumanta Gupta"))))));
}

/* ───────────── PROJECTS ───────────── */
function Projects() {
  const data = [{
    category: "Computer Vision",
    image: "../../assets/research-ucsd-hpfs.png",
    title: "AI Surveillance System",
    description: "AutoEncoder-based video anomaly detection trained on UCSD, CUHK Avenue & ShanghaiTech.",
    tags: ["PyTorch", "3D-CNN", "OpenCV"],
    href: "https://github.com/Abhishek5467/ai-surveillance-system"
  }, {
    category: "Infrastructure",
    title: "USAS Ingestor Engine",
    description: "Scalable multi-camera surveillance ingestion with frame sync & preprocessing pipeline.",
    tags: ["Python", "CCTV", "Pipelines"],
    href: "https://github.com/Abhishek5467"
  }, {
    category: "Graphics",
    title: "Custom 3D Rendering Engine",
    description: "Real-time renderer with gesture control and an interactive quadratic-spline editor.",
    tags: ["WebGL", "Canvas", "Creative"],
    href: "https://github.com/Abhishek5467/Custom-3d-rendering-engine"
  }, {
    category: "Photonics",
    title: "Silicon Photonics Sims",
    description: "MEEP FDTD resonance analysis & coupling-coefficient optimisation for ring resonators.",
    tags: ["MEEP", "FDTD", "Optics"],
    href: "https://github.com/Abhishek5467"
  }, {
    category: "Healthcare IoT",
    title: "Inditronix Platform",
    description: "Company website on AWS EC2 + ESP32 IoT and Hugging Face ML inference backends.",
    tags: ["AWS", "ESP32", "HF Spaces"],
    href: "https://github.com/Abhishek5467"
  }, {
    category: "3D / Web",
    title: "Sam Animation",
    description: "Three.js + Blender studio site showcasing real-time GLB models and shaders.",
    tags: ["Three.js", "Blender", "React"],
    href: "https://github.com/Abhishek5467/Sam_Animation"
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "projects",
    style: {
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: "02",
    eyebrow: "Selected Work",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Things I've ", /*#__PURE__*/React.createElement("em", null, "built")),
    description: "Systems spanning AI, cloud, embedded and computer graphics."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "https://github.com/Abhishek5467",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "All repositories")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sp-5)",
      marginTop: "var(--sp-7)"
    },
    className: "proj-grid"
  }, data.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: i
  }, p))))));
}

/* ───────────── ACHIEVEMENTS / CP ───────────── */
function Achievements() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "achievements",
    className: "bg-grid",
    style: {
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    index: "03",
    eyebrow: "By the numbers",
    align: "center",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Ranks, ratings & ", /*#__PURE__*/React.createElement("em", null, "reps"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--sp-4)",
      marginTop: "var(--sp-7)"
    },
    className: "stat-grid"
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "GATE ECE",
    value: "1046",
    unit: "AIR",
    sub: "Score 662"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "JEE Advanced",
    value: "5701",
    unit: "AIR",
    tone: "optic"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "JEE Main",
    value: "4311",
    unit: "AIR",
    tone: "resonance"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "DSA Solved",
    value: "1000",
    unit: "+",
    tone: "lime",
    sub: "Across 4 judges"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-6)",
      marginTop: "var(--sp-7)"
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "glass",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginBottom: 18
    }
  }, "Competitive Programming"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SkillMeter, {
    name: "Codeforces",
    display: "1241 \xB7 Pupil",
    value: 58,
    tone: "optic",
    icon: ICON.codeforces
  }), /*#__PURE__*/React.createElement(SkillMeter, {
    name: "CodeChef",
    display: "1643 \xB7 3\u2605",
    value: 76,
    tone: "resonance",
    icon: ICON.codechef
  }), /*#__PURE__*/React.createElement(SkillMeter, {
    name: "LeetCode",
    display: "121 solved",
    value: 48,
    tone: "photon"
  }), /*#__PURE__*/React.createElement(SkillMeter, {
    name: "GeeksforGeeks",
    display: "183 solved",
    value: 66,
    tone: "lime"
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "glass",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginBottom: 18
    }
  }, "Core Stack"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 9
    }
  }, ["Python", "C++", "PyTorch", "OpenCV", "Hugging Face", "AWS", "Linux", "ESP32", "MEEP", "SQL", "Git", "Three.js"].map((t, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    prefix: "#"
  }, t))), /*#__PURE__*/React.createElement(Divider, {
    plain: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Active on Kaggle across healthcare prediction, financial risk modelling and environmental data \u2014 and an open-source author documenting silicon photonics."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    href: "https://www.kaggle.com/shivaabhishek108",
    iconLeft: /*#__PURE__*/React.createElement("img", {
      src: ICON.kaggle,
      alt: "",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Kaggle profile")))));
}

/* ───────────── ABOUT / TIMELINE ───────────── */
function About() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "about",
    style: {
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: ".8fr 1.2fr",
      gap: "var(--sp-8)"
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    index: "04",
    eyebrow: "Trajectory",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Education & ", /*#__PURE__*/React.createElement("em", null, "experience")),
    description: "From entrance ranks to research labs and a startup engineering role."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "../../assets/abhishek-resume.pdf",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Download CV"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TimelineItem, {
    period: "2023 \u2014 2027 \xB7 Ongoing",
    title: "B.Tech, Electrical Engineering",
    org: "IIT Patna",
    location: "Bihar, India",
    description: "Researching video anomaly detection and silicon photonics across two labs."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    prefix: "#"
  }, "Research"), /*#__PURE__*/React.createElement(Tag, {
    prefix: "#"
  }, "Photonics"))), /*#__PURE__*/React.createElement(TimelineItem, {
    period: "2024 \u2014 Present",
    title: "Software Head",
    org: "Inditronix AI Labs",
    location: "Incubated \xB7 IIT Patna & AIIMS Patna",
    tone: "optic",
    description: "Lead software architecture: AWS EC2 deployment, ML inference on Hugging Face, SNR pipelines and ESP32 IoT for healthcare."
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    period: "2024 \u2014 Present",
    title: "Research Assistant \u2014 Video Surveillance Lab",
    org: "Dept. of Electrical Engineering, IIT Patna",
    tone: "signal",
    hollow: true,
    description: "Under Dr. Maheshkumar H. Kolekar \u2014 unsupervised anomaly detection on surveillance datasets."
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    period: "2024 \u2014 Present",
    title: "Research Assistant \u2014 Photonics",
    org: "Microring Resonator Group, IIT Patna",
    tone: "resonance",
    hollow: true,
    description: "Under Prof. Sumanta Gupta \u2014 FDTD simulation of photonic integrated circuits."
  }))));
}

/* ───────────── STUDIO / YOUTUBE ───────────── */
function Studio() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "studio",
    style: {
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(TiltCard, {
    intensity: 5,
    style: {
      padding: 0,
      overflow: "hidden",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      alignItems: "stretch"
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "signal",
    dot: true
  }, "Creator"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Studio \xB7 Soon")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(1.8rem,3vw,2.6rem)",
      color: "var(--text-hi)",
      letterSpacing: "-0.03em",
      margin: "16px 0 0",
      lineHeight: 1.05
    }
  }, "3D, in motion \u2014", /*#__PURE__*/React.createElement("br", null), "on ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "normal",
      background: "var(--grad-resonance)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "IITakuEdits")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--fs-lg)",
      lineHeight: 1.6,
      marginTop: 16,
      maxWidth: "42ch"
    }
  }, "On my YouTube channel ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-hi)",
      fontWeight: 600
    }
  }, "IITakuEdits"), ", engineering meets art \u2014 Blender models, Three.js shaders and real-time scenes, broken down step by step. Building toward ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-hi)",
      fontWeight: 600
    }
  }, "Sam Animation Studio"), ", my upcoming venture."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    iconLeft: /*#__PURE__*/React.createElement("img", {
      src: ICON.youtube,
      alt: "",
      style: {
        width: 18,
        height: 18
      }
    }),
    href: "https://www.youtube.com/@IITakuEdits"
  }, "Watch IITakuEdits"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "https://github.com/Abhishek5467/Sam_Animation"
  }, "Studio repo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      padding: "var(--sp-7)",
      background: "radial-gradient(circle at 50% 30%, rgba(255,77,94,.12), transparent 60%), var(--surface-sunken)",
      borderLeft: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--r-md)",
      padding: "18px 22px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sam-animation-logo.svg",
    alt: "Sam Animation logo",
    style: {
      width: 220,
      display: "block"
    }
  })))))));
}

/* ───────────── CONTACT / FOOTER ───────────── */
function Contact() {
  const socials = [{
    network: "GitHub",
    handle: "@Abhishek5467",
    icon: ICON.github,
    color: "#ffffff",
    href: "https://github.com/Abhishek5467"
  }, {
    network: "LinkedIn",
    handle: "abhishek-singh",
    icon: ICON.linkedin,
    color: "#0A66C2",
    href: "https://www.linkedin.com/in/abhishek-singh-3a54a5294/"
  }, {
    network: "YouTube",
    handle: "@IITakuEdits",
    icon: ICON.youtube,
    color: "#FF0000",
    href: "https://www.youtube.com/@IITakuEdits"
  }, {
    network: "Kaggle",
    handle: "shivaabhishek108",
    icon: ICON.kaggle,
    color: "#20BEFF",
    href: "https://www.kaggle.com/shivaabhishek108"
  }, {
    network: "Codeforces",
    handle: "journey_to_grandmaster",
    icon: ICON.codeforces,
    color: "#7C6CFF",
    href: "https://codeforces.com/profile/journey_to_grandmaster"
  }, {
    network: "Instagram",
    handle: "iitianabhishek5701",
    icon: ICON.instagram,
    color: "#E4405F",
    href: "https://www.instagram.com/iitianabhishek5701/"
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "contact",
    className: "bg-bloom",
    style: {
      paddingBottom: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: "05",
    eyebrow: "Contact",
    align: "center",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Let's build something ", /*#__PURE__*/React.createElement("em", null, "intelligent")),
    description: "Open to research collaborations, internships and engineering roles."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "mailto:abhishek@example.com",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Email me"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    href: "../../assets/abhishek-resume.pdf"
  }, "R\xE9sum\xE9 (PDF)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sp-4)",
      marginTop: "var(--sp-8)"
    },
    className: "social-grid"
  }, socials.map((s, i) => /*#__PURE__*/React.createElement(SocialLink, _extends({
    key: i
  }, s)))), /*#__PURE__*/React.createElement(Divider, {
    plain: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12,
      color: "var(--text-faint)",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Abhishek Singh \xB7 IIT Patna"), /*#__PURE__*/React.createElement("span", null, "Built with the Photonic Lab design system"))));
}
function PortfolioApp() {
  const {
    Hero,
    SkillsTicker
  } = window.PortfolioSections;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(SkillsTicker, null), /*#__PURE__*/React.createElement(Research, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Achievements, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Studio, null), /*#__PURE__*/React.createElement(Contact, null));
}
window.PortfolioApp = PortfolioApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/sections-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/sections-top.jsx
try { (() => {
/* Portfolio sections — composes the design-system components into a full
   single-page site. Exposes window.PortfolioApp. */
const NS = window.AbhishekSinghPortfolioDesignSystem_9edb24;
const {
  NavBar,
  Marquee,
  Button,
  Badge,
  Tag,
  Card,
  IconButton,
  Avatar,
  Divider,
  SectionHeading,
  StatCard,
  ProjectCard,
  TimelineItem,
  SkillMeter,
  SocialLink,
  TiltCard
} = NS;
const ICON = {
  github: "https://cdn.simpleicons.org/github/white",
  linkedin: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234DBFF5'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'/%3E%3C/svg%3E",
  youtube: "https://cdn.simpleicons.org/youtube/FF4D5E",
  kaggle: "https://cdn.simpleicons.org/kaggle/16EAD5",
  instagram: "https://cdn.simpleicons.org/instagram/F5B642",
  codeforces: "https://cdn.simpleicons.org/codeforces/7C6CFF",
  codechef: "https://cdn.simpleicons.org/codechef/F5B642"
};
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const Download = () => /*#__PURE__*/React.createElement("svg", {
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
}));
function Container({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      ...style
    }
  }, children);
}
function Section({
  id,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: "var(--section-y) 0",
      position: "relative",
      ...style
    }
  }, children);
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    style: {
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    id: "photon-canvas",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      background: "radial-gradient(70% 50% at 50% 0%, rgba(22,234,213,.10), transparent 60%), linear-gradient(180deg, transparent 60%, var(--bg) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(NavBar, {
    links: [{
      label: "Research",
      href: "#research"
    }, {
      label: "Projects",
      href: "#projects"
    }, {
      label: "Achievements",
      href: "#achievements"
    }, {
      label: "About",
      href: "#about"
    }],
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      href: "../../assets/abhishek-resume.pdf",
      iconLeft: /*#__PURE__*/React.createElement(Download, null)
    }, "R\xE9sum\xE9")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      flex: 1,
      display: "flex",
      alignItems: "center",
      paddingBlock: "64px"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr .75fr",
      gap: "var(--sp-8)",
      alignItems: "center",
      width: "100%"
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: ".6em",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-2xs)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--lime)",
      boxShadow: "0 0 10px var(--lime)"
    }
  }), "B.Tech EE \xB7 IIT Patna \xB7 Batch of 2027"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-hero)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-tighter)",
      color: "var(--text-hi)",
      margin: 0
    }
  }, "Abhishek", /*#__PURE__*/React.createElement("br", null), "Singh"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lg)",
      color: "var(--text-muted)",
      maxWidth: "46ch",
      marginTop: 20,
      lineHeight: "var(--lh-normal)"
    }
  }, "Building intelligent systems at the intersection of ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--photon-bright)"
    }
  }, "AI"), ",", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--optic-bright)"
    }
  }, "photonics"), ", mathematics and engineering."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "photon"
  }, "Video Anomaly Detection"), /*#__PURE__*/React.createElement(Badge, {
    tone: "optic"
  }, "Silicon Photonics"), /*#__PURE__*/React.createElement(Badge, {
    tone: "resonance"
  }, "Software Engineering")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#projects",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "View Work"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    href: "#contact"
  }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "GitHub",
    href: "https://github.com/Abhishek5467",
    round: true
  }, /*#__PURE__*/React.createElement("img", {
    src: ICON.github,
    alt: ""
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-singh-3a54a5294/",
    round: true
  }, /*#__PURE__*/React.createElement("img", {
    src: ICON.linkedin,
    alt: ""
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Kaggle",
    href: "https://www.kaggle.com/shivaabhishek108",
    round: true
  }, /*#__PURE__*/React.createElement("img", {
    src: ICON.kaggle,
    alt: ""
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Instagram",
    href: "https://www.instagram.com/iitianabhishek5701/",
    round: true
  }, /*#__PURE__*/React.createElement("img", {
    src: ICON.instagram,
    alt: ""
  })))), /*#__PURE__*/React.createElement(TiltCard, {
    intensity: 8,
    className: "hero-portrait",
    style: {
      padding: 18,
      background: "var(--glass)",
      backdropFilter: "blur(var(--blur-glass))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--r-lg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/abhishek-portrait.png",
    alt: "Abhishek Singh",
    style: {
      width: "100%",
      display: "block",
      borderRadius: "var(--r-lg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "lime",
    dot: true
  }, "Available"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      color: "var(--text-hi)",
      fontSize: 18
    }
  }, "Abhishek Singh"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-faint)",
      letterSpacing: ".08em"
    }
  }, "SOFTWARE HEAD \xB7 INDITRONIX AI LABS")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--accent)"
    }
  }, "26\xB0N"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: "var(--scrim)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 0
    },
    className: "hero-stats"
  }, [["GATE ECE", "AIR 1046"], ["JEE ADV", "AIR 5701"], ["DSA SOLVED", "1000+"], ["CODECHEF", "3★ · 1643"]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "22px 18px",
      borderLeft: i ? "1px solid var(--border)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".16em",
      color: "var(--text-faint)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      color: "var(--text-hi)",
      marginTop: 6,
      letterSpacing: "-0.02em"
    }
  }, v))))));
}

/* ───────────────────────── MARQUEE ───────────────────────── */
function SkillsTicker() {
  const items = ["Computer Vision", "Silicon Photonics", "PyTorch", "Deep Learning", "AutoEncoders", "MEEP FDTD", "OpenCV", "Cloud / AWS", "Embedded AI", "Microring Resonators", "Transformers"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 0",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    items: items,
    size: "1.5rem",
    speed: 34
  }));
}
window.PortfolioSections = {
  Container,
  Section,
  Hero,
  SkillsTicker,
  ICON,
  Arrow
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/sections-top.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SkillMeter = __ds_scope.SkillMeter;

__ds_ns.SocialLink = __ds_scope.SocialLink;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TiltCard = __ds_scope.TiltCard;

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

})();
