<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'ko',
  },
});

useSeoMeta({
  title: 'Nuxt4 Performance Benchmark',
  description:
    'Nuxt4 프레임워크 성능 비교 애플리케이션 - Next16과의 벤치마크 테스트',
  ogTitle: 'Nuxt4 Performance Benchmark',
  ogDescription:
    'Nuxt4 프레임워크 성능 비교 애플리케이션 - Next16과의 벤치마크 테스트',
  ogType: 'website',
});
</script>

<template>
  <UApp :color-mode="{ preference: 'light', fallback: 'light' }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
