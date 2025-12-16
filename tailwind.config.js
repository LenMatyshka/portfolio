module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#141a2e',
        'darker-bg': '#0a0e1a',
        'card-red': '#712135',
        'text-red': '#712135',
        'text-blue': '#191b90',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}