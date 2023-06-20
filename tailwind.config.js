/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#76fce9",
        dark: "#0b132a",
      },
      container:{
        center: true,
        padding: "1rem",
      }
    },
  },
  plugins: [],
};

