<div align="center">
  <h1>ScentPlanet</h1>
  <p><strong>实时游戏嗅觉体验</strong></p>
  <p>
    <a href="#下载">下载</a> &bull;
    <a href="#功能特性">功能特性</a> &bull;
    <a href="docs/getting-started.md">快速开始</a> &bull;
    <a href="https://discord.com/channels/1450784037886103605/1450793325228458095">Discord</a>
  </p>
  <p>
    <img src="https://img.shields.io/github/v/release/ScentPlanet/scentplanet?style=flat-square" alt="Latest Release">
    <img src="https://img.shields.io/github/downloads/ScentPlanet/scentplanet/total?style=flat-square" alt="Downloads">
    <img src="https://img.shields.io/badge/platform-Windows-blue?style=flat-square" alt="Platform">
  </p>
  <p>
    <a href="README.md">English</a> | 简体中文
  </p>
</div>

---

## ScentPlanet 是什么？

ScentPlanet 为你的游戏体验带来沉浸式的嗅觉感受。通过 AI 驱动的场景识别，它能自动检测游戏中的环境，并通过蓝牙连接的硬件设备释放相应的气味。

**想象一下在《荒野大镖客：救赎2》中** - 当你骑马穿过松林时，你能闻到清新的木头香气。当你扎营时，篝火的烟味萦绕在空气中。当你路过野花田时，花香包围着你。

---

## 下载

| 平台 | 下载 | 系统要求 |
|:----:|:----:|:---------|
| **Windows** | [**下载最新版**](https://github.com/ScentPlanet/scentplanet/releases/latest) | Windows 10/11 (64位), 4GB 内存 |
| macOS | 即将推出 | - |
| Linux | 即将推出 | - |

### 安装步骤

1. 从上方链接下载 `.exe` 安装程序
2. 运行安装程序并按提示操作
3. 选择安装类型：
   - **用户安装**（推荐）：仅为当前用户安装
   - **系统安装**：为所有用户安装（需要管理员权限）
4. 从开始菜单或桌面快捷方式启动 ScentPlanet

---

## 功能特性

### 多游戏支持
支持多款热门游戏，包括《荒野大镖客：救赎2》、《艾尔登法环》等。社区贡献的游戏配置持续增加中。

### AI 场景识别
基于视觉语言模型 (VLM) 技术，ScentPlanet 能实时理解你在游戏中的环境，而不仅仅是屏幕上显示的内容。

### 无线硬件
通过蓝牙低功耗 (BLE) 无线连接气味设备。无线缆，无烦恼。

### 云端游戏库
新的游戏配置会自动推送 - 无需更新应用程序。

### 多语言支持
支持英文、简体中文和繁体中文。

---

## 硬件设备

ScentPlanet 需要配套的硬件设备来释放气味。

- **连接方式**：蓝牙低功耗 (BLE)
- **气味仓**：6 个可更换的气味仓
- **电源**：USB-C 充电

[了解更多硬件信息](docs/hardware-guide.md)

---

## 支持的游戏

| 游戏 | 状态 | 环境类型 |
|------|------|----------|
| 荒野大镖客：救赎2 | 官方支持 | 草原、森林、沙漠、篝火、烹饪、花田 |
| 艾尔登法环 | 社区贡献 | 即将推出 |
| 巫师3 | 社区贡献 | 即将推出 |

想要添加新游戏？[贡献游戏配置](https://github.com/ScentPlanet/game-profiles)！

---

## 社区

加入我们的社区，获取帮助、分享反馈，与其他用户交流。

| | |
|---|---|
| **Discord** | [加入服务器](https://discord.com/channels/1450784037886103605/1450793325228458095) |
| **报告 Bug** | [提交 Issue](https://github.com/ScentPlanet/scentplanet/issues/new?template=bug_report.yml) |
| **功能建议** | [提交想法](https://github.com/ScentPlanet/scentplanet/issues/new?template=feature_request.yml) |
| **贡献游戏配置** | [game-profiles 仓库](https://github.com/ScentPlanet/game-profiles) |

---

## 常见问题

<details>
<summary><strong>需要特殊硬件吗？</strong></summary>

是的，ScentPlanet 需要配套的气味设备。软件本身无法产生气味。
</details>

<details>
<summary><strong>支持哪些游戏？</strong></summary>

我们官方支持《荒野大镖客：救赎2》，更多游戏正在由社区添加中。查看上方的"支持的游戏"部分。
</details>

<details>
<summary><strong>是开源的吗？</strong></summary>

桌面应用程序是专有软件。但我们的游戏配置库是开源的，欢迎社区贡献。
</details>

<details>
<summary><strong>场景识别如何工作？</strong></summary>

ScentPlanet 使用视觉语言模型 (VLM) 分析游戏画面，判断环境类型。它不只是看你面前的东西 - 而是理解你在游戏世界中的实际位置。
</details>

---

## 隐私

ScentPlanet 在本地处理游戏截图，并将其发送到我们的安全 VLM API 进行场景识别。我们不存储你的游戏数据。详情请参阅 [隐私政策](docs/privacy.md)。

---

## 许可证

ScentPlanet 是专有软件。详情请参阅 [LICENSE](LICENSE)。

[ScentPlanet/game-profiles](https://github.com/ScentPlanet/game-profiles) 中的游戏配置采用 CC-BY-SA 4.0 许可。

---

<div align="center">
  <p>由 ScentPlanet 团队倾情打造</p>
  <p>
    <a href="https://scentplanet.app">官网</a> &bull;
    <a href="https://discord.com/channels/1450784037886103605/1450793325228458095">Discord</a> &bull;
    <a href="https://x.com/ScentPlanetApp">Twitter</a>
  </p>
</div>
