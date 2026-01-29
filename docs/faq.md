# Frequently Asked Questions

## General

### What is ScentPlanet?

ScentPlanet is a desktop application that brings immersive scent experiences to your gaming sessions. It uses AI-powered scene recognition to detect your in-game environment and releases corresponding scents through a Bluetooth-connected hardware device.

### Do I need special hardware?

Yes, ScentPlanet requires our companion scent device. The software alone cannot produce scents. The device connects via Bluetooth Low Energy (BLE) and contains 6 interchangeable scent cartridges.

### Which games are supported?

We officially support Red Dead Redemption 2, with more games being added by our community. Check the [Supported Games](../README.md#supported-games) section for the current list.

### Is it open source?

The desktop application is proprietary software. However, our [game profile library](https://github.com/ScentPlanet/game-profiles) is open source and welcomes community contributions.

---

## Technical

### How does scene recognition work?

ScentPlanet uses Vision Language Models (VLM) to analyze your game screen and determine the environment. The key insight is that it recognizes your *location* in the game world, not just what's visible on screen. For example, if you're in a forest but looking at the sky, it still knows you're in a forest.

### Does it work with any game?

ScentPlanet works best with games that have distinct environmental areas. Each game needs a "profile" that defines how to map environments to scents. You can contribute profiles for new games through our [game-profiles repository](https://github.com/ScentPlanet/game-profiles).

### What's the latency?

The entire pipeline (screen capture → AI recognition → BLE transmission) targets under 100ms end-to-end latency, ensuring scents are released in sync with your gameplay.

### Does it affect game performance?

ScentPlanet is designed to be lightweight. Screen capture uses Windows Graphics Capture API with minimal CPU overhead. The AI processing happens in the cloud, so your GPU remains available for gaming.

---

## Privacy & Security

### What data does ScentPlanet collect?

ScentPlanet captures screenshots of your game for scene recognition. These are processed by our secure VLM API and are not stored. We do not collect personal information, gameplay statistics, or any other data.

### Is my API key safe?

Your OpenRouter API key is stored securely in your local system using the platform's secure credential storage. It is never sent to our servers.

### Can I use ScentPlanet offline?

Scene recognition requires an internet connection for the VLM API. However, the app can operate in a limited "manual mode" where you select environments yourself.

---

## Troubleshooting

### The app doesn't detect my game

1. Make sure the game is running in windowed or borderless windowed mode
2. Check that the game is in the [Supported Games](../README.md#supported-games) list
3. Try running ScentPlanet as Administrator
4. Verify that no other screen capture software is blocking access

### My device won't connect

1. Ensure Bluetooth is enabled on your PC
2. Check that the device is charged and powered on
3. Try restarting both the device and the app
4. Make sure no other app is connected to the device

### Scents aren't triggering

1. Verify the device is connected (blue LED indicator)
2. Check that cartridges are properly inserted and not empty
3. Ensure the selected game profile has scent mappings enabled
4. Check the intensity settings in the app

---

## Still have questions?

- Join our [Discord community](https://discord.gg/scentplanet) for real-time help
- [Open an issue](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) for bug reports
- [Submit a feature request](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml) for suggestions
