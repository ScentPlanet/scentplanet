# Privacy Policy

**Last updated: February 2026**

## Overview

ScentPlanet is designed with privacy in mind. We process game data locally on your device and minimize data transmission to only what's necessary for AI-powered scene recognition.

## What We Collect

### We Do NOT Collect

- Game screenshots or video footage
- Personal information or account data
- Usage analytics or telemetry
- Hardware identifiers beyond BLE pairing

### What Gets Transmitted

| Data | Destination | Purpose | Retention |
|:-----|:------------|:--------|:----------|
| Game screenshots | Your configured VLM API (OpenRouter) | AI scene recognition | Not retained by ScentPlanet; subject to API provider's policy |
| API requests | OpenRouter servers | Environment classification | Processed in real-time, not stored by us |

## How It Works

1. **Screen Capture** — ScentPlanet captures your game screen locally using Windows Graphics Capture API
2. **AI Processing** — Screenshots are sent to your configured VLM API endpoint (e.g., OpenRouter) for scene classification
3. **Local Decision** — Environment classification results are processed locally through our evidence accumulator and state machine
4. **BLE Emission** — Scent commands are sent locally to your paired BLE device

**All processing logic runs on your machine.** The only external communication is with the VLM API you configure.

## API Key Security

- Your OpenRouter API key is stored locally in your app settings
- It is never transmitted to ScentPlanet servers
- It is only used for direct API calls to OpenRouter from your device

## Third-Party Services

ScentPlanet uses [OpenRouter](https://openrouter.ai) as the default VLM API provider. Please review their [privacy policy](https://openrouter.ai/privacy) for information about how they handle API requests.

## Data Storage

All application data is stored locally:

- **Settings**: `%APPDATA%/ScentPlanet/` (Windows)
- **Game Profiles**: Stored in local app settings
- **No cloud sync**: Your data stays on your device

## Open Source

Our [game profile library](https://github.com/ScentPlanet/game-profiles) is open source. The desktop application is proprietary but all data processing is transparent and local.

## Contact

For privacy concerns, please reach out via:
- [GitHub Issues](https://github.com/ScentPlanet/scentplanet/issues)
- [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095)

## Changes

We may update this privacy policy from time to time. Changes will be noted here with an updated date.
