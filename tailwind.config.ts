import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                glow: {
                    "0%, 100%": {
                        "text-shadow": "0 0 5px #fffF00, 0 0 5px #ff0000, 0 0 15px #ff6200, 0 0 20px #ff0000",
                    },
                    "50%": { "text-shadow": "0 0 10px #fffF00, 0 0 10px #ff0000, 0 0 30px #ff6200, 0 0 40px #ff0000" },
                },
            },
            animation: {
                "text-glow": "glow 1s ease-in-out infinite",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;
