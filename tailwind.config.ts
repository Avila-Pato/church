import { Alegreya, Dancing_Script } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    backgroundImage: {
      hero: "url('/img/fondo.jpg')",
    },
    screens: {
      xs: "400px",
      sm: "640px", // Pequeño (small)
      md: "768px", // Mediano (medium)
      lg: "1024px", // Grande (large) - Añadido aquí
      xl: "1280px", // Extra grande (extra large)
      "2xl": "1536px", // Doble extra grande
      "3xl": "1680px",
      "4xl": "2200px",
    },
    fontFamily: {
      Poppins: "var(--font-poppins)", // Usa la variable definida en layout.tsx
      Dancing_Script: "var(--font-dancingScript)",
      Alegreya: "var(--font-alegreya)"
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;