module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bumbleBlack: '#1e1e1e',
        bumbleYellow: '#F9D880',
        bumbleGreen: '#2A3D36',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ribeye: ['Ribeye', 'cursive'], // Add Ribeye font
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
