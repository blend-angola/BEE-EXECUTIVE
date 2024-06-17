/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },
      colors: {
        beeBlack: {
          primary: "#212121",
          secondary: "#333",
        },
        beeYellow: {
          primary: "#f9c347",
          secondary: "#ffc146",
        },
        beeWhiteSmoke: "#eee9e9",
      },
    },
  },
  plugins: [],
}
