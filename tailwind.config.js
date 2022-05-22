module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        carAccessoriesTheme: {
          primary: "#ff0754",
          secondary: "#fd709c",
          accent: "#8b8b89",
          neutral: "#333333",
          "base-100": "#f5f5f5",
          // "base-100": "#1d2433",
        },
      },
      "corporate",
      "dracula",
    ],
  },
};
