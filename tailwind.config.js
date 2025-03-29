import flowbitePlugin from "flowbite/plugin";
// import flowbiteReact from "flowbite-react/plugin/tailwindcss";
import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
		"./node_modules/flowbite/**/*.js",
		".flowbite-react\\class-list.json",
	],
	theme: {
		extend: {
			colors: {
				primary: "#00804E",
				gray: {
					DEFAULT: "#6C757D",
				},
			},
			fontFamily: {
				inter: ["Rubik"],
			},
		},
	},
	plugins: [flowbitePlugin, flowbite],
};