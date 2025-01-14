const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Rubik"],
			},
			keyframes: {
				"spin-horizontal": {
					"0%": { transform: "rotateY(0deg)" },
					"100%": { transform: "rotateY(360deg)" },
				},
			},
			animation: {
				"spin-horizontal": "spin-horizontal 2s linear infinite",
			},
			dropShadow: {
				"purple-glow": "0 0 20px rgba(128, 0, 128, 0.7)",
				"blue-glow": "0 0 20px #9FE2BF", // Blue drop shadow
			},
			
		},	
},
	plugins: [],
});
