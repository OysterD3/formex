import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
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

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      outDir: 'dist',
    }),
    UnoCSS({
      presets: [presetUno(), presetForms(), presetIcons()],
      transformers: [transformerDirectives()],
      safelist: [...icons.map((i) => `i-ri-${i}`)],
    }),
  ],
});
