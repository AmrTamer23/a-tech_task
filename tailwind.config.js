/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
    base: false,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
