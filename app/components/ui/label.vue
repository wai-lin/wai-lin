<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		color?: "muted" | "accent";
		tag?: "span" | "p" | "div" | (string & {});
		class?: string;
	}>(),
	{
		color: "muted",
		tag: "span",
	},
);

const colors: Record<string, string> = {
	muted: "text-muted-foreground",
	accent: "text-accent",
};

const classes = computed(() =>
	cn("font-mono text-xs tracking-widest uppercase", colors[props.color], props.class),
);
</script>

<template>
	<component :is="tag" :class="classes">
		<slot />
	</component>
</template>
