<script setup lang="ts">
useHead({
	bodyAttrs: {
		class:
			"font-body text-zinc-400 bg-zinc-950 selection:(bg-teal-300 text-teal-950)",
	},
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
