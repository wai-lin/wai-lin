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
			<UiLabel color="accent" tag="p">{{ eyebrow }}</UiLabel>
			<UiTitle :level="1" class="mt-4">{{ title }}</UiTitle>
			<UiText v-if="description" variant="muted" class="mt-4 max-w-2xl">
				{{ description }}
			</UiText>
		</div>
	</header>
</template>
