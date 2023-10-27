import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { presetUno } from 'unocss';
import { presetForms } from '@julr/unocss-preset-forms';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [presetUno(), presetForms()],
    }),
  ],
  server: {
    port: 4000,
  },
});
