/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff7ff',
          100: '#dbeeff',
          200: '#bfddff',
          300: '#93c3ff',
          400: '#609dff',
          500: '#3b7aff',
          600: '#1e5eff',
          700: '#1a4fe6',
          800: '#1d42ba',
          900: '#1e3a92',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

