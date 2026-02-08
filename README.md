<div align="center">

<br/>

<img src="assets/logo-dark.svg" width="48" alt="ScentPlanet">

<br/><br/>

# ScentPlanet

**Feel every world.**

Real scent, triggered by AI, delivered in real time.

<br/>

[![Download](https://img.shields.io/github/v/release/ScentPlanet/scentplanet?label=Download&color=0055A4&style=flat-square)](https://github.com/ScentPlanet/scentplanet/releases/latest)&nbsp;&nbsp;[![Platform](https://img.shields.io/badge/Windows%2010%2F11-0078D4?style=flat-square&logo=windows11&logoColor=white)](https://github.com/ScentPlanet/scentplanet/releases/latest)&nbsp;&nbsp;[![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1450784037886103605/1450793325228458095)

<br/>

English &nbsp;|&nbsp; [简体中文](README.zh-CN.md)

</div>

<br/>

---

<br/>

Your game world comes alive through scent. Step into a forest, and breathe it in. No mods. No plugins. Just play.

<br/>

<div align="center">
<img src="assets/screenshots/home-page.png" width="720" alt="ScentPlanet">
</div>

<br/>

---

<br/>

### 01 &mdash; It sees what you see.

AI vision analyzes your screen in real time. Not just pixels &mdash; it understands *where you are* in the game world. Forests, campfires, open fields &mdash; recognized and responded to instantly.

### 02 &mdash; Six scents. Endless worlds.

Interchangeable cartridges bring each environment to life. Pine, smoke, fresh grass &mdash; right at your desk. Each cartridge maps to an environment type detected by the AI.

### 03 &mdash; Every game. Instantly.

No mods needed. Works with any game through AI vision. Red Dead Redemption 2, Minecraft, GTA, Elden Ring &mdash; just play.

<br/>

---

<br/>

### How it works

```
Game Screen  ──>  AI Vision  ──>  Scent Engine  ──>  BLE Hardware
  <10ms          <30ms            <2ms              <20ms
 Capture      Classification   Evidence Fusion    Scent Release
```

The pipeline captures your screen, classifies the environment through a cloud VLM, accumulates evidence over time to filter noise, and sends scent commands to the hardware via Bluetooth LE. End-to-end under 80ms.

<br/>

---

<br/>

### Built for the worlds you love.

From the plains of New Austin to the depths of Minecraft caves. Every world has a scent.

| Game | Studio | Environments |
|:-----|:-------|:-------------|
| **Red Dead Redemption 2** | Rockstar Games | Grassland, Forest, Desert, Campfire, Cooking, Flowers |
| **Minecraft** | Mojang Studios | Forest, Campfire, Flowers, Cooking |
| **Every Open World** | Universal | Works with any game through AI vision |

Create custom scent profiles for any title. Map environments to cartridges. Share with the community via [game-profiles](https://github.com/ScentPlanet/game-profiles).

<br/>

<div align="center">
<img src="assets/screenshots/dashboard.png" width="720" alt="Profile Editor">
</div>

<br/>

---

<br/>

### Download

<div align="center">

<br/>

**[Download latest release](https://github.com/ScentPlanet/scentplanet/releases/latest)**

Windows 10/11 (64-bit) &nbsp;&middot;&nbsp; 4GB RAM &nbsp;&middot;&nbsp; Bluetooth LE &nbsp;&middot;&nbsp; Auto-update built in

macOS and Linux &mdash; coming soon.

<br/>

</div>

---

<br/>

### Powered by

| Layer | Technology |
|:------|:-----------|
| Desktop | [Tauri 2.x](https://tauri.app) &mdash; Rust backend, WebView frontend |
| Frontend | React 19, TypeScript 5, Vite 6, Zustand 5 |
| AI Vision | Cloud VLM via [OpenRouter](https://openrouter.ai) |
| Hardware | ESP32-C3 BLE scent device (6 cartridge slots) |
| Audio | Rust-native real-time DSP event detection |
| i18n | English, Simplified Chinese, Traditional Chinese |

<br/>

---

<br/>

### Community

[Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp;&middot;&nbsp; [Bug Report](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) &nbsp;&middot;&nbsp; [Feature Request](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml) &nbsp;&middot;&nbsp; [Discussions](https://github.com/ScentPlanet/scentplanet/discussions) &nbsp;&middot;&nbsp; [Changelog](CHANGELOG.md)

<br/>

<details>
<summary><strong>FAQ</strong></summary>
<br/>

**Do I need special hardware?**
Yes &mdash; ScentPlanet requires our companion BLE scent device with 6 cartridge slots.

**How much does the AI cost?**
Scene recognition uses OpenRouter's cloud VLM API. Typical cost is under $0.01 per session. You bring your own API key.

**Can I customize scent intensity?**
Yes &mdash; per-environment intensity, global controls, and olfactory adaptation are all configurable.

</details>

<br/>

---

<br/>

<div align="center">

<sub>ScentPlanet processes screenshots locally and sends them to your configured VLM API. No gameplay data is collected. &nbsp; [Privacy](docs/privacy.md) &nbsp;&middot;&nbsp; [Hardware Guide](docs/hardware-guide.md)</sub>

<br/><br/>

**ScentPlanet** &mdash; Feel every world.

</div>
