# Chaterm.cn 官网

## 安装

## 前置准备

Node.js 18 及以上版本。
通过命令行界面 (CLI) 访问 VitePress 的终端。
支持 Markdown 语法的编辑器。
推荐 VSCode 及其官方 Vue 扩展。

```
npm add -D vitepress
```

## 安装初始化

```
npx vitepress init
```

接下来将需要回答几个简单的问题：

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run pnpm run docs:dev and start writing.
```

## 启动并运行

```
npm run docs:dev
```

## 构建与测试

可以运行以下命令来构建文档：

```
npm run docs:build
```

构建文档后，通过运行以下命令可以在本地预览它：

```
npm run docs:preview
```

## 安装Blog主题

### 前提条件

Node.js 版本 16 以上.
通过命令行界面 (CLI) 访问 VitePress 的终端.
支持 Markdown 语法的文本编辑器。
推荐使用 VSCode, 以及Vue官方插件 volar.
Blog 可以独立使用，也可以安装到现有项目中。

- 增加了文章置顶功能

```
npm install -D github:jarvishappy/vitepress-blogs-theme
```
