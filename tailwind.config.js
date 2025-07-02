/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['DM Sans', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#0066CC',
        'secondary': '#4A4A4A',
        'accent': '#00A656',
        'surface': '#FFFFFF',
        'background': '#F5F5F5',
        'success': '#00A656',
        'warning': '#FFB400',
        'error': '#D32F2F',
        'info': '#0066CC',
      },
      borderRadius: {
        'default': '8px',
      },
      transitionDuration: {
        '150': '150ms',
      },
      scale: {
        '105': '1.05',
      },
    },
  },
  plugins: [],
}