import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        softwareDevelopment: resolve(__dirname, 'software-development.html'),
        webAppDevelopment: resolve(__dirname, 'web-app-development.html'),
        mobileSolutions: resolve(__dirname, 'mobile-solutions.html'),
        ecommerceSolutions: resolve(__dirname, 'ecommerce-solutions.html'),
        aiAutomation: resolve(__dirname, 'ai-automation.html'),
        cloudMigration: resolve(__dirname, 'cloud-migration.html'),
        uiUxDesign: resolve(__dirname, 'ui-ux-design.html'),
        digitalMarketing: resolve(__dirname, 'digital-marketing.html'),
        influencerMarketing: resolve(__dirname, 'influencer-marketing.html'),
        maintenanceSupport: resolve(__dirname, 'maintenance-support.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        termsOfService: resolve(__dirname, 'terms-of-service.html'),
      },
    },
  },
});
