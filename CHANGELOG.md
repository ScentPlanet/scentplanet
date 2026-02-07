# Changelog

All notable changes to ScentPlanet will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.6] - 2026-02-07

### Added

- Event-driven audio scent architecture with per-game audio mapping
- Per-game audio event configuration (Gunshot, Explosion, FireCrackle, CookingSound, Wind, WaterFlow)
- Olfactory adaptation system (exponential decay for prolonged scent exposure)
- Audio settings page with global sensitivity control
- New environment type: Barbecue (replaces DryField)

### Fixed

- Audio event confidence scale mismatch preventing fire/cooking/water events from triggering
- Evidence buffer flush on scene transitions (reduced lingering scent)
- Release updater URLs now correctly point to public distribution repository

### Changed

- Audio events are now independent from visual pipeline (event-driven, not ambient fusion)
- Reduced evidence window from 12s to 8s for faster scene transitions
- Per-scent intensity defaults adjusted based on user testing feedback

### Removed

- Dead code cleanup: removed unused VLM analysis functions and legacy scent emission paths

## [0.3.5] - 2026-02-04

### Fixed

- Dev server port conflict (changed to port 1820 with auto-kill for stale processes)
- WGC capture errors now classified with actionable user guidance
- Graceful fallback when SetMinimumUpdateInterval is unsupported
- Zero-dependency distribution for Windows
- Pipeline startup errors now surface with preflight health checks

### Changed

- DryField environment renamed to Barbecue with differentiated fire-related scents
- OpenRouterSetupWizard migrated to design system

## [0.3.4] - 2026-02-03

### Added

- Branded NSIS installer with custom header, sidebar, and language selector
- Auto-update with public repository distribution
- OpenRouter structured output support for reliable JSON responses
- Official LobeHub AI provider icons
- Minecraft built-in game profile
- Hardware BLE control infrastructure and protocol validation

### Fixed

- BLE device state sync on all transitions
- Multi-scent event emission and reduced cooldowns for WebBLE path
- Primary scent selection by highest non-neutral intensity
- Kimi K2.5 empty response and model state sync issues
- Vite mixed import warnings and code splitting optimization

### Changed

- Overlay redesigned with Dynamic Island pattern and SF Pro fonts
- Comprehensive code quality upgrade across Rust and TypeScript

## [0.3.3] - 2026-01-27

### Added

- Multi-game support with per-game scent profiles
- Game profile editor in Settings
- VLM-powered scene recognition via OpenRouter API
- BLE device connection status indicator
- First-time setup wizard
- i18n support (English, Simplified Chinese, Traditional Chinese)

### Changed

- Improved UI with PS5-inspired premium dark theme
- Enhanced environment detection accuracy
- Optimized VLM API latency

### Fixed

- Window capture on multi-monitor setups
- BLE reconnection stability

## [0.0.10] - 2025-12-29

### Added

- Initial pre-release
- Basic screen capture functionality
- VLM integration prototype
- BLE device pairing

---

[Unreleased]: https://github.com/ScentPlanet/scentplanet/compare/v0.3.6...HEAD
[0.3.6]: https://github.com/ScentPlanet/scentplanet/releases/tag/v0.3.6
[0.3.5]: https://github.com/ScentPlanet/scentplanet/releases/tag/v0.3.5
[0.3.4]: https://github.com/ScentPlanet/scentplanet/releases/tag/v0.3.4
[0.3.3]: https://github.com/ScentPlanet/scentplanet/releases/tag/v0.3.3
[0.0.10]: https://github.com/ScentPlanet/scentplanet/releases/tag/v0.0.10
