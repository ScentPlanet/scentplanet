<div align="center">
  <img src="assets/logo.svg" width="120" alt="ScentPlanet Logo">
  <h1>ScentPlanet</h1>
  <p><strong>Real-time Olfactory Gaming Experience</strong></p>
  <p>
    <a href="#download">Download</a> &bull;
    <a href="#features">Features</a> &bull;
    <a href="docs/getting-started.md">Getting Started</a> &bull;
    <a href="https://discord.gg/scentplanet">Discord</a>
  </p>
  <p>
    <img src="https://img.shields.io/github/v/release/ScentPlanet/scentplanet?style=flat-square" alt="Latest Release">
    <img src="https://img.shields.io/github/downloads/ScentPlanet/scentplanet/total?style=flat-square" alt="Downloads">
    <img src="https://img.shields.io/badge/platform-Windows-blue?style=flat-square" alt="Platform">
  </p>
  <p>
    English | <a href="README.zh-CN.md">简体中文</a>
  </p>
</div>

---

## What is ScentPlanet?

ScentPlanet brings immersive scent experiences to your gaming sessions. Using AI-powered scene recognition, it automatically detects your in-game environment and releases corresponding scents through our BLE-connected hardware device.

**Imagine playing Red Dead Redemption 2** - as you ride through a pine forest, you smell the fresh wood. When you set up camp, the smoke from your campfire fills the air. When you pass through a field of wildflowers, a floral scent surrounds you.

<div align="center">
  <img src="assets/screenshots/demo.png" width="80%" alt="ScentPlanet Demo">
</div>

---

## Download

| Platform | Download | Requirements |
|:--------:|:--------:|:-------------|
| **Windows** | [**Download Latest**](https://github.com/ScentPlanet/scentplanet/releases/latest) | Windows 10/11 (64-bit), 4GB RAM |
| macOS | Coming Soon | - |
| Linux | Coming Soon | - |

### Installation

1. Download the `.exe` installer from the link above
2. Run the installer and follow the prompts
3. Choose between user-level or system-wide installation
4. Launch ScentPlanet from Start Menu or Desktop shortcut

---

## Features

### Multi-Game Support
Works with popular titles including Red Dead Redemption 2, Elden Ring, and more. Community-contributed game profiles are added regularly.

### AI Scene Recognition
Powered by Vision Language Models (VLM), ScentPlanet understands your in-game environment in real-time, not just what's on screen.

### Wireless Hardware
Connect to our BLE-enabled scent device wirelessly. No cables, no hassle.

### Cloud Game Library
New game profiles are delivered automatically - no app updates required.

### Multi-Language
Available in English, Simplified Chinese (简体中文), and Traditional Chinese (繁體中文).

---

## Hardware

ScentPlanet requires our companion hardware device for scent delivery.

- **Connectivity**: Bluetooth Low Energy (BLE)
- **Cartridges**: 6 interchangeable scent cartridges
- **Power**: USB-C rechargeable

[Learn more about the hardware](docs/hardware-guide.md)

---

## Supported Games

| Game | Status | Environments |
|------|--------|--------------|
| Red Dead Redemption 2 | Official | Prairie, Forest, Desert, Campfire, Cooking, Flowers |
| Elden Ring | Community | Coming Soon |
| The Witcher 3 | Community | Coming Soon |

Want to add a game? [Contribute a game profile](https://github.com/ScentPlanet/game-profiles)!

---

## Community

Join our community to get help, share feedback, and connect with other users.

| | |
|---|---|
| **Discord** | [Join our server](https://discord.gg/scentplanet) |
| **Report Bug** | [Create an issue](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) |
| **Request Feature** | [Submit an idea](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml) |
| **Contribute Games** | [game-profiles repo](https://github.com/ScentPlanet/game-profiles) |

---

## FAQ

<details>
<summary><strong>Do I need special hardware?</strong></summary>

Yes, ScentPlanet requires our companion scent device. The software alone cannot produce scents.
</details>

<details>
<summary><strong>Which games are supported?</strong></summary>

We officially support Red Dead Redemption 2, with more games being added by our community. Check the Supported Games section above.
</details>

<details>
<summary><strong>Is it open source?</strong></summary>

The desktop application is proprietary software. However, our game profile library is open source and welcomes community contributions.
</details>

<details>
<summary><strong>How does scene recognition work?</strong></summary>

ScentPlanet uses Vision Language Models (VLM) to analyze your game screen and determine the environment. It doesn't just look at what's in front of you - it understands your actual location in the game world.
</details>

---

## Privacy

ScentPlanet processes game screenshots locally and sends them to our secure VLM API for scene recognition. We do not store your gameplay data. See our [Privacy Policy](docs/privacy.md) for details.

---

## License

ScentPlanet is proprietary software. See [LICENSE](LICENSE) for details.

Game profiles in [ScentPlanet/game-profiles](https://github.com/ScentPlanet/game-profiles) are licensed under CC-BY-SA 4.0.

---

<div align="center">
  <p>Made with ❤️ by the ScentPlanet Team</p>
  <p>
    <a href="https://scentplanet.app">Website</a> &bull;
    <a href="https://discord.gg/scentplanet">Discord</a> &bull;
    <a href="https://x.com/ScentPlanetApp">Twitter</a>
  </p>
</div>
