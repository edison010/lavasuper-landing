/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fbfaf9",
          100: "#f5f3f0",
          200: "#e8e1da",
          300: "#d6c9be",
          400: "#c0a897",
          500: "#ae8d76",
          600: "#9c765c",
          700: "#825d48",
          800: "#6a4e3e",
          900: "#564134",
        },
        gold: {
          light: "#FDFBF7",
          DEFAULT: "#D4AF37",
          dark: "#AA8C2C"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        serif: [
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ]
      },
    },
  },
  plugins: [],
};
