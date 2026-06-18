Floating glass navigation pill — monogram brand tile, links, pulsing live-status, right action slot.

```jsx
<NavBar
  monogram="AS" brand="Abhishek Singh"
  links={[
    { label: "Research", href: "#research", active: true },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
  ]}
  status="Available for research"
  action={<Button size="sm" variant="primary">Resume</Button>}
/>
```

Place it inside a centered max-width container, sticky near the top of a page.
