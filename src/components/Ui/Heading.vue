<script setup lang="ts">
interface Props {
	order?: "1" | "2" | "3" | "4" | "5" | "6";
	title?: string;
}
const props = withDefaults(defineProps<Props>(), { order: "1" });

const tag = computed(() => `h${props.order}`);
const fontSize = computed(() => {
	switch (props.order) {
		case "1":
			return "text-5xl";
		case "2":
			return "text-4xl";
		case "3":
			return "text-3xl";
		case "4":
			return "text-2xl";
		case "5":
			return "text-xl";
		case "6":
			return "text-lg";
	}
});
</script>

<template>
	<component :is="tag" :class="[fontSize, 'font-bold']">
		<slot>{{ props.title }}</slot>
	</component>
</template>
