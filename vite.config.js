// vite.config.js
import { defineConfig } from 'vitest/config';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),reactRefresh()],
  test: {
    browser: {
      provider :"playwright",
      providerOptions : {
        launch: {
          devtools: true,
        }
      }
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true,
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: 'test-setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
  
});