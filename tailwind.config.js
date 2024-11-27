/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Work Sans":['"Work Sans"', "sans-serif"],
        "Montserrat":['"Montserrat"', "sans-serif"],
       
      },
      colors: {
        primary: "#0FF1F6",
        secondary: "#adb2b1",
        foreground: "#ffffff",
      },
    },
  },
  plugins: [],
}

