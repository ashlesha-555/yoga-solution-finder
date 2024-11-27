module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          50: "#f5f5dc",
          100: "#ede9d1",
          200: "#e0dcc5",
          300: "#d0c8aa",
          400: "#bfb48f",
        },
        brown: {
          600: "#8b4513",
          700: "#6a2c0b",
          800: "#4d1f08",
        },
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
