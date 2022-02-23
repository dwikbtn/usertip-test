module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A85FF",
        secondary: "#CABDFF",
        black: "#000000",
        neutral: {
          100: "#FCFCFC",
          200: "#F4F4F4",
          300: "#EFEFEF",
          400: "#6F767E",
          600: "#272B30",
          700: "#1A1D1F",
        },
        gray: {
          200: "#4F4F4F",
        },
      },
      spacing: {
        95: "23.438rem",
      },
      lineHeight: {
        12: "3rem",
      },
      fontSize: {
        tiny: ".938rem",
      },
      letterSpacing: {
        tightest: "-.01em",
        tighter: "-.03em",
      },
    },
  },
  plugins: [],
};
