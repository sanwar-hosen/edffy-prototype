import { createTheme } from "flowbite-react";

const customTheme = createTheme({
	button: {
		base: "font-medium rounded-xl focus:ring-4 focus:outline-none inline-flex items-center justify-center bg-[#00804E] px-[1.15rem] py-[0.65rem] hover:shadow-md hover:shadow-[#00804f2a] text-white",
		color: {
			// Primary button is the default

			// Outline button style
			outline:
				"bg-transparent border-2 border-[#00804E] px-4 py-2 hover:shadow-md hover:shadow-[#00804f2a] text-[#00804E]",
			// Disabled button style
			disabled:
				"bg-transparent border-2 border-[#6C757D] px-4 py-2 text-[#6C757D] cursor-not-allowed",
		},
		disabled: "cursor-not-allowed opacity-70", // Additional disabled state styling
		size: {
			// You can keep the default sizes or customize them
			xs: "text-xs px-2 py-1",
			sm: "text-sm px-3 py-1.5",
			md: "text-sm px-4 py-2",
			lg: "text-base px-5 py-2.5",
			xl: "text-base px-6 py-3",
		},
		pill: "rounded-full",
		defaultVariants: {
			color: "primary",
			size: "md",
		},
	},
	label: {
		root: {
			base: "text-base text-[#6C757D] font-medium",
			colors: {
				black: "text-[black]",
			},
			disabled: "opacity-50 cursor-not-allowed",
		},
	},
	badge: {
		root: {
			base: "inline-flex items-center font-medium cursor-pointer",
			color: {
				primary:
					"bg-[#00804E] text-white hover:shadow-sm hover:shadow-[#00804f2a]",
				outlinedGray:
					"bg-white text-gray-700 border border-gray-300 hover:shadow-sm hover:bg-gray-50",
				outlinedPrimary:
					"bg-transparent border border-[#00804E] text-[#00804E] hover:shadow-sm hover:shadow-[#00804f2a]",
				gray: "bg-gray-100 text-gray-800 border border-gray-200",
				dark: "bg-gray-900 text-white",
			},
			size: {
				xs: "text-xs px-2 py-0.5",
				sm: "text-xs px-2.5 py-0.5",
				md: "text-sm px-3 py-1",
				lg: "text-sm px-3.5 py-1.5",
			},
		},
		icon: {
			off: {
				base: "rounded-lg",
			},
			on: {
				base: "rounded-full", // For pill badges
			},
		},
		defaultVariants: {
			color: "default",
			size: "sm",
		},
	},
	// Add  other components (TextInput, etc.) here as needed
});

export default customTheme;
