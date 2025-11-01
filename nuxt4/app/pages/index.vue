<script setup lang="ts">
useSeoMeta({
  title: '홈 - Nuxt4 Performance Benchmark',
  description: 'Nuxt4 성능 비교 애플리케이션 홈 페이지',
});

const counter = useState('counter', () => 0);
const isModalOpen = useState('modal', () => false);

const openModal = () => {
  isModalOpen.value = true;
};
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <UCard :ui="{ root: 'bg-gray-50 h-fit ring-neutral-300 rounded-xl divide-y-0' }">
      <template #header>
        <h1 class="text-neutral-900 text-3xl font-bold">홈</h1>
      </template>
      <div class="space-y-4">
        <p class="text-neutral-900">
          현재 카운터 값: {{ counter }}
        </p>
        <div class="flex gap-4">
          <UButton
            color="neutral"
            size="lg"
            variant="outline"
            @click="openModal"
            >모달 열기</UButton
          >
        </div>
      </div>
    </UCard>
    <AModal v-model:modal-trigger="isModalOpen" />
  </div>
</template>
