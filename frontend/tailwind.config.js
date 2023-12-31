/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.svg",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				"dark-white": "var(--color-dark-white)",
				"dark-white-to-pink-1": "var(--color-dark-white-to-pink-1)",
				"dark-white-to-pink-2": "var(--color-dark-white-to-pink-2)",
				"dark-white-to-pink-3": "var(--color-dark-white-to-pink-3)",
				pink: "var(--color-pink)",
				purple: "var(--color-purple)",
				"dark-purple": "var(--color-dark-purple)",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
