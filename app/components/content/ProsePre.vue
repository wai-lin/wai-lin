<script setup>
import { Copy, Check } from "@lucide/vue";
import { ref } from "vue";

const props = defineProps({
	code: {
		type: String,
		default: "",
	},
	language: {
		type: String,
		default: null,
	},
	filename: {
		type: String,
		default: null,
	},
	highlights: {
		type: Array,
		default: () => [],
	},
	meta: {
		type: String,
		default: null,
	},
	class: {
		type: String,
		default: null,
	},
});

const copied = ref(false);

const showCopy = computed(() => {
	if (!props.meta) return true;
	const match = props.meta.match(/copy=(true|false)/);
	return match ? match[1] !== "false" : true;
});

const hasHeader = computed(() => props.filename || showCopy.value);

async function copyCode() {
	await navigator.clipboard.writeText(props.code);
	copied.value = true;
	setTimeout(() => {
		copied.value = false;
	}, 2000);
}
</script>

<template>
	<div class="my-6 overflow-x-auto rounded-xl border border-gray-500">
		<div
			v-if="hasHeader"
			class="flex items-center justify-between border-b border-gray-500 bg-[#282c34] px-4 py-2 text-white"
		>
			<UiLabel v-if="filename" class="tracking-normal text-white normal-case">{{
				filename
			}}</UiLabel>
			<span v-else />
			<button
				v-if="showCopy"
				type="button"
				class="hover:text-foreground inline-flex items-center gap-1.5 text-xs transition-colors"
				@click="copyCode"
			>
				<Check v-if="copied" class="size-3.5" />
				<Copy v-else class="size-3.5" />
				{{ copied ? "Copied" : "Copy" }}
			</button>
		</div>
		<pre
			:class="cn('overflow-x-auto bg-[#282c34] p-4 text-sm text-white', $props.class)"
		><slot /></pre>
	</div>
</template>

<style>
pre code .line {
	display: block;
}
</style>
