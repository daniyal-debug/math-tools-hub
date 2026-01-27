/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    olive: '#9ca83c',
                    purple: '#b8a8d4',
                    coral: '#ff6b4a',
                    mint: '#c8e6c9',
                    blue: '#4a90e2',
                    teal: '#26a69a',
                    pink: '#ec407a',
                    indigo: '#5c6bc0',
                    green: '#66bb6a',
                    yellow: '#ffca28',
                    orange: '#ff7043',
                    cyan: '#26c6da',
                    red: '#ef5350',
                    amber: '#ffa726',
                    violet: '#ab47bc'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif']
            },
            backdropBlur: {
                xs: '2px'
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                'glow': '0 0 20px rgba(255, 255, 255, 0.1)'
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["dark", "night", "luxury"],
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: false,
    },
}
