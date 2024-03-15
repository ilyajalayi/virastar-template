/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./public/**/*.html","./public/**/*.js"],
  theme: {
      screens: {
        '480': '480px',
        '400': '400px',
        '370': '370px',
        '300':'300px',
        '450': '450px',
        '570': '570px',
        '550': '550px',
        '500': '500px',
        '650': '650px',
        '900': '900px',
        '650': '650px',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          '2xl': '1280px',
        },
      },
    extend: {
      colors: {
        pc: '#009dff',
        sc: '#334155',
        darkbgcolor: '#304254',
        lightbgcolor: '#F3F4F6',
        head :'#0E2338',
        '2dark' :'#0C243F',
        '3dark' :'#1b314c',
      },
    },
  },
  plugins: [],
}