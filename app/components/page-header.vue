<script setup lang="ts">
defineProps<{
	eyebrow: string;
	title: string;
	description?: string;
}>();
</script>

<template>
	<header class="border-border border-b">
		<div class="mx-auto max-w-5xl px-6 py-16 md:py-20">
			<p class="text-accent font-mono text-xs tracking-widest uppercase">{{ eyebrow }}</p>
			<h1 class="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
				{{ title }}
			</h1>
			<p
				v-if="description"
				class="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed text-pretty"
			>
				{{ description }}
			</p>
		</div>
	</header>
</template>
