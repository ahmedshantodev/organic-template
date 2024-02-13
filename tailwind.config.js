/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
      },
      colors: {
        'orrange': '#F47606',
        'dark-green': '#477018',
        'golden': '#ffae00',
      },
      backgroundImage: {
        "home-bg-image": "url(../src/assets/home-bg-image.png)"
      }
    },
  },
  plugins: [],
}