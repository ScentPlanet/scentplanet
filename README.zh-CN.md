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

**AI 驱动的游戏气味同步系统。**
<br/>
通过实时嗅觉沉浸，感受每一个游戏环境。

<br/>

[**下载**](https://github.com/ScentPlanet/scentplanet/releases/latest) &nbsp;&bull;&nbsp; [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp;&bull;&nbsp; [报告问题](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) &nbsp;&bull;&nbsp; [功能建议](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml)

<br/>

<a href="README.md">English</a> &nbsp;|&nbsp; 简体中文

</div>

<br/>

---

<br/>

> *骑马穿过松林 —— 你闻到了木头的清香。*
> *夜幕降临生起篝火 —— 烟雾在空气中弥漫。*
> *走过清晨的野花丛 —— 淡淡花香环绕四周。*

ScentPlanet 理解你**身处游戏世界的哪个位置** —— 不只是屏幕上显示了什么 —— 并实时触发对应的真实气味。

<br/>

<div align="center">
<img src="assets/screenshots/home-page.png" width="90%" alt="ScentPlanet" style="border-radius: 12px;">
</div>

<br/>

---

<br/>

## 工作原理

<div align="center">
<img src="assets/architecture-flow.svg" alt="架构" width="100%">
</div>

<br/>

## 核心特性

- **环境感知检测** —— 三层架构识别你在游戏中的实际位置，而非仅分析视口内容。在森林中抬头看天，仍然触发森林气味。
- **音视融合** —— 结合游戏音频线索（火焰噼啪、烹饪声、水流声）与视觉分析，提高识别准确度。
- **嗅觉适应** —— 指数衰减曲线防止长时间暴露导致的气味疲劳。场景切换时自动重置。
- **逐游戏配置** —— 每款游戏可自定义气味映射。使用内置配置或为荒野大镖客2、我的世界等创建专属方案。
- **亚100ms延迟** —— 从屏幕捕获到气味释放，端到端延迟低于80ms。
- **6种气味仓** —— 鲜草、烧烤、松木、篝火烟、炖菜、花香。

<br/>

---

<br/>

## 下载

<div align="center">

**最新版本：v0.3.7**

<br/>

<a href="https://github.com/ScentPlanet/scentplanet/releases/latest">
<img src="assets/badges/download-badge.svg" alt="下载" height="36">
</a>

<br/><br/>

Windows 10/11（64位）&nbsp;&bull;&nbsp; 4GB 内存 &nbsp;&bull;&nbsp; 蓝牙 LE &nbsp;&bull;&nbsp; 内置自动更新

<br/>

macOS 和 Linux —— 即将推出

</div>

<br/>

---

<br/>

## 支持的游戏

| 游戏 | 状态 | 环境 |
|:-----|:----:|:-----|
| **荒野大镖客：救赎2** | 官方 | 草原、森林、沙漠、篝火、烹饪、花田 |
| **我的世界** | 官方 | 森林、篝火、花田、烹饪 |
| **通用** | 内置 | 适用于所有游戏的通用检测 |

> 想要添加你的游戏？向 [game-profiles](https://github.com/ScentPlanet/game-profiles) 贡献配置文件。

<br/>

---

<br/>

## 技术栈

| 层级 | 技术 |
|:-----|:-----|
| 桌面端 | [Tauri 2.x](https://tauri.app) — Rust 后端 + WebView 前端 |
| 前端 | React 19、TypeScript 5、Vite 6、Zustand 5 |
| AI 视觉 | 云端 VLM（通过 [OpenRouter](https://openrouter.ai)） |
| 硬件 | ESP32-C3 BLE + Web Bluetooth API |
| 音频 | Rust 原生实时 DSP 事件检测 |
| 国际化 | 英文、简体中文、繁体中文 |

<br/>

---

<br/>

## 社区

<table>
<tr>
<td width="50%">

- [**报告问题**](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml)
- [**功能建议**](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml)
- [**讨论区**](https://github.com/ScentPlanet/scentplanet/discussions)

</td>
<td width="50%">

- [**Discord**](https://discord.com/channels/1450784037886103605/1450793325228458095)
- [**Twitter/X**](https://x.com/ScentPlanetApp)
- [**更新日志**](CHANGELOG.md)

</td>
</tr>
</table>

<br/>

<details>
<summary><strong>常见问题</strong></summary>
<br/>

**需要专用硬件吗？**
是的 — ScentPlanet 需要配套的 BLE 气味设备（6个气味仓）。

**AI 费用是多少？**
场景识别使用 OpenRouter 的云端 VLM API。每次游戏会话费用约 $0.001–0.005。需要自备 API 密钥。

**应用开源吗？**
桌面应用为商业软件。[游戏配置库](https://github.com/ScentPlanet/game-profiles)为开源项目（CC-BY-SA 4.0）。

**可以自定义气味强度吗？**
可以 — 支持逐环境强度设置、全局控制和嗅觉适应参数调节。

</details>

<br/>

---

<br/>

<div align="center">

ScentPlanet 在本地处理截图，并发送至你配置的 VLM API。我们不存储或收集游戏数据。[隐私政策](docs/privacy.md) &nbsp;&bull;&nbsp; [硬件指南](docs/hardware-guide.md)

<br/><br/>

<img src="assets/logo-dark.svg" width="40" alt="ScentPlanet">

<br/><br/>

**ScentPlanet** — 重新定义游戏体验。

<br/>

[版本发布](https://github.com/ScentPlanet/scentplanet/releases) &nbsp;&bull;&nbsp; [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp;&bull;&nbsp; [Twitter](https://x.com/ScentPlanetApp)

<br/>
</div>
