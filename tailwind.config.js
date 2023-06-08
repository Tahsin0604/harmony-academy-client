/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      archivoNarrow: ["Archivo Narrow", "sans-serif"],
      pacifico: ["Pacifico", "cursive"],
      righteous: ["Righteous", "cursive"],
      yanoneKaffeesatz: ["Yanone Kaffeesatz", "sans-serif"],
      caveat: ["Caveat", "cursive"],
    },
  },
  plugins: [require("daisyui")],
};
