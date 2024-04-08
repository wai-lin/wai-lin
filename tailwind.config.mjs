/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			body: ["Arvo", "Noto Sans Myanmar", "serif"],
		},
		extend: {
			screens: {
				screen: { raw: "screen" },
			},
		},
	},
	plugins: [],
}
