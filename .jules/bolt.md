## 2026-03-01 - Server-Side SVG Rendering for Icons
**Learning:** Initializing Lucide icons dynamically on the client via `createIcons()` in Astro results in shipping the entire library to the browser, significantly inflating the JS bundle size (~8kB gzipped for a single layout) and causing minor CLS.
**Action:** Replaced client-side initialization with a custom `Icon.astro` component that extracts paths directly from the `lucide` package to render raw SVGs at build-time. This eliminates the client-side JS dependency entirely, achieving true "Zero-JS" for icons.
