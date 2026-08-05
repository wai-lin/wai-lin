<script setup>
const props = defineProps({
	href: {
		type: String,
		default: "",
	},
	target: {
		type: String,
		default: void 0,
		required: false,
	},
});
</script>

<template>
	<NuxtLink
		:href="props.href"
		:target="props.target"
		class="text-accent underline-offset-4 hover:underline"
	>
		<slot />
	</NuxtLink>
</template>
