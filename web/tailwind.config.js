module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8338ec',
          601: 'rgba(168, 85, 247, .1)',
          701: 'rgba(253, 224, 71, .1)',
          801: 'rgba(96, 165, 250, .1)',
        },
        color:{
          100: '#37393C',
          200: '#111113',
          300: 'rgba(0,0,0.5)',
          400: '#09090A',
        }
      },
      borderRadius: {
        md: '4px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}