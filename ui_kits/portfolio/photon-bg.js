// Photonic 3D background — a lightweight Three.js scene:
// a slowly-rotating wireframe core ringed by a drifting particle field,
// tinted with the photon palette and gently reactive to the cursor.
// Exposes window.mountPhotonBackground(canvas).
// Three.js is loaded at runtime via dynamic import() so the design-system
// bundler doesn't try to resolve it as a build-time dependency.

window.mountPhotonBackground = async function mountPhotonBackground(canvas) {
  const THREE = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
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
    color: 0x16ead5, wireframe: true, transparent: true, opacity: 0.5,
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  group.add(core);

  // inner violet shell
  const shellGeo = new THREE.IcosahedronGeometry(1.7, 0);
  const shellMat = new THREE.MeshBasicMaterial({
    color: 0x7c6cff, wireframe: true, transparent: true, opacity: 0.4,
  });
  const shell = new THREE.Mesh(shellGeo, shellMat);
  group.add(shell);

  // --- Particle field ---
  const COUNT = 900;
  const positions = new Float32Array(COUNT * 3);
  const palette = [
    [0.086, 0.918, 0.835], // photon
    [0.486, 0.424, 1.0],   // optic
    [0.96, 0.71, 0.26],    // resonance
    [0.53, 1.0, 0.69],     // lime
  ];
  const colors = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const r = 4 + Math.random() * 9;
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(p) * Math.cos(t);
    positions[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
    positions[i * 3 + 2] = r * Math.cos(p);
    const c = palette[(Math.random() * palette.length) | 0];
    colors[i * 3] = c[0]; colors[i * 3 + 1] = c[1]; colors[i * 3 + 2] = c[2];
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const pMat = new THREE.PointsMaterial({
    size: 0.06, vertexColors: true, transparent: true, opacity: 0.9,
    depthWrite: false, blending: THREE.AdditiveBlending,
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
  const target = { x: 0, y: 0 };
  const cur = { x: 0, y: 0 };
  window.addEventListener("pointermove", (e) => {
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

  return () => { cancelAnimationFrame(raf); renderer.dispose(); };
};
