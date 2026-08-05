<script setup lang="ts">
useHead({
	titleTemplate: (title) => {
		return title ? `${title} | Wai Lin Aung` : "Wai Lin Aung — FullStack Web Developer";
	},
});
</script>

<template>
	<NuxtRouteAnnouncer />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
