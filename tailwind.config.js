/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#101827', 2: '#1B293B', 3: '#24364d' },
        teal: { DEFAULT: '#20C7B7', deep: '#0b7f76' },
        royal: '#3978F6',
        paper: '#F5F7FA',
        ink: '#DCE4EF',
      },
      fontFamily: { sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'] },
      maxWidth: { page: '76rem' },
    },
  },
  plugins: [],
};
