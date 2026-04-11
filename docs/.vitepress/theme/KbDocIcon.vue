<template>
    <span class="kb-doc-icon">
      <img :src="src" alt="" width="14" height="14" />
    </span>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useData } from 'vitepress'
  import docDark from '../../docs/image/doc-dark.svg?url'
  import docLight from '../../docs/image/doc-light.svg?url'
  
  const { isDark } = useData()
  
  /** 亮色背景用深色图标；暗色背景用浅色图标（与 VitePress 主题切换一致，非系统 prefers-color-scheme） */
  const src = computed(() => (isDark.value ? docLight : docDark))
  </script>
  
  <style scoped>
  .kb-doc-icon {
    display: inline-flex;
    width: 14px;
    height: 14px;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
  .kb-doc-icon img {
    display: block;
  }
  </style>
  