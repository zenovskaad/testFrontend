/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
