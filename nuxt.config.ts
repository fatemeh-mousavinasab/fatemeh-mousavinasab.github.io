import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      title: 'Fatemehsadat Mousavinasab, Ph.D.',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap'
        }
      ]
    }
  },
  css: [
    '@quasar/extras/material-icons/material-icons.css',
    '@quasar/extras/fontawesome-v7/fontawesome-v7.css',
    'quasar/src/css/index.sass',
    '~/assets/css/theme.scss'
  ],
  build: { transpile: ['quasar'] },
  vite: {
    vue: { template: { transformAssetUrls } },
    plugins: [quasar({ sassVariables: false })]
  }
})
