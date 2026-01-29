# ScentPlanet Promo Video

Apple-style minimalist promotional video and banner for ScentPlanet.

## Setup

```bash
cd remotion
npm install
```

## Development

```bash
npm run studio
```

This opens Remotion Studio where you can preview and edit the compositions.

## Render

### Render MP4 Video

```bash
npm run render
```

Output: `out/promo.mp4`

### Render Static Banner (GitHub Social Preview)

```bash
npm run render:still
```

Output: `out/banner.png` (1280x640)

## Compositions

| ID | Description | Resolution | Duration |
|----|-------------|------------|----------|
| `ScentPlanetPromo` | Full promotional video | 1920x1080 | 15s |
| `ScentPlanetBanner` | GitHub social preview | 1280x640 | Static |

## Design System

- **Style**: Apple-inspired minimalist, high-tech
- **Colors**: Dark background with cyan/blue accents
- **Typography**: SF Pro Display / System fonts
- **Animation**: Spring-based with smooth easing

## Scenes (Promo Video)

1. **Logo Reveal** (0-4s): Logo animation with glowing orbs
2. **Features** (4-8s): Key features showcase
3. **Ecosystem** (8-12s): Repository relationship visualization
4. **CTA** (12-15s): Download call-to-action

## License

This promotional material is for ScentPlanet marketing use only.
