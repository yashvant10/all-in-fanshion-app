/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6D5DF6',
        accent: '#00C9A7',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(109, 93, 246, 0.15)',
      },
    },
  },
  plugins: [],
};
