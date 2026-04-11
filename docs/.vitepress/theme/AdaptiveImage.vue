<template>
    <img 
      :src="currentSrc" 
      :alt="alt"
      class="adaptive-image"
    />
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useData } from 'vitepress'
  
  const props = defineProps({
    light: {
      type: String,
      required: true
    },
    dark: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  })
  
  const { isDark } = useData()
  
  const currentSrc = computed(() => {
    return isDark.value ? props.dark : props.light
  })
  </script>
  
  <style scoped>
  .adaptive-image {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    transition: opacity 0.3s ease;
  }
  </style>
  