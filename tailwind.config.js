/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04403E',
        'custom-white': '#F9FAFB',
        'custom-black': '#111827',
      },
      fontFamily: {
        'abhaya': ['Abhaya Libre', 'serif'],
        'dm-serif': ['DM Serif Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wide-10': '0.1em',
      },
    },
  },
  plugins: [],
}
