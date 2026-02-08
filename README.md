<!-- ScentPlanet - Real-time Olfactory Gaming Experience -->

<div align="center">

<!-- Animated Hero Banner -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/hero-banner.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/hero-banner.svg">
  <img src="assets/hero-banner.svg" alt="ScentPlanet - Real-time Olfactory Gaming Experience" width="100%">
</picture>

<br/>

<!-- Premium Custom Badges -->
<a href="https://github.com/ScentPlanet/scentplanet/releases/latest"><img src="assets/badges/version-badge.svg" alt="v0.3.7" height="28"></a>&nbsp;&nbsp;
<a href="https://github.com/ScentPlanet/scentplanet/releases/latest"><img src="assets/badges/download-badge.svg" alt="Download" height="28"></a>&nbsp;&nbsp;
<img src="assets/badges/platform-badge.svg" alt="Windows 10/11" height="28">&nbsp;&nbsp;
<img src="assets/badges/status-badge.svg" alt="Active Development" height="28">&nbsp;&nbsp;
<a href="https://discord.com/channels/1450784037886103605/1450793325228458095"><img src="assets/badges/discord-badge.svg" alt="Discord" height="28"></a>

<br/><br/>

**The world's first AI-powered scent synchronization system for gaming.**<br/>
Experience every game environment through real-time olfactory immersion.

<br/>

[**Download**](https://github.com/ScentPlanet/scentplanet/releases/latest) &nbsp; | &nbsp; [Getting Started](docs/getting-started.md) &nbsp; | &nbsp; [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp; | &nbsp; [Report Bug](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) &nbsp; | &nbsp; [Request Feature](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml)

<br/>

English &nbsp;|&nbsp; <a href="README.zh-CN.md">简体中文</a>

</div>

<br/>

---

<br/>

## The Experience

<div align="center">

> *Riding through a pine forest in Red Dead Redemption 2 — you smell the wood.*<br/>
> *Setting up camp as night falls — smoke from the campfire fills the air.*<br/>
> *Walking past wildflowers at dawn — a gentle floral scent surrounds you.*

</div>

ScentPlanet transforms gaming into a multi-sensory experience. Our AI understands **where you are** in the game world — not just what's on screen — and synchronizes real scents to match your environment in real-time.

<br/>

<div align="center">
<img src="assets/screenshots/home-page.png" width="90%" alt="ScentPlanet Home Screen" style="border-radius: 12px;">
</div>

<br/>

<!-- Architecture Flow Diagram -->
<div align="center">
<img src="assets/architecture-flow.svg" alt="How ScentPlanet Works" width="90%">
</div>

<br/>

---

<br/>

## How It Works

<table>
<tr>
<td width="25%" align="center">

<img src="assets/icons/ai-vision.svg" width="56" height="56" alt="AI Vision"><br/><br/>
<strong>AI Scene Recognition</strong><br/>
<sub>Vision AI analyzes your game<br/>screen to detect environment</sub>

</td>
<td width="25%" align="center">

<img src="assets/icons/realtime.svg" width="56" height="56" alt="Real-time"><br/><br/>
<strong>Real-time Processing</strong><br/>
<sub>Sub-100ms end-to-end latency<br/>from screen to scent</sub>

</td>
<td width="25%" align="center">

<img src="assets/icons/wireless.svg" width="56" height="56" alt="Wireless"><br/><br/>
<strong>Wireless Hardware</strong><br/>
<sub>BLE-connected scent device<br/>with 6 scent cartridges</sub>

</td>
<td width="25%" align="center">

<img src="assets/icons/multi-game.svg" width="56" height="56" alt="Multi-game"><br/><br/>
<strong>Multi-Game Support</strong><br/>
<sub>Per-game scent profiles<br/>with community contributions</sub>

</td>
</tr>
</table>

<br/>

---

<br/>

## Features

<table>
<tr>
<td width="50%">

### Intelligent Environment Detection

ScentPlanet doesn't just analyze what's visible on screen. Our evidence-based recognition system understands your **actual in-game location** — looking at the sky in a forest still triggers forest scent.

- Temporal evidence accumulation with view reliability weighting
- Multi-frame confidence scoring for stable detection
- Hysteresis-based state machine prevents flickering

</td>
<td width="50%">

### Audio-Visual Fusion

Beyond visual analysis, ScentPlanet listens to your game's audio for environmental cues.

- Fire crackling enhances campfire scent confidence
- Cooking sounds distinguish kitchen from campfire environments
- Water and wind sounds modulate scent intensity
- Per-game audio event mapping with cooldown management

</td>
</tr>
<tr>
<td width="50%">

### Adaptive Scent Control

<img src="assets/icons/cloud-sync.svg" width="32" height="32" alt="Cloud" align="right">

Built-in olfactory adaptation prevents scent fatigue.

- Exponential decay curve for prolonged exposure
- Per-scent intensity profiles (some scents need lower intensity)
- Smooth fade transitions between environment changes
- Automatic reset on scene transitions

</td>
<td width="50%">

### Open Game Profiles

<img src="assets/icons/open-source.svg" width="32" height="32" alt="Open Source" align="right">

Community-driven game support through open scent profiles.

- Create profiles for any game
- Share via our [game-profiles](https://github.com/ScentPlanet/game-profiles) repository
- Cloud delivery — new games without app updates
- Customizable per-environment intensity settings

</td>
</tr>
</table>

<br/>

---

<br/>

## Download

<div align="center">

### Latest Release: v0.3.7

<br/>

<a href="https://github.com/ScentPlanet/scentplanet/releases/latest">

| | |
|:---:|:---|
| **Windows** | **[Download ScentPlanet Installer (.exe)](https://github.com/ScentPlanet/scentplanet/releases/latest)** |
| Requirements | Windows 10/11 (64-bit), 4GB RAM, Bluetooth |
| Auto-Update | Built-in — you'll be notified of new versions |

</a>

<br/>

| macOS | Linux |
|:---:|:---:|
| Coming Soon | Coming Soon |

</div>

### Quick Start

```
1. Download and run the installer
2. Launch ScentPlanet from Start Menu
3. Complete the setup wizard (API key + hardware pairing)
4. Select a game and play!
```

See the [Getting Started Guide](docs/getting-started.md) for detailed instructions.

<br/>

---

<br/>

## Supported Games

| Game | Status | Scent Environments |
|:-----|:------:|:-------------------|
| **Red Dead Redemption 2** | Official | Grassland, Forest, Desert, Campfire, Cooking, Flowers |
| **Minecraft** | Official | Forest, Campfire, Flowers, Cooking |
| **Elden Ring** | Community | Coming Soon |
| **The Witcher 3** | Community | Coming Soon |
| **Generic** | Built-in | Works with any game using general detection |

> **Want to add your favorite game?** Contribute a scent profile to our open [game-profiles](https://github.com/ScentPlanet/game-profiles) repository!

<br/>

---

<br/>

## Hardware

ScentPlanet works with our companion BLE scent device.

| Spec | Detail |
|:-----|:-------|
| **Connectivity** | Bluetooth Low Energy (BLE) |
| **Cartridges** | 6 interchangeable scent slots |
| **Scents** | Fresh Grass, BBQ, Pine/Wood, Campfire Smoke, Cooking Stew, Floral |
| **Power** | USB-C rechargeable |
| **Range** | Up to 10m wireless |

[Hardware Guide](docs/hardware-guide.md)

<br/>

---

<br/>

## Scent Mapping

Each cartridge slot maps to a specific environment type:

```
Slot 0  Fresh Grass    Grasslands, meadows, open fields
Slot 1  BBQ/Grill      Barbecue areas, dry heat environments
Slot 2  Pine/Wood      Forests, lumber areas, wooden structures
Slot 3  Campfire       Bonfires, fire pits, burning
Slot 4  Cooking Stew   Kitchens, cooking pots, food areas
Slot 5  Floral         Gardens, flower fields, botanical areas
```

> **Note:** Slot order is hardware-defined and cannot be changed. Game profiles map environments to these fixed slots.

<br/>

---

<br/>

## Community & Feedback

This repository is the **primary hub** for ScentPlanet community interaction. We use GitHub Issues and Discussions for all feedback.

<table>
<tr>
<td width="50%">

### Report & Request

- [**Bug Report**](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) — Found something broken? Let us know
- [**Feature Request**](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml) — Have an idea? We want to hear it
- [**Browse Issues**](https://github.com/ScentPlanet/scentplanet/issues) — See what others have reported
- [**Discussions**](https://github.com/ScentPlanet/scentplanet/discussions) — General Q&A and community chat

</td>
<td width="50%">

### Connect

- [**Discord Server**](https://discord.com/channels/1450784037886103605/1450793325228458095) — Real-time chat with the team and community
- [**Twitter/X**](https://x.com/ScentPlanetApp) — Follow for updates and announcements
- [**Changelog**](CHANGELOG.md) — See what's new in each release
- [**Contributing Guide**](CONTRIBUTING.md) — How you can help

</td>
</tr>
</table>

### Ways to Contribute

| Contribution | How |
|:-------------|:----|
| **Game Profiles** | Create and share scent configurations for new games via [game-profiles](https://github.com/ScentPlanet/game-profiles) |
| **Bug Reports** | Use our [issue templates](https://github.com/ScentPlanet/scentplanet/issues/new/choose) with detailed reproduction steps |
| **Translations** | Help improve Chinese (zh-CN, zh-TW) translations — reach out on Discord |
| **Feature Ideas** | Submit via [feature request](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml) with use case description |
| **Documentation** | Fix typos, improve guides, add tutorials via Pull Requests |

<br/>

---

<br/>

## Screenshots

<div align="center">
<table>
<tr>
<td align="center" width="50%">
<strong>Game Profile Editor</strong><br/><br/>
<img src="assets/screenshots/dashboard.png" width="100%" alt="Scent Mapping">
<br/><sub>Per-game environment-to-cartridge mapping with intensity controls</sub>
</td>
<td align="center" width="50%">
<strong>Settings</strong><br/><br/>
<img src="assets/screenshots/settings.png" width="100%" alt="Settings">
<br/><sub>AI Vision configuration with OpenRouter VLM integration</sub>
</td>
</tr>
</table>
</div>

<br/>

---

<br/>

## Tech Stack

Built with performance and reliability in mind.

| Layer | Technology |
|:------|:-----------|
| **Desktop App** | [Tauri 2.x](https://tauri.app) — Rust backend + WebView frontend |
| **Frontend** | React 19, TypeScript 5.x, Vite 6, Zustand 5 |
| **AI Vision** | Cloud VLM via [OpenRouter](https://openrouter.ai) — multiple model support |
| **Hardware** | ESP32-C3 BLE with Web Bluetooth API |
| **Audio DSP** | Rust-native real-time audio event detection |
| **Localization** | English, Simplified Chinese, Traditional Chinese |

<br/>

---

<br/>

## FAQ

<details>
<summary><strong>Do I need special hardware?</strong></summary>
<br/>
Yes. ScentPlanet requires our companion BLE scent device with 6 cartridge slots. The software alone cannot produce scents.
<br/><br/>
</details>

<details>
<summary><strong>How much does the AI cost to run?</strong></summary>
<br/>
Scene recognition uses OpenRouter's cloud VLM API. Typical cost is $0.001-0.005 per gaming session, depending on the model selected. You bring your own API key.
<br/><br/>
</details>

<details>
<summary><strong>Which games are supported?</strong></summary>
<br/>
We officially support Red Dead Redemption 2 and Minecraft, with a generic profile that works with any game. More games are being added by our community through the open <a href="https://github.com/ScentPlanet/game-profiles">game-profiles</a> repository.
<br/><br/>
</details>

<details>
<summary><strong>Is the app open source?</strong></summary>
<br/>
The desktop application is proprietary. Our <a href="https://github.com/ScentPlanet/game-profiles">game profile library</a> is open source (CC-BY-SA 4.0) and welcomes community contributions.
<br/><br/>
</details>

<details>
<summary><strong>How does environment detection work?</strong></summary>
<br/>
ScentPlanet uses a three-layer architecture: (1) Frame-level AI classification with view reliability weighting, (2) Temporal evidence accumulation across multiple frames, (3) State machine with hysteresis for stable environment transitions. This means it detects your <em>actual location</em> in the game world, not just what's visible on screen.
<br/><br/>
</details>

<details>
<summary><strong>Can I customize scent intensity?</strong></summary>
<br/>
Yes. Each game profile supports per-environment intensity settings. You can also adjust global intensity and configure olfactory adaptation parameters through the Settings page.
<br/><br/>
</details>

<br/>

---

<br/>

## Privacy

ScentPlanet processes game screenshots locally and sends them to your configured VLM API for scene recognition. We do not store or collect your gameplay data. See our [Privacy Policy](docs/privacy.md) for details.

<br/>

## License

ScentPlanet desktop application is proprietary software. See [LICENSE](LICENSE) for details.

Game profiles in [ScentPlanet/game-profiles](https://github.com/ScentPlanet/game-profiles) are licensed under CC-BY-SA 4.0.

<br/>

---

<div align="center">
<br/>

<img src="assets/logo-dark.svg" width="48" alt="ScentPlanet">

<br/><br/>

**ScentPlanet** &mdash; Gaming, Reimagined.

<br/>

[Website](https://scentplanet.app) &nbsp;&bull;&nbsp; [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp;&bull;&nbsp; [Twitter](https://x.com/ScentPlanetApp) &nbsp;&bull;&nbsp; [Releases](https://github.com/ScentPlanet/scentplanet/releases)

<br/>
</div>
