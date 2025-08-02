module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgSoft: '#0f0f0f',
        neon: '#00f7ff',
        peach: '#ffafcc'
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif']
      }
    }
  },
  plugins: []
}
