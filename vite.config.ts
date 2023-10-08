import { defineConfig } from 'vite';
import UnocssVitePlugin from 'unocss/vite';
import { presetUno } from 'unocss';

export default defineConfig({
  plugins: [
    UnocssVitePlugin({
      presets: [presetUno()],
    }),
  ],
});
