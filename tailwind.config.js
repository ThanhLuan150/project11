/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol'],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
    },

    extend: {
      
      keyframes: {
        slideDown: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(0)' }, },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
      },
    },
  },
  plugins: [],
}

