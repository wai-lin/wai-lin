<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		level: 1 | 2 | 3 | 4 | 5 | 6;
		display?: boolean;
		tag?: string;
		class?: string;
	}>(),
	{
		display: false,
	},
);

const tag = computed(() => props.tag ?? `h${props.level}`);

const classes = computed(() => {
	const base = "font-semibold tracking-tight";

	const sizes: Record<number, string> = {
		1: props.display
			? "text-4xl leading-[1.1] text-balance md:text-6xl"
			: "text-4xl text-balance md:text-5xl",
		2: "text-2xl",
		3: "text-lg",
		4: "text-base",
		5: "text-sm",
		6: "text-xs",
	};

	return cn(base, sizes[props.level], props.class);
});
</script>

<template>
	<component :is="tag" :class="classes">
		<slot />
	</component>
</template>
