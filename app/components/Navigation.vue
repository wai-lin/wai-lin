<template>
	<nav
		class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
			<!-- Logo/Name -->
			<a href="#"
				class="text-xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
				{{ name }}
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-8">
				<a href="#about"
					class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
					About
				</a>
				<a href="#projects"
					class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
					Projects
				</a>
				<a href="#contact"
					class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
					Contact
				</a>
				<!-- Theme Toggle Button -->
				<button @click="toggleTheme"
					class="p-2 rounded-lg size-10 grid place-items-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
					:title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
					<Icon v-if="isDark" name="tabler:sun" class="text-lg" />
					<Icon v-else name="tabler:moon" class="text-lg" />
				</button>
			</div>

			<!-- Mobile Menu and Theme Toggle Container -->
			<div class="flex md:hidden items-center gap-2">
				<!-- Theme Toggle Button (Mobile) -->
				<button @click="toggleTheme"
					class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
					:title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
					<svg v-if="isDark" class="w-5 h-5 text-yellow-500" fill="currentColor"
						viewBox="0 0 24 24">
						<path
							d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
					<svg v-else class="w-5 h-5 text-slate-700" fill="currentColor"
						viewBox="0 0 24 24">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>
				</button>
				<!-- Mobile Menu Button -->
				<button @click="isMenuOpen = !isMenuOpen"
					class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		<div v-if="isMenuOpen"
			class="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 animate-fade-in">
			<div class="px-4 py-4 space-y-3">
				<a href="#about"
					class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-2">
					About
				</a>
				<a href="#projects"
					class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-2">
					Projects
				</a>
				<a href="#contact"
					class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-2">
					Contact
				</a>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
const props = defineProps<{
	name: string
}>()

const isMenuOpen = ref(false)
const { isDark, toggleTheme } = useTheme()

onMounted(() => {
	// Menu initialization if needed
})
</script>
