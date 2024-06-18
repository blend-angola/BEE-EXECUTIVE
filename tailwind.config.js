/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          title: "var(--beeTitle)",
          text: "var(--beeText)",
        },
      },
      backgroundColor: {
        beeBg: "var(--beeBg)",
      },
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },
      colors: {
        beeBlack: {
          primary: "#212121",
          secondary: "#333",
        },
        beeBorder: "var(--beeBorderColor)",
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
