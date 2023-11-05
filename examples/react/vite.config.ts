import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { presetUno } from 'unocss';
import { presetForms } from '@julr/unocss-preset-forms';
import transformerDirectives from '@unocss/transformer-directives';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [presetUno(), presetForms()],
      transformers: [transformerDirectives()],
    }),
  ],
  server: {
    port: 4000,
  },
});
