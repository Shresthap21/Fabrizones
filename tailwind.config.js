/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        'figma-card': '0px 3.6px 126.1px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        cannu: ['Cannu', 'sans-serif']
      },
    },
  },
  plugins: [],
};
