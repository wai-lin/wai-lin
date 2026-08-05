<script setup>
import { computed, useRuntimeConfig } from "#imports";
const props = defineProps({
	id: { type: String, required: false },
});
const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
	() =>
		(props.id && typeof headings?.anchorLinks === "boolean" && headings?.anchorLinks === true) ||
		(typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h3),
);
</script>

<template>
	<h3 :id="props.id" class="mt-6 mb-2 text-lg font-semibold tracking-tight">
		<a v-if="props.id && generate" :href="`#${props.id}`">
			<slot />
		</a>
		<slot v-else />
	</h3>
</template>
