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

**Feel every world.**
<br/>
A new sense for gaming &mdash; real scent, triggered by AI, delivered in real time.

<br/>

[**Download**](https://github.com/ScentPlanet/scentplanet/releases/latest) &nbsp;&bull;&nbsp; [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp;&bull;&nbsp; [Report Bug](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) &nbsp;&bull;&nbsp; [Request Feature](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml)

<br/>

English &nbsp;|&nbsp; <a href="README.zh-CN.md">简体中文</a>

</div>

<br/>

---

<br/>

## A new sense for gaming.

Your game world comes alive through scent. Step into a forest, and breathe it in. No mods. No plugins. Just play &mdash; ScentPlanet handles the rest.

<br/>

<div align="center">
<img src="assets/screenshots/home-page.png" width="90%" alt="ScentPlanet" style="border-radius: 12px;">
</div>

<br/>

---

<br/>

## How it works

ScentPlanet sees what you see. It understands your game world in real time &mdash; forests, campfires, open fields &mdash; and responds instantly.

<div align="center">
<img src="assets/architecture-flow.svg" alt="Architecture" width="100%">
</div>

<br/>

**01 &mdash; It sees what you see.**
<br/>
AI vision analyzes your screen in real time. Not just pixels &mdash; it understands *where you are* in the game world.

**02 &mdash; Six scents. Endless worlds.**
<br/>
Interchangeable cartridges bring each environment to life. Pine, smoke, fresh grass &mdash; right at your desk.

**03 &mdash; Every game. Instantly.**
<br/>
No mods needed. Works with any game through AI vision. Red Dead Redemption 2, Minecraft, GTA, Elden Ring &mdash; just play.

<br/>

---

<br/>

## Built for the worlds you love.

From the plains of New Austin to the depths of Minecraft caves. Every world has a scent.

| | Game | Studio | Environments |
|:--|:-----|:-------|:-------------|
| | **Red Dead Redemption 2** | Rockstar Games | Grassland, Forest, Desert, Campfire, Cooking, Flowers |
| | **Minecraft** | Mojang Studios | Forest, Campfire, Flowers, Cooking |
| | **Every Open World** | Universal | Works with any game through AI vision |

> Create custom scent profiles for any title. Map environments to cartridges. Share with the community via [game-profiles](https://github.com/ScentPlanet/game-profiles).

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

macOS and Linux &mdash; coming soon

</div>

<br/>

---

<br/>

## Powered by

| Layer | Technology |
|:------|:-----------|
| Desktop | [Tauri 2.x](https://tauri.app) &mdash; Rust backend, WebView frontend |
| Frontend | React 19, TypeScript 5, Vite 6, Zustand 5 |
| AI Vision | Cloud VLM via [OpenRouter](https://openrouter.ai) |
| Hardware | ESP32-C3 BLE with Web Bluetooth API |
| Audio | Rust-native real-time DSP event detection |
| i18n | English, Simplified Chinese, Traditional Chinese |

<br/>

---

<br/>

## Community

- [**Discord**](https://discord.com/channels/1450784037886103605/1450793325228458095) &mdash; Join the community
- [**Bug Report**](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml)
- [**Feature Request**](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml)
- [**Discussions**](https://github.com/ScentPlanet/scentplanet/discussions)
- [**Changelog**](CHANGELOG.md)

<br/>

---

<br/>

<details>
<summary><strong>FAQ</strong></summary>
<br/>

**Do I need special hardware?**
<br/>
Yes &mdash; ScentPlanet requires our companion BLE scent device with 6 cartridge slots.

**How much does the AI cost?**
<br/>
Scene recognition uses OpenRouter's cloud VLM API. Typical cost is $0.001–0.005 per session. You bring your own API key.

**Can I customize scent intensity?**
<br/>
Yes &mdash; per-environment intensity settings, global controls, and olfactory adaptation parameters are all configurable.

</details>

<br/>

---

<br/>

<div align="center">

ScentPlanet processes screenshots locally and sends them to your configured VLM API. We don't store or collect gameplay data. [Privacy Policy](docs/privacy.md) &nbsp;&bull;&nbsp; [Hardware Guide](docs/hardware-guide.md)

<br/><br/>

<img src="assets/logo-dark.svg" width="40" alt="ScentPlanet">

<br/><br/>

**ScentPlanet** &mdash; Feel every world.

<br/>

[Releases](https://github.com/ScentPlanet/scentplanet/releases) &nbsp;&bull;&nbsp; [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095)

<br/>
</div>
