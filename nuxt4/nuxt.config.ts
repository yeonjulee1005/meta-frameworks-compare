// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
    prerender: {
      crawlLinks: false,
    },
    experimental: {
      wasm: true,
    },
    storage: {
    },
    logLevel: process.env.NODE_ENV === 'production' ? 0 : 4,
    // 동시 요청 처리 최적화
    routeRules: {
      '/api/**': {
        cors: true,
        headers: { 'cache-control': 's-maxage=0' },
      },
    },
    // 서버 성능 최적화
    timing: false,
  },
  build: {
    analyze: false,
    transpile: [],
  },
  experimental: {
    payloadExtraction: false,
    viewTransition: false,
    typedPages: false,
  },
  ssr: true,
  vue: {
    compilerOptions: {
      isCustomElement: () => false,
    },
    propsDestructure: true,
  },
  typescript: {
    typeCheck: false,
  },
});
