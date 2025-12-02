<template>
	<section id="about"
		class="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
		<div class="max-w-5xl w-full">
			<!-- Header -->
			<div class="text-center mb-16 animate-fade-in-up">
				<h1 class="text-5xl sm:text-6xl font-bold mb-4">
					<span
						class="bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
						{{ about?.name }}
					</span>
				</h1>
				<p class="text-2xl text-slate-600 dark:text-slate-400 mb-4">{{ about?.title }}</p>
			</div>

			<!-- Bio Section -->
			<div class="grid md:grid-cols-2 gap-12 mb-16">
				<div class="animate-slide-in-left">
					<h2 class="text-3xl font-bold mb-6 text-slate-900 dark:text-white">About Me</h2>
					<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
						{{ about?.bio }}
					</p>
					<div class="mt-8">
						<h3 class="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
							Let's Connect</h3>
						<div class="flex flex-wrap gap-4">
							<a v-for="social in about?.social" :key="social.name"
								:href="social.url" :title="social.name" target="_blank"
								rel="noopener noreferrer"
								class="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
								<span v-if="social.icon === 'github'"
									class="text-lg">🐙</span>
								<span v-else-if="social.icon === 'linkedin'"
									class="text-lg">💼</span>
								<span v-else-if="social.icon === 'email'"
									class="text-lg">✉️</span>
							</a>
						</div>
					</div>
				</div>

				<!-- Skills Section -->
				<div class="space-y-6">
					<div v-for="skillGroup in about?.skills" :key="skillGroup.category"
						class="group cursor-default">
						<h3
							class="text-lg font-semibold mb-3 text-slate-900 dark:text-white flex items-center">
							<span
								class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mr-3 group-hover:scale-150 transition-transform"></span>
							{{ skillGroup.category }}
						</h3>
						<div class="flex flex-wrap gap-2">
							<span v-for="skill in skillGroup.items" :key="skill"
								class="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 hover:shadow-md">
								{{ skill }}
							</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Experience Timeline -->
			<div class="mt-16">
				<h2 class="text-3xl font-bold mb-12 text-slate-900 dark:text-white">Experience</h2>
				<div class="space-y-8">
					<div v-for="(job, index) in about?.experience" :key="index"
						class="relative pl-8 pb-8 border-l-2 border-blue-600 transition-colors"
						:class="[
							index === about?.experience.length - 1 ? 'border-l-transparent' : 'hover:border-blue-400'
						]">
						<div
							class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 hover:scale-125 transition-transform">
						</div>
						<div class="group">
							<h3
								class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
								{{ job.title }}
							</h3>
							<p class="text-slate-600 dark:text-slate-400 font-medium">{{
								job.company }}</p>
							<p class="text-sm text-slate-500 dark:text-slate-500 mb-2">{{
								job.period }}</p>
							<p class="text-slate-600 dark:text-slate-400">{{ job.description
							}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const about = ref<any>(null)
const { loadYaml } = useContent()

onMounted(async () => {
	about.value = await loadYaml('about')
})
</script>
