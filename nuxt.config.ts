import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/content", "nuxt-studio"],
	app: {
		head: {
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
	css: ["@/assets/css/main.css"],
	content: {
		experimental: { sqliteConnector: "native" },
	},
	studio: {
		repository: {
			provider: "github",
			owner: "wai-lin",
			repo: "wai-lin",
			branch: "main",
		},
		git: {
			commit: {
				messagePrefix: "content:",
			},
		},
	},
	nitro: {
		preset: "cloudflare_module",
		prerender: {
			routes: ["/"],
			crawlLinks: true,
		},
		cloudflare: {
			deployConfig: true,
			wrangler: {
				observability: {
					enabled: true,
				},
				d1_databases: [
					{
						binding: "DB",
						database_name: "portfolio",
						database_id: "58d17796-ee4c-4b77-a961-ed6ba28530c1",
					},
				],
			},
		},
	},
});
