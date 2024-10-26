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
                project5: resolve(__dirname, 'project-5.html'),
                project6: resolve(__dirname, 'project-6.html'),
                project7: resolve(__dirname, 'project-7.html'),
                index: resolve(__dirname, 'index.js'),


            }
        }
    },
});