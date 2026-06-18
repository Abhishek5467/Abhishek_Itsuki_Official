Labeled gradient progress bar for skills and contest ratings.

```jsx
<SkillMeter name="PyTorch" value={90} />
<SkillMeter name="Codeforces" display="1241 · Pupil" value={62} tone="optic"
  icon="https://cdn.simpleicons.org/codeforces" />
```

`value` (0–100) drives the bar width; `display` overrides the printed figure for non-percentage data like ratings or stars.
