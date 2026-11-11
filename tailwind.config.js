/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './**/*.{js,ts}', '!./node_modules/**'],
  theme: {
    extend: {
      colors: {
        dark: '#243C2C',
        moss: '#7A9445',
        vanilla: '#ECE69D',
        powder: '#A9B6C4',
        glaucous: '#59789F'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Fraunces', 'serif']
      }
    },
  },
  plugins: [],
}

