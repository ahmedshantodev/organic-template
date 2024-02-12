/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "container": "1320px"
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
      },
      colors: {
        'orrange': '#F47606',
        'dark-green': '#477018',
        'golden': '#ffae00',
      },
      backgroundImage: {
        "home-bg-image": "url(/images/home-banner-bg.jpg)"
      }
    },
  },
  plugins: [],
}