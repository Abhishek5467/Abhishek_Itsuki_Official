Glass or solid surface container — the base for research cards, project tiles and stat panels.

```jsx
<Card variant="glass" interactive accent tick="FIG.01">
  …content…
</Card>
<Card variant="sunken" padding="lg">…</Card>
```

Variants: `default` (solid), `glass` (blurred), `outline`, `sunken`. `interactive` adds hover-lift + photon border. `accent` draws a 2px top rule (override with `accentColor`). `tick` prints a mono registration label in the corner.
