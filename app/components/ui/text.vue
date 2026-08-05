<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		variant?: "body" | "small" | "muted";
		tag?: "p" | "span" | "div" | (string & {});
		class?: string;
	}>(),
	{
		variant: "body",
		tag: "p",
	},
);

const variants: Record<string, string> = {
	body: "text-base leading-relaxed text-pretty",
	small: "text-sm leading-relaxed text-pretty",
	muted: "text-muted-foreground text-sm text-pretty",
};

const classes = computed(() => cn(variants[props.variant], props.class));
</script>

<template>
	<component :is="tag" :class="classes">
		<slot />
	</component>
</template>
