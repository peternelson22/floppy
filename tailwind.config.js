/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(360px, 1fr))',
      },
      screens: {
        tb: '994px',
        lb: '1280px',
        lm: '1170px',
      },
    },
  },
  plugins: [],
};
