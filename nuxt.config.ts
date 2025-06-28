// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#000',
      100: '#000',
      200: '#000',
      300: '#000',
      400: '#000',
      500: '#000',
      600: '#000',
      700: '#000',
      800: '#000',
      900: '#000',
      950: '#000'
    },
  },
})

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        dir: 'rtl'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/main.css', 'primeicons/primeicons.css'],
  modules: ['@primevue/nuxt-module', '@nuxt/image'],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
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
  devServer: {
    port: 4000
  },
})