<template>
	<div class="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
		<Navigation name="Wai Lin Aung" />
		<main>
			<Hero />
			<About />
			<Projects />
			<Footer />
		</main>
	</div>
</template>

<script setup lang="ts">
useHead({
	htmlAttrs: {
		class: 'scroll-smooth',
	},
	script: [
		(import.meta.dev ? {} : {
			defer: true,
			src: "/stats.js",
			"data-website-id": "58c76d08-ea33-4ecc-a004-d87131795436"
		})
	]
})

// Initialize theme on app mount
const { initTheme } = useTheme()

onMounted(() => {
	initTheme()
})
</script>
