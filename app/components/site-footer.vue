<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
	<footer class="border-border border-t print:hidden">
		<div class="mx-auto max-w-5xl px-6 py-12">
			<div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
				<div class="max-w-sm">
					<p class="text-muted-foreground font-mono text-xs tracking-widest uppercase">
						Get in touch
					</p>
					<p class="mt-3 text-lg text-balance">Have a project in mind or just want to say hello?</p>
					<a
						:href="`mailto:${profile.email}`"
						class="text-accent mt-3 inline-block text-sm font-medium hover:underline"
					>
						{{ profile.email }}
					</a>
				</div>

				<nav aria-label="Social" class="grid grid-cols-2 gap-x-12 gap-y-2">
					<a
						v-for="social in profile.socials"
						:key="social.label"
						:href="social.href"
						target="_blank"
						rel="noreferrer"
						class="group text-muted-foreground hover:text-foreground flex items-center justify-between gap-4 text-sm transition-colors"
					>
						<span>{{ social.label }}</span>
						<span class="font-mono text-xs">{{ social.handle }}</span>
					</a>
				</nav>
			</div>

			<div
				class="border-border text-muted-foreground mt-12 flex flex-col gap-4 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
			>
				<p>&copy; {{ year }} {{ profile.name }}. Built with Nuxt.</p>
				<div class="flex gap-6">
					<NuxtLink to="/projects" class="hover:text-foreground">Projects</NuxtLink>
					<NuxtLink to="/blogs" class="hover:text-foreground">Blog</NuxtLink>
					<a :href="`mailto:${profile.email}`" class="hover:text-foreground">Contact</a>
				</div>
			</div>
		</div>
	</footer>
</template>
