import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                project1: resolve(__dirname, 'project-1.html'),
                project2: resolve(__dirname, 'project-2.html'),
                project3: resolve(__dirname, 'project-3.html'),
                project4: resolve(__dirname, 'project-4.html'),
                assets: resolve(__dirname, 'assets'),

            }
        }
    },
});