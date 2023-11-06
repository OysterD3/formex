import * as fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { presetUno } from 'unocss';
import { presetForms } from '@julr/unocss-preset-forms';
import presetIcons from '@unocss/preset-icons';
import transformerDirectives from '@unocss/transformer-directives';

const icons = [
  'text',
  'input-method-line',
  'calculator-line',
  'dropdown-list',
  'checkbox-line',
  'radio-button-line',
  'time-line',
  'calendar-line',
  'upload-cloud-2-line',
  'code-view',
  'toggle-line',
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [presetUno(), presetForms(), presetIcons()],
      transformers: [transformerDirectives()],
      safelist: [...icons.map((i) => `i-ri-${i}`)],
    }),
  ],
  server: {
    port: 4000,
  },
});
