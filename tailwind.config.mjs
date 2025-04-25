/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F'
      },
      fontFamily: {
        ovo: ['Ovo', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'black': '4px 4px 0 2px #000',
        'white': '4px 4px 0 2px #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
