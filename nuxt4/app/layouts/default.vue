<script setup lang="ts">
const navLinks = [
  { label: '홈', to: '/' },
  { label: '데이터', to: '/data' },
  { label: '카운터', to: '/counter' },
];
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <UCard
        :ui="{
          root: 'bg-gray-50 h-fit ring-neutral-300 rounded-xl',
          header: 'p-0 sm:p-0',
        }"
        class="mb-4"
      >
        <template #header>
          <div class="flex items-center justify-between p-4">
            <span class="text-neutral-900 text-xl font-bold">Nuxt4</span>
            <div class="flex gap-4">
              <UButton
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                size="lg"
                color="primary"
                :variant="$route.path === link.to ? 'outline' : 'ghost'"
                :ui="{ base: 'text-neutral-900' }"
              >
                {{ link.label }}
              </UButton>
            </div>
          </div>
        </template>
      </UCard>
      <main>
        <slot />
      </main>
    </div>
    <div class="absolute bottom-4 right-4 flex items-center gap-2 divide-x-2">
      <NuxtLink class="text-neutral-900 text-lg font-bold px-2" to="https://nuxt.com/" external target="_blank">Nuxt4 바로가기</NuxtLink>
      <NuxtLink class="text-neutral-900 text-lg font-bold" to="https://github.com/yeonjulee1005/" external target="_blank">Dewdew Github</NuxtLink>
    </div>
  </div>
</template>
