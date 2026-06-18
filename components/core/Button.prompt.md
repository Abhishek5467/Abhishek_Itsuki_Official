Primary action control — photon-cyan CTA, with ghost/secondary/signal variants and three sizes.

```jsx
<Button variant="primary" size="lg" iconRight={<ArrowIcon/>}>View Research</Button>
<Button variant="ghost">Download CV</Button>
<Button variant="signal" size="sm">Report Anomaly</Button>
<Button variant="secondary" href="#projects">Projects</Button>
```

Variants: `primary` (glowing cyan fill), `secondary` (raised glass), `ghost` (outlined), `signal` (alert red).
Sizes: `sm` · `md` · `lg`. Pass `href` to render as a link; `iconLeft`/`iconRight` accept SVG nodes.
