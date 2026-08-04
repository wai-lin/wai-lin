<script setup lang="ts">
import { Download } from "@lucide/vue";

function printCv() {
	window.print();
}
</script>

<template>
	<button
		type="button"
		class="bg-foreground text-background inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 print:hidden"
		@click="printCv"
	>
		<Download class="size-4" aria-hidden="true" />
		Download CV
	</button>
</template>
