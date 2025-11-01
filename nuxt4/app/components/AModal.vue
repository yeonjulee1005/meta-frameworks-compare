<script setup lang="ts">
const modalTrigger = defineModel('modalTrigger', {
  type: Boolean,
  default: false,
})

const counter = useState('counter', () => 0);

const close = () => {
  modalTrigger.value = false;
};
</script>

<template>
  <UModal v-model:open="modalTrigger" overlay :ui="{ content: 'divide-y-0', header: 'bg-gray-50', body: 'bg-gray-50', footer: 'bg-gray-50' }">
    <template #header>
      <div class="w-full flex items-center justify-between">
        <h3 class="text-neutral-900 text-xl font-bold">모달 제목</h3>
        <UButton
          icon="i-heroicons-x-mark-20-solid"
          color="error"
          size="xl"
          variant="ghost"
          @click="close"
        />
      </div>
    </template>
    <template #body>
      <div class="space-y-4">
        <p class="text-neutral-900">이것은 모달 컴포넌트입니다.</p>
        <p class="text-neutral-900">
          현재 카운터 값: {{ counter }}
        </p>
      </div>
    </template>
    <template #footer>
      <div class="w-full flex justify-end">
        <UButton color="neutral" size="lg" variant="outline" @click="close">닫기</UButton>
      </div>
    </template>
  </UModal>
</template>
