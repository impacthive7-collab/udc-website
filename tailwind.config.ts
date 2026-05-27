import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a4591",
        accent: "#0066ff",
        dark: "#0a0f1e",
        card: "#0d1425",
        border: "#1e2d4a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Cairo", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0a0f1e 0%, #0d1f40 50%, #1a4591 100%)",
        "card-gradient": "linear-gradient(135deg, #0d1425 0%, #0f1d35 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(26, 69, 145, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 102, 255, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
