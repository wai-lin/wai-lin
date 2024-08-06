<script setup lang="ts">
const bodyClass = [
	"font-body text-[15px] text-zinc-600 bg-zinc-100",
	"dark:(bg-zinc-950 text-zinc-300)",
	"selection:(bg-teal-300 text-teal-950)",
].join(" ");

useHead({ bodyAttrs: { class: bodyClass } });
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
