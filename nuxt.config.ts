import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	modules: ["@nuxt/icon"],
	vite: {
		plugins: [tailwindcss()]
	},
	routeRules: {
		"/stats.js": {
			proxy: "https://cloud.umami.is/script.js"
		}
	},
	app: {
		head: {
			title: 'Wai Lin Aung - Full Stack Developer',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'Full stack developer portfolio - Vue.js, Nuxt.js, Node.js' },
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
			],
		},
	},
})
