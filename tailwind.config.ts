import type {Config} from "tailwindcss";

const plugin = require('tailwindcss/plugin');

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            lineHeight: {
                'custom': '1.25rem',
                'customTwo': '0.8rem',
            },
            fontSize: {
                'custom': '0.75rem',
                'customThree': '0.69rem',
                'customFour': '0.6rem',
            },
            colors: {
                customGrey: "#F0F0F0",
                customGreen: "#0AA931",
                customBlue: "#2D95E4",
                customGreyTwo: "#909090",
                customGreyThree: "#BABABA",
                customGreyFour: "#C6C6C6",
                customGreyFive: "#737373",
                customGreySix: "#B5B5B5",
                customGreySeven: "#D9D9D9",
                customGreyEight:"#E7E7E7",
                backgroundImage: {
                    'custom-gradient': 'linear-gradient(107.07deg, #07B0F3 0.56%, #C1EEFF 132.85%)',
                    'radial-custom': 'radial-gradient(circle closest-corner at center center, rgba(193, 238, 255, 1) 0%, rgba(255, 255, 255, 1) 41%)',
                    "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                    "gradient-conic":
                        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [

    ]
} satisfies Config

export default config