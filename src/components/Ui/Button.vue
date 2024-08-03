<script setup lang="ts">
type Props = {
	type?: "button" | "submit" | "reset";
	label?: string;
	iconLeft?: string;
	iconRight?: string;
};
const props = withDefaults(defineProps<Props>(), {
	type: "button",
});
</script>

<template>
	<button
		:type="props.type"
		:class="[
			'py-2.5 px-5 font-medium bg-slate-900 text-slate-400',
			'rounded-lg border border-slate-400 ',
			'flex gap-2 items-center justify-center',
			'hover:(bg-slate-950)',
			'focus:(outline-none z-10 ring-4 ring-slate-800)',
			'disabled:(text-slate-700 border-slate-700 pointer-events-none)',
		]"
	>
		<slot>
			<span :class="[props.iconLeft, 'text-current']" />
			<span>{{ props.label }}</span>
			<span :class="[props.iconRight, 'text-current']" />
		</slot>
	</button>
</template>
