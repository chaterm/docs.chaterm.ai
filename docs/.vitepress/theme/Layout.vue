<script setup>
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-image>
      <video controls="controls" src="../../static/demo.mp4" />
    </template>
  </DefaultTheme.Layout>
</template>
