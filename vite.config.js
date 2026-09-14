import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        softwareDevelopment: resolve(__dirname, 'software-development.html'),
        webAppDevelopment: resolve(__dirname, 'web-app-development.html'),
        mobileSolutions: resolve(__dirname, 'mobile-solutions.html'),
        cloudMigration: resolve(__dirname, 'cloud-migration.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        termsOfService: resolve(__dirname, 'terms-of-service.html'),
      },
    },
  },
});
