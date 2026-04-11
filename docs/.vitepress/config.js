import { defineConfig } from 'vitepress';
import { processData } from "@chunge16/vitepress-blogs-theme/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  // Default to dark theme; user can still switch via navbar toggle
  appearance: 'dark',
  title: "chaterm.cn",
  titleTemplate: false,
  description: "Chaterm — Open source AI native terminal and SRE Copilot",
  head: [
    ['meta', { name: 'description', content: 'Get years of SRE experience in minutes' }],
    ['meta', { property: 'og:title', content: 'Chaterm - Open source AI native terminal and SRE Copilot' }],
    ['meta', { property: 'og:description', content: 'Get years of SRE experience in minutes' }],
    ['link', { rel: 'icon', href: '/static/logo.ico', type: 'image/x-icon' }],
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      _hmt.push(['_setAutoPageview', false]);
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a4858821c45b9fca6af30f57defc4476";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'cn', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '博客', link: '/blog/' },
          { text: '文档', link: '/docs/' },
          { text: '下载', link: '/download/' }
        ],

        sidebar: [
          {
            text: '开始使用',
            items: [
              { text: '首页', link: '/docs/' },
              { text: '下载', link: '/docs/start/downloads/' },
              { text: '快速上手', link: '/docs/start/quickstart/' }
            ]
          },
          {
            text: '主机管理',
            items: [
              { text: '主机列表', link: '/docs/hosts/' },
              { text: '添加个人主机', link: '/docs/hosts/add-personal' },
              { text: '添加堡垒机', link: '/docs/hosts/add-bastion' },
              { text: '添加路由器', link: '/docs/hosts/add-router' },
              { text: '主机的导入/导出', link: '/docs/hosts/import-export' },
              { text: '连接主机', link: '/docs/hosts/connect' },
              { text: '编辑/克隆/删除主机', link: '/docs/hosts/edit-clone-delete' }
            ]
          },
          {
            text: '管理',
            items: [
              { text: '密钥管理', link: '/docs/manage/keys/' },
              { text: '文件管理', link: '/docs/manage/files/' },
              { text: '扩展管理', link: '/docs/manage/plugin/' }
            ]
          },
          {
            text: '终端',
            items: [
              { text: '终端管理', link: '/docs/terminal/manage/' },
              { text: '终端操作', link: '/docs/terminal/operations/' },
              { text: '命令补全', link: '/docs/terminal/autocomplete/' },
              { text: '快捷命令', link: '/docs/terminal/snippets/' },
              { text: 'Chat to AI', link: '/docs/terminal/chattoai/' }
            ]
          },
          {
            text: 'AI Agent',
            items: [
              { text: 'AI 对话', link: '/docs/ai/dialogs/' },
              { text: 'AI 设置', link: '/docs/ai/settings/' },
              { text: 'AI 偏好设置', link: '/docs/ai/preferences/' },
              { text: '模型列表', link: '/docs/ai/llms/' }
            ]
          },
          {
            text: '配置',
            items: [
              { text: '通用设置', link: '/docs/settings/general/' },
              { text: '终端设置', link: '/docs/settings/terminal/' },
              { text: '扩展设置', link: '/docs/settings/extensions/' },
              { text: '快捷键', link: '/docs/settings/shortcuts/' },
              { text: '规则', link: '/docs/settings/rules/' },
              { text: '计费概览', link: '/docs/settings/billing/' },
              { text: 'MCP 设置', link: '/docs/settings/mcp/' },
              { text: 'Skills 设置', link: '/docs/settings/skills/' },
              { text: '关于', link: '/docs/settings/about/' }
            ]
          },
          {
            text: 'MCP',
            items: [
              { text: 'MCP 使用指南', link: '/docs/mcp/usage/' },
              { text: 'MCP 最佳实践', link: '/docs/mcp/troubleshooting/' }
            ]
          },
          {
            text: 'Skills',
            items: [
              { text: 'Skill 使用指南', link: '/docs/skills/usage/' },
              { text: 'Skil 最佳实践', link: '/docs/skills/troubleshooting/' }
            ]
          },

          { text: '知识库', 
            items: [
              { text: '知识库使用指南', link: '/docs/knowledge-base/' },
            ]
          },
          {
            text: '用户',
            items: [
              { text: '个人信息', link: '/docs/user/profile/' },
              { text: '账号管理', link: '/docs/user/account/' },
              { text: '修改密码', link: '/docs/user/edit/' }
            ]
          },
          {
            text: '隐私',
            items: [
              { text: '隐私设置', link: '/docs/privacy/settings/' },
              { text: '隐私政策', link: '/docs/privacy/policy/' }
            ]
          },
          {
            text: '移动端文档',
            items: [
              { text: '快速上手', link: '/docs/mobile/quickstart/' },
              { text: '资产管理', link: '/docs/mobile/assets/' },
              { text: 'AI 会话', link: '/docs/mobile/ai-agent/' },
              { text: '个人中心', link: '/docs/mobile/profile/' },
              { text: '常见问题', link: '/docs/mobile/faq/' },
            ]
          },
          {
            text: '开发',
            items: [
              { text: '贡献指南', link: '/docs/contributing/' }
            ]
          }
        ],

        footer: {
          // message: '<a href="/service">用户协议</a> ｜ <a href="/privacy">隐私政策</a> ｜ <a href="https://www.gnu.org/licenses/gpl-3.0.html">许可证</a>',
          copyright: `Chaterm.cn 版权所有 © ${new Date().getFullYear()} <br> <a href="https://beian.miit.gov.cn/#/Integrated/index">沪ICP备18014493号-11</a>  <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602009365">沪公网安备31010602009365号</a>`
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/chaterm/chaterm' }
        ],

        blog: {
          title: '技术博客',
          description: '',
          defaultAuthor: 'Chaterm',
          categoryIcons: {
            article: 'i-[carbon/notebook]',
            tutorial: 'i-[carbon/book]',
            document: 'i-[carbon/document]',
          },
          tagIcons: {
            github: 'i-[carbon/logo-github]',
            vue: 'i-[logos/vue]',
            javascript: 'i-[logos/javascript]',
            'web development': 'i-[carbon/development]',
            html: 'i-[logos/html-5]',
            git: 'i-[logos/git-icon]',
            vite: 'i-[logos/vitejs]',
            locked: 'i-[twemoji/locked]',
            react: 'i-[logos/react]',
            blog: 'i-[carbon/blog]',
            comment: 'i-[carbon/add-comment]',
          },
          giscus: {
            repo: 'chunge16/vitepress-blogs-theme-template',
            repoId: 'R_kgDOKz3GKg',
            category: 'General',
            categoryId: 'DIC_kwDOKz3GKs4CbySw',
            mapping: 'pathname', // default: `pathname`
            inputPosition: 'top', // default: `top`
            lang: 'zh-CN', // default: `zh-CN`
            lightTheme: 'light', // 默认: `light`
            darkTheme: 'transparent_dark', // 默认: `transparent_dark`
            defaultEnable: true, // 默认： true
          }
        },
      },
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme']
    },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
})
