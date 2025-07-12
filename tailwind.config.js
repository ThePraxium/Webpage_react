/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B2E91',    // Deep Purple
        accent: '#14D9C4',     // Neon Teal
        warning: '#F6C453',    // Warm Yellow
        dark: '#111827',       // Charcoal
        light: '#F9FAFB',      // Snow
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        'light': '#F9FAFB',
        'dark': '#111827',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}