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
	modules: ["@nuxt/content", "@unocss/nuxt", "@nuxtjs/color-mode"],
	css: ["@unocss/reset/tailwind.css"],
	content: {
		highlight: { theme: "vitesse-dark" },
	},
	unocss: {
		presets: [
			presetUno({ dark: "class", content: ["src/**/*"] }),
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
	colorMode: { classSuffix: "" },
});
