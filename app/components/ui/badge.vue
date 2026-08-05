<script setup lang="ts">
const props = defineProps<{
	class?: string;
}>();
</script>

<template>
	<span
		:class="
			cn(
				'border-border text-muted-foreground rounded border px-2 py-0.5 font-mono text-[11px]',
				props.class,
			)
		"
	>
		<slot />
	</span>
</template>
