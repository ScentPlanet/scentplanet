<!-- ScentPlanet -->

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/hero-banner.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/hero-banner.svg">
  <img src="assets/hero-banner.svg" alt="ScentPlanet" width="100%">
</picture>

<br/>

<a href="https://github.com/ScentPlanet/scentplanet/releases/latest"><img src="assets/badges/version-badge.svg" alt="v0.3.7" height="28"></a>&nbsp;&nbsp;
<a href="https://github.com/ScentPlanet/scentplanet/releases/latest"><img src="assets/badges/download-badge.svg" alt="Download" height="28"></a>&nbsp;&nbsp;
<img src="assets/badges/platform-badge.svg" alt="Windows 10/11" height="28">&nbsp;&nbsp;
<a href="https://discord.com/channels/1450784037886103605/1450793325228458095"><img src="assets/badges/discord-badge.svg" alt="Discord" height="28"></a>

<br/><br/>

**AI-powered scent synchronization for gaming.**
<br/>
Experience every game environment through real-time olfactory immersion.

<br/>

[**Download**](https://github.com/ScentPlanet/scentplanet/releases/latest) &nbsp;&bull;&nbsp; [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp;&bull;&nbsp; [Report Bug](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) &nbsp;&bull;&nbsp; [Request Feature](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml)

<br/>

English &nbsp;|&nbsp; <a href="README.zh-CN.md">简体中文</a>

</div>

<br/>

---

<br/>

> *Riding through a pine forest — you smell the wood.*
> *Setting up camp at night — smoke fills the air.*
> *Walking past wildflowers — a floral scent surrounds you.*

ScentPlanet understands **where you are** in the game world — not just what's on screen — and triggers real scents to match your environment.

<br/>

<div align="center">
<img src="assets/screenshots/home-page.png" width="90%" alt="ScentPlanet" style="border-radius: 12px;">
</div>

<br/>

---

<br/>

## How It Works

<div align="center">
<img src="assets/architecture-flow.svg" alt="Architecture" width="100%">
</div>

<br/>

## Features

- **Environment-aware detection** — Three-layer architecture recognizes your in-game location, not just viewport content. Looking at the sky in a forest still triggers forest scent.
- **Audio-visual fusion** — Combines game audio cues (fire crackling, cooking sounds, water flow) with visual analysis for higher accuracy.
- **Olfactory adaptation** — Exponential decay curve prevents scent fatigue during prolonged exposure. Automatic reset on scene transitions.
- **Per-game profiles** — Customizable scent mappings for each game. Create your own or use built-in profiles for Red Dead Redemption 2, Minecraft, and more.
- **Sub-100ms latency** — Screen capture to scent release in under 80ms end-to-end.
- **6 scent cartridges** — Fresh Grass, BBQ, Pine/Wood, Campfire Smoke, Cooking, Floral.

<br/>

---

<br/>

## Download

<div align="center">

**Latest: v0.3.7**

<br/>

<a href="https://github.com/ScentPlanet/scentplanet/releases/latest">
<img src="assets/badges/download-badge.svg" alt="Download" height="36">
</a>

<br/><br/>

Windows 10/11 (64-bit) &nbsp;&bull;&nbsp; 4GB RAM &nbsp;&bull;&nbsp; Bluetooth LE &nbsp;&bull;&nbsp; Auto-update built in

<br/>

macOS and Linux — coming soon

</div>

<br/>

---

<br/>

## Supported Games

| Game | Status | Environments |
|:-----|:------:|:-------------|
| **Red Dead Redemption 2** | Official | Grassland, Forest, Desert, Campfire, Cooking, Flowers |
| **Minecraft** | Official | Forest, Campfire, Flowers, Cooking |
| **Generic** | Built-in | Works with any game using general detection |

> Want to add your game? Contribute a profile to [game-profiles](https://github.com/ScentPlanet/game-profiles).

<br/>

---

<br/>

## Tech Stack

| Layer | Technology |
|:------|:-----------|
| Desktop | [Tauri 2.x](https://tauri.app) — Rust backend, WebView frontend |
| Frontend | React 19, TypeScript 5, Vite 6, Zustand 5 |
| AI Vision | Cloud VLM via [OpenRouter](https://openrouter.ai) |
| Hardware | ESP32-C3 BLE with Web Bluetooth API |
| Audio | Rust-native real-time DSP event detection |
| i18n | English, Simplified Chinese, Traditional Chinese |

<br/>

---

<br/>

## Community

<table>
<tr>
<td width="50%">

- [**Bug Report**](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml)
- [**Feature Request**](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml)
- [**Discussions**](https://github.com/ScentPlanet/scentplanet/discussions)

</td>
<td width="50%">

- [**Discord**](https://discord.com/channels/1450784037886103605/1450793325228458095)
- [**Twitter/X**](https://x.com/ScentPlanetApp)
- [**Changelog**](CHANGELOG.md)

</td>
</tr>
</table>

<br/>

<details>
<summary><strong>FAQ</strong></summary>
<br/>

**Do I need special hardware?**
Yes — ScentPlanet requires our companion BLE scent device with 6 cartridge slots.

**How much does the AI cost?**
Scene recognition uses OpenRouter's cloud VLM API. Typical cost is $0.001–0.005 per session. You bring your own API key.

**Is the app open source?**
The desktop app is proprietary. Our [game profile library](https://github.com/ScentPlanet/game-profiles) is open source (CC-BY-SA 4.0).

**Can I customize scent intensity?**
Yes — per-environment intensity settings, global controls, and olfactory adaptation parameters are all configurable.

</details>

<br/>

---

<br/>

<div align="center">

ScentPlanet processes screenshots locally and sends them to your configured VLM API. We don't store or collect gameplay data. [Privacy Policy](docs/privacy.md) &nbsp;&bull;&nbsp; [Hardware Guide](docs/hardware-guide.md)

<br/><br/>

<img src="assets/logo-dark.svg" width="40" alt="ScentPlanet">

<br/><br/>

**ScentPlanet** — Gaming, Reimagined.

<br/>

[Releases](https://github.com/ScentPlanet/scentplanet/releases) &nbsp;&bull;&nbsp; [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp;&bull;&nbsp; [Twitter](https://x.com/ScentPlanetApp)

<br/>
</div>
