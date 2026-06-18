One node in a vertical education / experience timeline. Stack several in a flex column.

```jsx
<TimelineItem
  period="2023 — 2027"
  title="B.Tech, Electrical Engineering"
  org="IIT Patna" location="Bihar, India"
  description="Researching video anomaly detection and silicon photonics."
/>
<TimelineItem period="2021" title="Software Head" org="Inditronix AI Labs" tone="optic" hollow />
```

`tone` colors the dot/period; `hollow` marks past nodes. Pass extra content as children (e.g. `<Tag>`s).
