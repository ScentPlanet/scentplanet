# Getting Started with ScentPlanet

Welcome to ScentPlanet! This guide will help you set up and start using the app.

## Requirements

- **Operating System**: Windows 10 or Windows 11 (64-bit)
- **RAM**: 4GB minimum
- **Hardware**: ScentPlanet BLE scent device
- **Internet**: Required for VLM scene recognition

## Installation

### Step 1: Download

Download the latest version from our [Releases page](https://github.com/ScentPlanet/scentplanet/releases/latest).

### Step 2: Install

1. Run the downloaded `.exe` installer
2. Choose installation type:
   - **User installation** (recommended): Installs for current user only
   - **System installation**: Installs for all users (requires admin)
3. Follow the installation wizard

### Step 3: First Launch

When you first launch ScentPlanet, a setup wizard will guide you through:

1. **Language Selection** - Choose your preferred language
2. **API Key Setup** - Enter your OpenRouter API key
3. **Hardware Connection** - Pair your scent device via Bluetooth

## Getting an API Key

ScentPlanet uses OpenRouter for AI scene recognition. To get an API key:

1. Visit [openrouter.ai](https://openrouter.ai)
2. Create an account
3. Go to [API Keys](https://openrouter.ai/keys)
4. Create a new key
5. Copy the key and paste it in ScentPlanet's setup wizard

**Cost**: Scene recognition uses approximately $0.001-0.005 per game session, depending on the model selected.

## Connecting Your Hardware

### Pairing

1. Turn on your ScentPlanet scent device
2. Open ScentPlanet app
3. Go to Settings > Device
4. Click "Scan for Devices"
5. Select your device from the list
6. Wait for connection confirmation

### LED Indicators

| LED Pattern | Meaning |
|-------------|---------|
| Solid Blue | Connected |
| Blinking Blue | Pairing mode |
| Solid Green | Active scent emission |
| Red | Low battery |

## Playing Your First Game

1. **Select a Game**: On the Home screen, select a game from the library
2. **Launch the Game**: Start your game as normal
3. **Enable Scent Sync**: ScentPlanet will automatically detect the game window
4. **Play!**: Enjoy the immersive scent experience

## Troubleshooting

### App doesn't detect my game

- Make sure the game is in the Supported Games list
- Try running ScentPlanet as Administrator
- Check that the game window title matches the expected pattern

### Device won't connect

- Ensure Bluetooth is enabled on your PC
- Try restarting both the device and the app
- Check that no other app is connected to the device

### Scents not triggering

- Verify the device is connected (blue LED)
- Check that cartridges are properly inserted
- Ensure the selected game profile has scent mappings enabled

## Need More Help?

- [FAQ](faq.md)
- [Discord Community](https://discord.gg/scentplanet)
- [Report a Bug](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml)
