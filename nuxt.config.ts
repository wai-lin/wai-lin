import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/content", "nuxt-studio"],
	vite: {
		plugins: [tailwindcss()],
	},
	css: ["@/assets/css/main.css"],
	content: {
		experimental: { sqliteConnector: "native" },
	},
	nitro: {
		preset: "cloudflare_module",
		cloudflare: {
			deployConfig: true,
			wrangler: {
				d1_databases: [
					{
						binding: "DB",
						database_name: "portfolio",
					},
				],
			},
		},
	},
});
