// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#001A46',
      100: '#001A46',
      200: '#001A46',
      300: '#001A46',
      400: '#001A46',
      500: '#001A46',
      600: '#001A46',
      700: '#001A46',
      800: '#001A46',
      900: '#001A46',
      950: '#001A46'
    },
    mySelect: {
      optionSelectedBackground: "black"
    },
    components: {
      select: {
        optionSelectedBackground: "black",
        optionSelectedFocusBackground: 'black'
      }
    }
  },
})

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
})