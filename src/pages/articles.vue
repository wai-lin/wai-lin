<script setup lang="ts">
useHead({
	titleTemplate(titleChunk) {
		return titleChunk ? `Articles: ${titleChunk}` : "Articles";
	},
});
</script>

<template>
	<div class="max-w-90ch mx-auto px-4 py-20">
		<NuxtPage />
	</div>
</template>
