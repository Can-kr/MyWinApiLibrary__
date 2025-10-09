import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/MyWinApiLibrary__/',  // 리포지터리 이름과 일치
}); 