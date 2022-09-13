/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'cream': "hsl(30, 38%, 92%)",
        'dark': {
          cyan: 'hsl(158, 36%, 37%)',
          blue: 'hsl(212, 21%, 14%)',
          graylish: 'hsl(228, 12%, 48%)',
        },
        'white': "hsl(0, 0%, 100%)",
        'greenButton': {
          primary: "hsl(158, 36%, 37%)",
          secondary: "hsl(159, 54%, 15%)"
        }
      },
      fontFamily: {
        'sans-serif': ['Montserrat', 'sans-serif'],
        'serif': ['Fraunces', 'serif'],
      }
    },
  },
  plugins: [],
}
