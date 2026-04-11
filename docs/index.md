---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Chaterm - Open source AI native terminal and SRE Copilot
pageClass: custom-home-page

hero:
  name: 开源 AI 终端和 SRE 副驾驶
  text:
  tagline: 无需记忆命令，使用自然语言管理服务器
  # image:
  #   src: /static/logo.png
  #   alt: Chaterm
  actions:
    - theme: brand
      text: 下载
      link: /download/
    - theme: alt
      text: 查看 Github 代码
      link: https://github.com/chaterm/Chaterm
---

<style>



  /* Hero Center Alignment */
  .VPHero .container {
    text-align: center;
  }

  .VPHero .text,
  .VPHero .tagline {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .VPHero .name {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(45deg, #000000 0%, #4070FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .dark .VPHero .name {
    background: linear-gradient(45deg, #FFFFFF 0%, #91B4FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .VPHero .actions {
    justify-content: center;
  }

  @media (min-width: 960px) {
    /* VitePress 默认把 hero 标题限制在 576px，长标题会提前换行 */
    .VPHero.has-image .main {
      max-width: 760px;
    }

    .VPHero .name,
    .VPHero .text,
    .VPHero .tagline {
      max-width: 760px;
    }
  }

  .action .brand {
    background: linear-gradient(90deg, #91B4FF 0%, #4070FF 100%);
    border: none;
  }

  /* 默认显示亮色图 */
  .img-dark { display: none; border-radius: 1rem;}
  .img-light { border-radius: 1rem; }
  .dark .img-light { display: none; }
  .dark .img-dark  { display: block; }


  /* Global Layout */
  .container {
    max-width: 1280px;
    box-sizing: border-box;
  }

  /* Grid Layouts */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }
  /* Feature Cards */
  .feature-card {
    transition: all 0.3s ease;
    height: 100%;
    text-align: center;
  }

  .feature-card h3 {
      margin-top: 1rem;
  }

  .feature-card img {
      width: 100%;
      height: auto;
  }

  .safe-card {
    background: linear-gradient(90deg, #FEF8FE 0%, #FAF0FF 100%);;
    border-radius: 16px;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 1.5rem;
    height: 100%;
    box-sizing: border-box;
  }

  .dark .safe-card {
    background: #0A0F28;
  }

  .safe-card-content {
    flex: 1;
    text-align: left;
    height:100%;
  }

  .safe-card h3 {
    margin: 0 0 0.8rem 0;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .safe-card p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--vp-c-text-2);
    line-height: 1.6;
  }

  .safe-card-icon-box {
    flex-shrink: 0;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .safe-card-icon-box img {
    width: 60px;
    height: 60px;
    opacity: 0.9;
    color: #DCB4FF;
  }

  .text-description {
    color: var(--vp-c-text-2);
    font-size: 0.9rem;
  }

  .card-icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: var(--vp-c-bg);
    width: 64px;
    height: 64px;
    line-height: 64px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  /* Section Styles */
  .section-title {
    border-top: 0 !important;
    padding: 0.2em 0;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin: 4rem 0 1rem;
    color: #FFFFFF;
    line-height: 60px;
    background: linear-gradient(45deg, #000000 0%, #4070FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .dark .section-title {
    background: linear-gradient(45deg, #FFFFFF 0%, #91B4FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-desc {
    text-align: center;
    color: var(--vp-c-text-2);
    font-size: 1.1rem;
    margin: 0 auto 3rem;
  }

  /* Agent Section */
  .agent-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 6rem 0;
  }
  .agent-content h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  .agent-content p {
    font-size: 1.1rem;
    color: var(--vp-c-text-2);
    margin-bottom: 2rem;
  }
  .agent-media {
    border-radius: 12px;
    overflow: hidden;
  }

  .agent-media video {
    width: 100%;
    height: auto;
    display: block;
  }

  .env-badges {
    position: relative;
    left: 50%;
    /* bottom: 14px; */
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 12px;
    z-index: 3;
    margin-bottom: 3rem;
  }
  .env-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 12px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.92) !important;
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    white-space: nowrap;
    text-decoration: none !important;
  }
  .env-badge svg {
    width: 16px;
    height: 16px;
    display: block;
    opacity: 0.95;
    flex: 0 0 auto;
  }

  @media (max-width: 768px) {
    .agent-video::after { height: 64px; }
    .env-badges { gap: 8px; }
    .env-badge { padding: 4px 10px; font-size: 11px; }
    .agent-section {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
      margin: 3rem 0;
    }
  }

  /* Pricing Cards */
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 3rem auto;
  }

  @media (max-width: 960px) {
    .pricing-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  /* Pricing Card Base Styles (Light Mode Default) */
  .pricing-card {
    background: #F8FAFC;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.3s ease;
    box-sizing: border-box;
    color: var(--vp-c-text-1, #1e293b);
  }

  /* Dark Mode Styles */
  .dark .pricing-card {
    background: #0B1221;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
  }

  .pricing-card:hover {
    border-color: #3b82f6;
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    background: linear-gradient(90deg, #F5FAFF 0%, #E1EBFF 100%);
  }
  .dark .pricing-card:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
    background: linear-gradient(90deg, #191E5A 0%, #091128 100%);
  }

  .pricing-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #3B82F6; 
  }

  .dark .pricing-title {
    color: #91B4FF;
  }

  .pricing-price {
    font-size: 1.3em;
    font-weight: 600;
    margin: 0.5rem 0;
    display: flex;
    align-items: baseline;
    color: var(--vp-c-text-1, #0f172a);
    line-height: 1.2;
  }
  .dark .pricing-price {
    color: #fff;
  }

  .pricing-price span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--vp-c-text-3, #94A3B8);
    margin-left: 6px;
  }
  
  .pricing-subtext {
    font-size: 0.875rem;
    color: var(--vp-c-text-3, #94A3B8);
    margin-bottom: 1.5rem;
    height: 1.25rem;
  }

  .pricing-desc {
    color: var(--vp-c-text-2, #475569);
    margin-bottom: 2rem;
    font-size: 0.95rem;
    line-height: 1.6;
    min-height: 3rem;
  }
  .dark .pricing-desc {
    color: #94A3B8;
  }

  .price-btn {
    display: block;
    text-align: center;
    padding: 0.85rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    text-decoration: none !important;
    transition: all 0.3s ease;
    margin-bottom: 2rem;
    font-size: 1rem;
    cursor: pointer;
    color: #FFFFFF !important;

  }

  .dart .price-btn{
    font-weight: 600;
    font-size: 18px;
  }
  .btn-outline {
    display: block;
    text-align: center;
    padding: 0.85rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    text-decoration: none !important;
    transition: all 0.3s ease;
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-size: 1rem;
    cursor: pointer;
    background: transparent;
    border: 1px solid #96B8FF;
    color: #000;
  }

  .dark .btn-outline {
    background: rgba(255, 255, 255, 0.1);
    color: #fff !important;
  }

  .btn-primary {
    background: linear-gradient(90deg, #91B4FF 0%, #4070FF 100%);
    border: none;
    color: #fff;
    position: relative;
    z-index: 1;
    overflow: hidden;
    margin-top: 2rem;
  }
  
  /* Gradient Hover Effect */
  .btn-primary::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(90deg, #91B4FF 0%, ##4070FF 100%);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  .btn-primary:hover::before {
    opacity: 1;
  }
  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }


  .pricing-features {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
  }

  .pricing-features li {
    margin-bottom: 0.85rem;
    display: flex;
    align-items: flex-start;
    color: var(--vp-c-text-2, #475569);
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .dark .pricing-features li {
    color: #CBD5E1;
  }

  .pricing-features li::before {
    content: "✓";
    color: #3B82F6;
    margin-right: 12px;
    font-weight: bold;
    flex-shrink: 0;
  }

  @media (min-width: 1900px) {
    .container {
      margin-top: 3rem;
      /* max-width: 1440px !important; */
    }
/* 
    .section-title, .agent-content h2 {
        font-size: 2.5rem !important;
    }
    .section-desc, .agent-content p {
        font-size: 1.5rem;
    }

    .feature-card h3, .safe-card h3 {
        font-size: 1.8rem;
    }
    .text-description, .safe-card p {
        font-size: 1.2rem;
    }
    
    .pricing-title {
        font-size: 2.2rem;
    }
    .pricing-price {
        font-size: 2em;
    }
    .pricing-subtext {
        font-size: 1.1rem;
    }
    .pricing-desc {
        font-size: 1.2rem;
    }
    .pricing-features li {
        font-size: 1.2rem;
    }
    .price-btn, .btn-outline {
        font-size: 1.2rem;
        padding: 1rem 2rem;
    } */
  }

  /* ============ Mobile Responsive Enhancements ============ */
  @media (max-width: 1024px) {
    /* .container { padding: 0 20px; } */
    .section-title { font-size: 2.1rem; margin: 3rem 0 0.8rem; }
  }

  @media (max-width: 768px) {
    .container { padding: 0 }

    .section-title {
      font-size: 1.85rem;
      margin: 2.5rem 0 0.6rem;
      line-height: 1.2;
    }
    .section-desc {
      font-size: 1rem;
      margin: 0 auto 2rem;
      padding: 0 6px;
    }

    .card-grid {
      gap: 1.2rem;
      margin: 1.5rem 0;
    }

    /* 终端示例：避免长命令撑爆 */
    .agent-media > div {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* .feature-card {
      padding: 1.4rem;
      border-radius: 12px;
    } */
    .card-icon {
      width: 56px;
      height: 56px;
      line-height: 56px;
      font-size: 2rem;
      margin-bottom: 1rem;
    }


    .agent-content h2 { font-size: 1.7rem; border-top: 0;}
    .agent-content p {
      font-size: 1rem;
      margin-bottom: 1.2rem;
    }

    .pricing-card {
      padding: 1.6rem;
      border-radius: 14px;
    }
    .pricing-desc {
      margin-bottom: 1.2rem;
      font-size: 0.98rem;
      line-height: 1.6;
    }
    .pricing-features li {
      font-size: 0.98rem;
      line-height: 1.5;
    }
    .price-btn { padding: 0.9rem 1rem; }

    /* hover 在移动端意义不大：避免点击抖动 */
    .feature-card:hover { transform: none; }
    .pricing-card:hover .price-btn { transform: none; }

    /* ============ ✅ Pricing Mobile Horizontal Swipe (1 card per view) ============ */
    .pricing-grid {
      display: flex;
      flex-wrap: nowrap;
      gap: 14px;

      overflow-x: auto;
      -webkit-overflow-scrolling: touch;

      scroll-snap-type: x mandatory;

      padding: 4px 16px 12px;
      margin: 1.5rem -16px 2rem;

      scrollbar-width: none; /* Firefox */
    }
    .pricing-grid::-webkit-scrollbar { display: none; } /* Chrome/Safari */

    .pricing-card {
      flex: 0 0 calc(100% - 8px);
      scroll-snap-align: start;
    }
  }

  @media (max-width: 360px) {
    .section-title { font-size: 1.65rem; }
    .agent-content h2 { font-size: 1.55rem; border-top: 0; }
  }
</style>

<!-- Video / Agent Section -->
<div class="container">
  <br>
  <center>
    <div class="agent-media ">
      <div class="env-badges" aria-hidden="true">
        <a class="env-badge"  href="/download/" >
          <img src="/images/macOS.svg">
          <span>macOS</span>
        </a>
        <a class="env-badge"  href="/download/" >
           <img src="/images/windows.svg">
          <span>Windows</span>
        </a>
        <a class="env-badge"  href="/download/" >
           <img src="/images/linux.svg">
          <span>Linux</span>
        </a>
        <a class="env-badge"  href="https://apps.apple.com/cn/app/chaterm/id6753935895" >
           <img src="/images/apple.svg">
          <span>iOS</span>
        </a>
        <a class="env-badge"  href="/download/" >
           <img src="/images/android.svg">
          <span>Android</span>
        </a>
      </div>
      <!-- <video
        class="rounded-xl"
        controls
        preload="metadata"
        playsinline
      >
        <source src="/static/demo.mp4" type="video/mp4" />
      </video> -->
      <img class="img-light" src="/images/hero-dark.webp" alt="Global Syntax Highlight" >
      <img class="img-dark" src="/images/hero-dark.webp" alt="Global Syntax Highlight" >
    </div>
  </center>

  <FeatureTabs />

</div>

<!-- Efficiency Section -->
<h2 class="section-title">重新定义终端运维效率</h2>
<div class="container">
  <div class="card-grid">
    <div class="feature-card ">
      <img class="img-light " src="/images/highlight-light.webp" alt="快捷命令" >
      <img class="img-dark"  src="/images/highlight-dark.webp" alt="快捷命令" >
      <h3>全局语法高亮</h3>
      <p class="text-description">基于用户个人配置的全局语法高亮，仅需设置一次，即可任意主机跟随</p>
    </div>
    <div class="feature-card">
        <img class="img-light" src="/images/vim-light.webp" alt="可视化VIM" >
        <img class="img-dark" src="/images/vim-dark.webp" alt="可视化VIM" >
      <h3>可视化 VIM</h3>
      <p class="text-description">无需记忆复杂的VIM指令。终端上的Sublime Text，支持鼠标操作和直观的文本编辑体验。</p>
    </div>
    <div class="feature-card">
        <img class="img-light" src="/images/zero-trust-light-zh.webp" alt="零信任认证" >
        <img class="img-dark" src="/images/zero-trust-dark-zh.webp" alt="零信任认证" >
      <h3>零信任认证</h3>
      <p class="text-description">支持企业级零信任安全接入，无需定期更新密码，实现按需授权与动态访问控制。</p>
    </div>
  </div>
</div>

<div class="container">
  <div class="card-grid">
    <div class="feature-card">
        <img class="img-light"  src="/images/shortcut-command-light.webp" alt="快捷命令" >
        <img class="img-dark" src="/images/shortcut-command-dark.webp" alt="快捷命令" >
      <h3>快捷命令/别名</h3>
      <p class="text-description">快速复用高频命令。可配置的全局Alias，给复杂的命令和批处理脚本设置一个简单的别名。</p>
    </div>
    <div class="feature-card">
        <img class="img-light" src="/images/sso-light.webp" alt="统一权限管理" >
        <img class="img-dark" src="/images/sso-dark.webp" alt="统一权限管理" >
      <h3>统一权限管理</h3>
      <p class="text-description">可视化的权限分配与回收。Github账号或SAML单点登录，统一管理不同部门的数字资产。</p>
    </div>
    <div class="feature-card">
        <img class="img-light" src="/images/mcp-light.webp" alt="MCP协议支持" >
        <img class="img-dark" src="/images/mcp-dark.webp" alt="MCP协议支持" >
      <h3>MCP 协议支持</h3>
      <p class="text-description">可低成本接入 Notion、GitHub 等企业知识库，实现 AI 技能的无限扩展。</p>
    </div>
  </div>
</div>

<!-- Enterprise Security -->
<h2 class="section-title">企业级安全</h2>
<p class="section-desc">我们致力于通过全面的安全解决方案保护您的数据</p>
<div class="container">
  <div class="card-grid">
    <div class="safe-card">
      <div class="safe-card-content">
        <h3>数据加密</h3>
        <p>数据传输和存储均采用端到端的加密技术</p>
      </div>
      <div class="safe-card-icon-box">
        <img class="img-light" src="/images/lock-fill-light.svg" alt="数据加密">
        <img class="img-dark" src="/images/lock-fill-dark.svg" alt="数据加密">
      </div>
    </div>
    
  <div class="safe-card">
      <div class="safe-card-content">
        <h3>访问控制</h3>
        <p>细粒度的权限管理和基于角色的访问</p>
      </div>
      <div class="safe-card-icon-box">
        <img class="img-light" src="/images/permission-management-light.svg" alt="访问控制">
        <img class="img-dark" src="/images/permission-access-dark.svg" alt="访问控制">
      </div>
    </div>
    
  <div class="safe-card">
      <div class="safe-card-content">
        <h3>安全审计</h3>
        <p>综合日志记录和操作审计监控系统</p>
      </div>
      <div class="safe-card-icon-box">
        <img class="img-light" src="/images/security-monitor-light.svg" alt="安全审计">
        <img class="img-dark" src="/images/security-monitor-dark.svg" alt="安全审计">
      </div>
    </div>
  </div>
</div>

<h2 class="section-title">收费计划</h2>
<div class="container">
  <PricingToggle />

</div>
