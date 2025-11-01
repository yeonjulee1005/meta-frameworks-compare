<script setup lang="ts">
const counter = useState('counter', () => 0);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};

const reset = () => {
  counter.value = 0;
};
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <UCard :ui="{ root: 'bg-gray-50 h-fit ring-neutral-300 rounded-xl divide-y-0' }">
      <template #header>
        <h1 class="text-neutral-900 text-3xl font-bold">카운터</h1>
      </template>
      <div class="space-y-4">
        <p class="text-neutral-900">
          현재 카운터 값: {{ counter }}
        </p>
        <div class="flex gap-4">
          <UButton color="primary" size="lg" variant="subtle" @click="increment">증가</UButton>
          <UButton color="warning" size="lg" variant="subtle" @click="decrement">감소</UButton>
          <UButton color="error" size="lg" variant="subtle" @click="reset">초기화</UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>
