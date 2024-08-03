import {
	presetUno,
	presetIcons,
	presetTypography,
	presetWebFonts,
	transformerVariantGroup,
	transformerDirectives,
} from "unocss";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	srcDir: "src/",
	modules: ["@nuxt/content", "@unocss/nuxt"],
	css: ["@unocss/reset/tailwind.css"],
	unocss: {
		presets: [
			presetUno({ dark: "class" }),
			presetIcons({ scale: 1 }),
			presetTypography(),
			presetWebFonts({
				fonts: {
					body: ["IBM Plex Serif", "Noto Serif Myanmar"],
					mono: ["IBM Plex Mono", "Noto Serif Myanmar"],
				},
			}),
		],
		transformers: [transformerVariantGroup(), transformerDirectives()],
	},
	content: {
		highlight: { theme: "github-dark-default" },
	},
});
