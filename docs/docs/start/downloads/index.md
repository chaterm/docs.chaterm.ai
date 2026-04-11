# 下载

Chaterm 支持客户端和移动端，适用于主流的操作系统，并提供原生安装包。

<div id="smart-download-section" class="smart-download-container">
  <a id="smart-download-btn" href="/download/" class="smart-download-btn" style="display: none;">
    <span class="download-icon">⤓</span>
    <span id="download-btn-text">下载 Chaterm</span>
  </a>
</div>

## Windows

- Windows 10 及以上
- 原生安装程序 (.exe)

## macOS

- macOS 10.15（Catalina）及更高版本
- 原生安装包（.dmg）
- 适用于 Apple Silicon 和 Intel

## Linux

### Debian/Ubuntu（推荐）

适用于 Debian、Ubuntu 以及其他基于 Debian 的发行版。

1. 从 [下载页面](/download/) 下载 `.deb` 文件
2. 执行安装命令：

```bash
sudo apt install ./chaterm-*.deb
```

### AppImage（便携版）

适用于所有 Linux 发行版，无需安装即可运行。

1. 从 [下载页面](/download/) 下载 `.AppImage` 文件
2. 授予可执行权限并运行：

```bash
chmod +x chaterm-*.AppImage
./chaterm-*.AppImage
```

<Note>
  与 AppImage 相比，更推荐使用 .deb 软件包。它会提供桌面图标、系统集成，以及 AppImage 不包含的命令行工具。
</Note>

## iOS

适用于 iPhone 和 iPad。

1. 访问 [App Store](https://apps.apple.com/cn/app/chaterm/id6753935895) 下载安装
2. 或从 [下载页面](/download/) 获取 App Store 链接

## Android

适用于 Android 设备。

1. 从 [下载页面](/download/) 下载 `.apk` 文件
2. 安装 APK 文件（需要允许安装来自未知来源的应用）

<script>
(function() {
  const URLS = {
    win: 'https://static-download8.chaterm.net/chaterm-latest-cn-setup-x64.exe',
    mac_arm: 'https://static-download8.chaterm.net/chaterm-latest-cn-macos-arm64.dmg',
    mac_x64: 'https://static-download8.chaterm.net/chaterm-latest-cn-macos-x64.dmg',
    linux_deb: 'https://static-download8.chaterm.net/chaterm-latest-cn-linux-amd64.deb',
    linux_universal: 'https://static-download8.chaterm.net/chaterm-latest-cn-linux-x86_64.AppImage',
    ios: 'https://apps.apple.com/cn/app/chaterm/id6753935895',
    android: 'https://static-download8.chaterm.net/chaterm-latest-cn-android.apk',
  }

  function detectOS() {
    if (typeof window === 'undefined') return null
    
    const uaData = navigator.userAgentData
    const ua = (navigator.userAgent || '').toLowerCase()
    const platform = (navigator.platform || '').toLowerCase()

    if (uaData?.platform) {
      const p = uaData.platform.toLowerCase()
      if (p.includes('android')) return 'Android'
      if (p.includes('ios')) return 'iOS'
    }
    if (/android/i.test(ua)) return 'Android'

    const isIPad =
      platform === 'macintel' && typeof navigator.maxTouchPoints === 'number' && navigator.maxTouchPoints > 1
    if (/iphone|ipod|ipad/i.test(ua) || isIPad) return 'iOS'

    if (/windows|win32|win64|wow64/i.test(ua)) return 'Windows'

    if (!isIPad && (/mac|macintosh|darwin/i.test(ua) || platform.includes('mac'))) return 'macOS'

    if (/linux|x11/i.test(ua) && !/android/i.test(ua)) return 'Linux'

    return null
  }

  async function detectMacArch() {
    if (typeof window === 'undefined') return 'arm64'
    
    if (navigator.userAgentData?.getHighEntropyValues) {
      try {
        const { architecture } = await navigator.userAgentData.getHighEntropyValues(['architecture'])
        if (architecture === 'arm') return 'arm64'
        if (architecture) return 'x64'
      } catch {}
    }

    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes('arm') || ua.includes('aarch64')) return 'arm64'
    if (ua.includes('x86_64') || ua.includes('amd64') || ua.includes('intel')) return 'x64'

    return 'arm64'
  }

  async function updateSmartDownload() {
    if (typeof window === 'undefined') return
    
    const os = detectOS()
    const downloadBtn = document.getElementById('smart-download-btn')
    const downloadBtnText = document.getElementById('download-btn-text')

    if (!os) {
      if (downloadBtn) downloadBtn.style.display = 'none'
      return
    }

    let label = os
    let url = null

    if (os === 'Windows') {
      label = 'Windows'
      url = URLS.win
    } else if (os === 'macOS') {
      const arch = await detectMacArch()
      if (arch === 'x64') {
        label = 'macOS (Intel)'
        url = URLS.mac_x64
      } else {
        label = 'macOS (Apple Silicon)'
        url = URLS.mac_arm
      }
    } else if (os === 'Linux') {
      label = 'Linux'
      url = URLS.linux_deb
    } else if (os === 'iOS') {
      label = 'iOS'
      url = URLS.ios
    } else if (os === 'Android') {
      label = 'Android'
      url = URLS.android
    } else {
      label = os
      url = '/download/'
    }

    if (downloadBtn && url) {
      downloadBtn.href = url
      downloadBtn.target = '_blank'
      downloadBtn.style.display = 'inline-flex'
    }
    if (downloadBtnText) {
      downloadBtnText.textContent = '下载 ' + label + ' 版本'
    }
  }

  // Initialize when DOM is ready
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(updateSmartDownload, 100)
      })
    } else {
      setTimeout(updateSmartDownload, 100)
    }
  }
})()
</script>

<style>
.smart-download-container {
  text-align: left;
  margin: 1rem 0;
}

.smart-download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: #374151;
  color: #ffffff !important;
  border-radius: 6px;
  text-decoration: none !important;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.smart-download-btn:hover {
  background: #1f2937;
  color: #ffffff !important;
  transform: translateY(-1px);
}

.smart-download-btn span {
  color: #ffffff !important;
}

.download-icon {
  font-size: 1rem;
  line-height: 1;
  color: #ffffff !important;
}

@media (max-width: 768px) {
  .smart-download-btn {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
