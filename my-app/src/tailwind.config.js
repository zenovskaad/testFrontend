import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
})

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                'button-blink': {
                    '0%, 100%': {
                        backgroundColor: '#FDB056',
                        boxShadow: '0 0 20px rgba(253,176,86,0.8)',
                        transform: 'scale(1)'
                    },
                    '50%': {
                        backgroundColor: '#ffcc70',
                        boxShadow: '0 0 30px rgba(253,176,86,1)',
                        transform: 'scale(1.03)'
                    },
                },
            },
            animation: {
                'button-blink': 'button-blink 1s infinite ease-in-out',
            },
        },
    },
    plugins: [],
}


