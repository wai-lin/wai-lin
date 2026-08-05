<script setup>
defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		default: "",
	},
	width: {
		type: [String, Number],
		default: null,
	},
	height: {
		type: [String, Number],
		default: null,
	},
});
</script>

<template>
	<img :src="src" :alt="alt" :width="width" :height="height" class="my-6 w-full rounded-xl" />
</template>
