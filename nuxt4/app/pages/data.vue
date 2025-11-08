<script setup lang="ts">
useSeoMeta({
  title: '데이터 - Nuxt4 Performance Benchmark',
  description: '서버 데이터를 가져오는 Nuxt4 페이지',
});

const counter = useState('counter', () => 0);

// SSR에서 HTTP 요청을 명시적으로 하도록 설정
const { data, pending, error, refresh } = await useFetch('/api/data', {
  server: true,
});
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <UCard :ui="{ root: 'bg-gray-50 h-fit ring-neutral-300 rounded-xl divide-y-0' }">
      <template #header>
        <h1 class="text-neutral-900 text-3xl font-bold">데이터</h1>
      </template>
      <div class="space-y-4">
        <p class="text-neutral-900">
          현재 카운터 값: {{ counter }}
        </p>
        <div v-if="pending" class="text-neutral-900">데이터를 불러오는 중...</div>
        <div v-else-if="error" class="text-red-500">
          에러: {{ error.message }}
        </div>
        <div v-else class="space-y-2">
          <h2 class="text-neutral-900 text-xl font-bold">서버 데이터:</h2>
          <pre class="bg-muted p-4 rounded-md overflow-auto">{{
            JSON.stringify(data, null, 2)
          }}</pre>
        </div>
        <UButton color="neutral" size="lg" variant="outline" :loading="pending" @click="refresh()">새로고침</UButton>
      </div>
    </UCard>
  </div>
</template>
