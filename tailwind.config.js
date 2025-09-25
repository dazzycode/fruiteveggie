module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
        libre: ['Libre Baskerville', 'serif'],
      },
     fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        lg: "14px",
        xl: "16px",
      }, 
    },
  },
plugins: [
  require('@tailwindcss/line-clamp'),
],
}
