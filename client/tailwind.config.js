/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        'lightpurp': "#ab6fd1",
        'skyblue': "#42bff5",
        'goblue': "#052450",
        'maize': "#fac807",
        'shamrock': "#00a99d",
        'orange': "#fa7e02",
        'darkorange': "#964c02",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

