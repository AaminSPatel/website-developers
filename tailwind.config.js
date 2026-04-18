/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 theme: {
  extend: {
    keyframes: {
      marquee: {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-50%)' },
      },
    },
    animation: {
      marquee: 'marquee 22s linear infinite',
    },
  },
},
  plugins: [],
}
