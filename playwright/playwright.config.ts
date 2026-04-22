
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: true
  },
  reporter: [['html', { open: 'never' }]]
});
