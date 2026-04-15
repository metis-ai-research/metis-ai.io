module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0B10",
        paper: "#F5F4F0",
        horizon: "#55E1DD",
        deep: {
          start: "#1E3A8A",
          end: "#0891B2",
        },
        signal: "#BCF682",
        mist: "#8A8FA3",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "serif"],
        sans: ['"Geist Sans"', '"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(10%, -5%) scale(1.1)" },
          "66%": { transform: "translate(-8%, 5%) scale(0.95)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        charIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
        charIn: "charIn 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
