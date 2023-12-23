/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
	],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#49108B",
        "purple": "#7E30E1",
        "pink": "#E26EE5",
        "dark-white": "#F3F8FF",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

