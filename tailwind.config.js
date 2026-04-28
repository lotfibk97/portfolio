/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "SF Pro Display",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        // visionOS charcoal palette
        background: "#0c0d10",
        foreground: "#f5f5f7",
        card: "#1a1c22",
        popover: "#20232b",
        secondary: "#20232b",
        muted: "#16181d",
        ink: {
          950: "#06070a",
          900: "#0c0d10",
          800: "#16181d",
          700: "#1a1c22",
          600: "#20232b",
        },
        accent: {
          DEFAULT: "#5e8eff",
          soft: "#93b3ff",
          glow: "#c2d4ff",
          deep: "#3b6bd6",
          bright: "#7099ff",
        },
        gold: {
          DEFAULT: "#f5c95a",
          soft: "#ffd97a",
        },
        good: "#34c759",
        warn: "#ffb340",
        bad: "#ff6961",
      },
      backdropBlur: {
        xs: "4px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
      },
      boxShadow: {
        glass:
          "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.04), 0 0 0 0.5px rgba(255,255,255,0.05), 0 24px 60px -12px rgba(0,0,0,0.55), 0 12px 28px -8px rgba(0,0,0,0.4)",
        "glass-hover":
          "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(255,255,255,0.05), 0 0 0 0.5px rgba(255,255,255,0.07), 0 36px 80px -12px rgba(0,0,0,0.65), 0 18px 40px -8px rgba(0,0,0,0.5)",
        glow: "0 0 60px rgba(94,142,255,0.5), 0 0 24px rgba(94,142,255,0.35)",
        "glow-soft":
          "0 0 40px rgba(94,142,255,0.3), 0 0 16px rgba(94,142,255,0.2)",
        rim: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.3)",
      },
      animation: {
        "blob-slow": "blob 24s ease-in-out infinite",
        "blob-fast": "blob 18s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "gradient-x": "gradientX 12s ease infinite",
      },
      keyframes: {
        blob: {
          "0%,100%": {
            transform: "translate(0,0) scale(1)",
          },
          "33%": {
            transform: "translate(40px,-50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-30px,30px) scale(0.95)",
          },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientX: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
