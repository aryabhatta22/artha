/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      core: "Nunito Sans, monospace",
    },
    extend: {
      colors: {
        primary1: "#27374D",
        primary2: "#526D82",
        primary3: "#9DB2BF",
        primary4: "#DDE6ED",
      },
    },
  },
  plugins: [],
};
