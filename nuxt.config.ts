import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      title: 'Fatemehsadat Mousavinasab, Ph.D.',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  css: [
    '@quasar/extras/material-icons/material-icons.css',
    'quasar/src/css/index.sass'
  ],
  build: { transpile: ['quasar'] },
  vite: {
    vue: { template: { transformAssetUrls } },
    plugins: [quasar({ sassVariables: false })]
  }
})
