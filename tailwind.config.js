module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FF8D00",
          200: "#ce2329",
          text: "#D7D7D7",
        },
      },

      animation: {
        shine: "shine 2s infinite",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};
