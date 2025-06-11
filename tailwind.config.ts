import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        dourado: "#EEB23E",
        cinza_escuro: "#262728",
      },
      backgroundColor: {
        dourado: "#EEB23E",
        cinza_escuro: "#262728"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
