<!-- ScentPlanet - 实时嗅觉游戏体验 -->

<div align="center">

<!-- Animated Hero Banner -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/hero-banner.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/hero-banner.svg">
  <img src="assets/hero-banner.svg" alt="ScentPlanet - 实时嗅觉游戏体验" width="100%">
</picture>

<br/>

<!-- Premium Custom Badges -->
<a href="https://github.com/ScentPlanet/scentplanet/releases/latest"><img src="assets/badges/version-badge.svg" alt="v0.3.7" height="28"></a>&nbsp;&nbsp;
<a href="https://github.com/ScentPlanet/scentplanet/releases/latest"><img src="assets/badges/download-badge.svg" alt="Download" height="28"></a>&nbsp;&nbsp;
<img src="assets/badges/platform-badge.svg" alt="Windows 10/11" height="28">&nbsp;&nbsp;
<img src="assets/badges/status-badge.svg" alt="Active Development" height="28">&nbsp;&nbsp;
<a href="https://discord.com/channels/1450784037886103605/1450793325228458095"><img src="assets/badges/discord-badge.svg" alt="Discord" height="28"></a>

<br/><br/>

**全球首个 AI 驱动的游戏嗅觉同步系统。**<br/>
通过实时嗅觉沉浸感受每一个游戏环境。

<br/>

[**下载**](https://github.com/ScentPlanet/scentplanet/releases/latest) &nbsp; | &nbsp; [快速入门](docs/getting-started.md) &nbsp; | &nbsp; [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp; | &nbsp; [报告问题](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) &nbsp; | &nbsp; [功能建议](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml)

<br/>

<a href="README.md">English</a> &nbsp;|&nbsp; 简体中文

</div>

<br/>

---

<br/>

## 沉浸体验

<div align="center">

> *在《荒野大镖客2》中骑马穿越松树林 — 你闻到了木香。*<br/>
> *夜幕降临时扎营 — 篝火的烟味弥漫在空气中。*<br/>
> *黎明时分走过野花丛 — 淡淡的花香包围着你。*

</div>

ScentPlanet 将游戏转变为多感官体验。我们的 AI 理解你在游戏世界中的**实际位置** — 而非仅仅是屏幕上显示的内容 — 并实时同步真实气味来匹配你的环境。

<br/>

<!-- Architecture Flow Diagram -->
<div align="center">
<img src="assets/architecture-flow.svg" alt="ScentPlanet 工作原理" width="90%">
</div>

<br/>

---

<br/>

## 工作原理

<table>
<tr>
<td width="25%" align="center">

<img src="assets/icons/ai-vision.svg" width="56" height="56" alt="AI 视觉"><br/><br/>
<strong>AI 场景识别</strong><br/>
<sub>视觉 AI 分析游戏画面<br/>检测环境类型</sub>

</td>
<td width="25%" align="center">

<img src="assets/icons/realtime.svg" width="56" height="56" alt="实时"><br/><br/>
<strong>实时处理</strong><br/>
<sub>从屏幕到气味<br/>端到端延迟低于100ms</sub>

</td>
<td width="25%" align="center">

<img src="assets/icons/wireless.svg" width="56" height="56" alt="无线"><br/><br/>
<strong>无线硬件</strong><br/>
<sub>BLE 连接气味设备<br/>6 个气味卡槽</sub>

</td>
<td width="25%" align="center">

<img src="assets/icons/multi-game.svg" width="56" height="56" alt="多游戏"><br/><br/>
<strong>多游戏支持</strong><br/>
<sub>按游戏配置气味方案<br/>社区共建</sub>

</td>
</tr>
</table>

<br/>

---

<br/>

## 功能特性

<table>
<tr>
<td width="50%">

### 智能环境检测

ScentPlanet 不仅分析屏幕上可见的内容。我们基于证据的识别系统理解你在游戏中的**实际位置** — 在森林里仰望天空，仍然会触发森林气味。

- 基于时间窗口的证据累积与视角可靠性权重
- 多帧置信度评分确保检测稳定性
- 滞后状态机防止环境误切换

</td>
<td width="50%">

### 视听融合

除视觉分析外，ScentPlanet 还监听游戏音频中的环境线索。

- 柴火噼啪声增强篝火气味置信度
- 烹饪声区分厨房与篝火环境
- 水流和风声调节气味强度
- 按游戏配置音频事件映射及冷却管理

</td>
</tr>
<tr>
<td width="50%">

### 自适应气味控制

内置嗅觉适应机制，防止气味疲劳。

- 长时间暴露的指数衰减曲线
- 按气味类型调整强度（某些气味需要较低强度）
- 环境切换时平滑过渡
- 场景变化时自动重置

</td>
<td width="50%">

### 开放游戏配置

社区驱动的游戏支持，通过开放气味配置实现。

- 为任何游戏创建配置文件
- 通过 [game-profiles](https://github.com/ScentPlanet/game-profiles) 仓库分享
- 云端交付 — 新游戏无需更新应用
- 可自定义的环境强度设置

</td>
</tr>
</table>

<br/>

---

<br/>

## 下载

<div align="center">

### 最新版本: v0.3.7

<br/>

<a href="https://github.com/ScentPlanet/scentplanet/releases/latest">

| | |
|:---:|:---|
| **Windows** | **[下载 ScentPlanet 安装包 (.exe)](https://github.com/ScentPlanet/scentplanet/releases/latest)** |
| 系统要求 | Windows 10/11 (64位), 4GB 内存, 蓝牙 |
| 自动更新 | 内置 — 有新版本时自动通知 |

</a>

<br/>

| macOS | Linux |
|:---:|:---:|
| 即将推出 | 即将推出 |

</div>

### 快速开始

```
1. 下载并运行安装包
2. 从开始菜单启动 ScentPlanet
3. 完成设置向导（API 密钥 + 硬件配对）
4. 选择游戏开始体验！
```

查看[快速入门指南](docs/getting-started.md)了解详细说明。

<br/>

---

<br/>

## 支持的游戏

| 游戏 | 状态 | 气味环境 |
|:-----|:----:|:---------|
| **荒野大镖客：救赎2** | 官方 | 草地, 森林, 沙漠, 篝火, 烹饪, 花卉 |
| **Minecraft** | 官方 | 森林, 篝火, 花卉, 烹饪 |
| **艾尔登法环** | 社区 | 即将推出 |
| **巫师3** | 社区 | 即将推出 |
| **通用** | 内置 | 适用于任何游戏的通用检测 |

> **想添加你喜欢的游戏？** 在我们开放的 [game-profiles](https://github.com/ScentPlanet/game-profiles) 仓库贡献气味配置！

<br/>

---

<br/>

## 硬件

ScentPlanet 需要配合我们的 BLE 气味设备使用。

| 规格 | 详情 |
|:-----|:-----|
| **连接方式** | 低功耗蓝牙 (BLE) |
| **卡槽** | 6 个可更换气味卡槽 |
| **气味** | 鲜草, 烧烤, 松木, 篝火烟, 炖菜, 花香 |
| **供电** | USB-C 充电 |
| **范围** | 最远 10 米无线连接 |

<br/>

---

<br/>

## 社区与反馈

本仓库是 ScentPlanet 社区互动的**主要中心**。我们使用 GitHub Issues 和 Discussions 收集所有反馈。

<table>
<tr>
<td width="50%">

### 报告与建议

- [**Bug 报告**](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) — 发现问题？告诉我们
- [**功能建议**](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml) — 有好主意？我们想听
- [**浏览 Issues**](https://github.com/ScentPlanet/scentplanet/issues) — 查看其他人的反馈
- [**讨论区**](https://github.com/ScentPlanet/scentplanet/discussions) — 常见问题和社区交流

</td>
<td width="50%">

### 联系我们

- [**Discord**](https://discord.com/channels/1450784037886103605/1450793325228458095) — 与团队和社区实时交流
- [**Twitter/X**](https://x.com/ScentPlanetApp) — 关注获取更新和公告
- [**更新日志**](CHANGELOG.md) — 查看每个版本的新内容
- [**贡献指南**](CONTRIBUTING.md) — 如何参与贡献

</td>
</tr>
</table>

<br/>

---

<br/>

## 常见问题

<details>
<summary><strong>需要专用硬件吗？</strong></summary>
<br/>
是的。ScentPlanet 需要配合我们的 BLE 气味设备使用（6 个卡槽）。仅软件无法产生气味。
<br/><br/>
</details>

<details>
<summary><strong>AI 运行成本是多少？</strong></summary>
<br/>
场景识别使用 OpenRouter 的云端 VLM API。典型成本为每次游戏约 ¥0.01-0.04，取决于选择的模型。需要自备 API 密钥。
<br/><br/>
</details>

<details>
<summary><strong>支持哪些游戏？</strong></summary>
<br/>
目前官方支持《荒野大镖客：救赎2》和 Minecraft，还有通用配置适用于任何游戏。更多游戏正由社区通过开源 <a href="https://github.com/ScentPlanet/game-profiles">game-profiles</a> 仓库添加中。
<br/><br/>
</details>

<details>
<summary><strong>应用是开源的吗？</strong></summary>
<br/>
桌面应用是私有软件。我们的<a href="https://github.com/ScentPlanet/game-profiles">游戏配置库</a>是开源的（CC-BY-SA 4.0），欢迎社区贡献。
<br/><br/>
</details>

<br/>

---

<br/>

## 隐私

ScentPlanet 在本地处理游戏截图，并将其发送到你配置的 VLM API 进行场景识别。我们不存储或收集你的游戏数据。详见[隐私政策](docs/privacy.md)。

## 许可

ScentPlanet 桌面应用是私有软件。详见 [LICENSE](LICENSE)。

[ScentPlanet/game-profiles](https://github.com/ScentPlanet/game-profiles) 中的游戏配置以 CC-BY-SA 4.0 授权。

<br/>

---

<div align="center">
<br/>

<img src="assets/logo-dark.svg" width="48" alt="ScentPlanet">

<br/><br/>

**ScentPlanet** &mdash; 游戏，重新定义。

<br/>

[官网](https://scentplanet.app) &nbsp;&bull;&nbsp; [Discord](https://discord.com/channels/1450784037886103605/1450793325228458095) &nbsp;&bull;&nbsp; [Twitter](https://x.com/ScentPlanetApp) &nbsp;&bull;&nbsp; [下载](https://github.com/ScentPlanet/scentplanet/releases)

<br/>
</div>
