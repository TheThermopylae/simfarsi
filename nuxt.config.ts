// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        dir: 'rtl'
      }
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/main.css'],
  modules: ['@primevue/nuxt-module', '@nuxt/image'],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'none',
          cssLayer: false,
        },
      }
    }
  },
  image: {
    quality: 50
  },
    runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000/',
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    },
  },
})