module.exports = {
  plugins: {
    tailwindcss: {
      theme: {
        extend: {
          colors: {
            // ...
          },
          screens: {
            'xs': {'max': '639px'},
          }
        }
      }
    },
    autoprefixer: {}
  }
}
