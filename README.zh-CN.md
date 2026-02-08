<div align="center">

<br/>

<img src="assets/logo-dark.svg" width="48" alt="ScentPlanet">

<br/><br/>

# ScentPlanet

**感受每一个世界。**

真实气味，由 AI 触发，实时传递。

<br/>

[![下载](https://img.shields.io/github/v/release/ScentPlanet/scentplanet?label=%E4%B8%8B%E8%BD%BD&color=0055A4&style=flat-square)](https://github.com/ScentPlanet/scentplanet/releases/latest/download/ScentPlanet-Setup.exe)&nbsp;&nbsp;[![平台](https://img.shields.io/badge/Windows%2010%2F11-0078D4?style=flat-square&logo=windows11&logoColor=white)](https://github.com/ScentPlanet/scentplanet/releases/latest/download/ScentPlanet-Setup.exe)&nbsp;&nbsp;[![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1450784037886103605/1450793325228458095)

<br/>

[English](README.md) &nbsp;|&nbsp; 简体中文

</div>

<br/>

---

<br/>

当气味弥漫，游戏世界鲜活了起来。踏入森林，深吸一口气。无需模组，无需插件。只管玩。

<br/>

<div align="center">
<img src="assets/screenshots/home-page.png" width="720" alt="ScentPlanet">
</div>

<br/>

---

<br/>

### 01 &mdash; 它看见你所见。

AI 视觉实时分析你的屏幕。不只是像素 &mdash; 它理解你在游戏世界中*身处何处*。森林、篝火、旷野 &mdash; 识别并即刻回应。

### 02 &mdash; 六种气息，万千世界。

可更换香薰仓让每个场景触手可及。松木、烟火、青草 &mdash; 就在你身边。每个香薰仓对应一种 AI 识别的环境类型。

### 03 &mdash; 每一款游戏，即刻适配。

无需模组。通过 AI 视觉适配任何游戏。荒野大镖客2、Minecraft、GTA、艾尔登法环 &mdash; 直接开玩。

<br/>

---

<br/>

### 工作原理

```
游戏画面  ──>  AI 视觉  ──>  气味引擎  ──>  BLE 硬件
 <10ms        <30ms         <2ms          <20ms
  截屏        场景分类     证据融合       气味释放
```

管线截取游戏画面，通过云端 VLM 分类环境，随时间累积证据过滤噪声，最终通过蓝牙低功耗向硬件发送气味指令。端到端延迟低于 80ms。

<br/>

---

<br/>

### 为你热爱的世界而生。

从新奥斯汀的旷野，到 Minecraft 洞穴深处。每个世界都有它的气息。

| 游戏 | 工作室 | 环境 |
|:-----|:-------|:-----|
| **荒野大镖客：救赎2** | Rockstar Games | 草地、森林、沙漠、篝火、烹饪、花卉 |
| **Minecraft** | Mojang Studios | 森林、篝火、花卉、烹饪 |
| **所有开放世界** | 通用 | 通过 AI 视觉适配任何游戏 |

为任何游戏创建自定义气味配置。将环境映射到香薰仓。通过 [game-profiles](https://github.com/ScentPlanet/game-profiles) 与社区分享。

<br/>

<div align="center">
<img src="assets/screenshots/dashboard.png" width="720" alt="配置编辑器">
</div>

<br/>

---

<br/>

### 下载

<div align="center">

<br/>

**[下载 Windows 版本](https://github.com/ScentPlanet/scentplanet/releases/latest/download/ScentPlanet-Setup.exe)**

Windows 10/11 (64位) &nbsp;&middot;&nbsp; 4GB 内存 &nbsp;&middot;&nbsp; 蓝牙低功耗 &nbsp;&middot;&nbsp; 内置自动更新

macOS 和 Linux &mdash; 即将推出。

<br/>

</div>

---

<br/>

### 技术栈

| 层级 | 技术 |
|:-----|:-----|
| 桌面端 | [Tauri 2.x](https://tauri.app) &mdash; Rust 后端，WebView 前端 |
| 前端 | React 19、TypeScript 5、Vite 6、Zustand 5 |
| AI 视觉 | 云端 VLM，通过 [OpenRouter](https://openrouter.ai) |
| 硬件 | ESP32-C3 BLE 气味设备 (6 香薰仓) |
| 音频 | Rust 原生实时 DSP 事件检测 |
| 国际化 | 英语、简体中文、繁体中文 |

<br/>

---

<br/>

### 社区

[Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp;&middot;&nbsp; [报告 Bug](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) &nbsp;&middot;&nbsp; [功能请求](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml) &nbsp;&middot;&nbsp; [讨论](https://github.com/ScentPlanet/scentplanet/discussions) &nbsp;&middot;&nbsp; [更新日志](CHANGELOG.md)

<br/>

<details>
<summary><strong>常见问题</strong></summary>
<br/>

**需要特殊硬件吗？**
是的 &mdash; ScentPlanet 需要我们的 BLE 气味伴侣设备，带有 6 个香薰仓插槽。

**AI 费用是多少？**
场景识别使用 OpenRouter 云端 VLM API。每次会话费用通常低于 $0.01。你需要使用自己的 API 密钥。

**可以自定义气味强度吗？**
可以 &mdash; 支持逐环境强度设置、全局控制和嗅觉适应参数配置。

</details>

<br/>

---

<br/>

<div align="center">

<sub>ScentPlanet 在本地处理截图，并发送到你配置的 VLM API。不收集任何游戏数据。 &nbsp; [隐私政策](docs/privacy.md) &nbsp;&middot;&nbsp; [硬件指南](docs/hardware-guide.md)</sub>

<br/><br/>

**ScentPlanet** &mdash; 感受每一个世界。

</div>
