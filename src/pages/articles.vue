<script setup lang="ts">
useHead({
	titleTemplate(titleChunk) {
		return titleChunk ? `Articles: ${titleChunk}` : "Articles";
	},
});
</script>

<template>
	<NuxtPage />
</template>
