<script setup lang="ts">
type Props = {
	currentPage: number;
	totalPages: number;
};

const props = defineProps<Props>();

const isFirstPage = computed(() => props.currentPage === 1);
const isLastPage = computed(() => props.currentPage === props.totalPages);

const prevLink = computed(() => {
	let page = props.currentPage - 1;
	if (isFirstPage.value) page = 1;
	return `/articles?page=${page}`;
});
const nextLink = computed(() => {
	let page = props.currentPage + 1;
	if (isLastPage.value) page = props.totalPages;
	return `/articles?page=${page}`;
});
</script>

<template>
	<div class="grid gap-4 grid-cols-2 lg:grid-cols-3">
		<NuxtLink
			:to="prevLink"
			:class="['w-full h-20', { 'cursor-not-allowed': isFirstPage }]"
		>
			<UiButton
				icon-left="i-mynaui-arrow-left"
				label="Previous"
				:disabled="isFirstPage"
				class="text-lg size-full hover:(border-teal-700 text-teal-600) active:(border-teal-600 text-teal-500 ring-teal-950)"
			/>
		</NuxtLink>

		<div class="hidden lg:block" />

		<NuxtLink
			:to="nextLink"
			:class="['w-full h-20', { 'cursor-not-allowed': isLastPage }]"
		>
			<UiButton
				icon-right="i-mynaui-arrow-right"
				label="Next"
				:disabled="props.currentPage === props.totalPages"
				class="text-lg size-full hover:(border-teal-700 text-teal-600) active:(border-teal-600 text-teal-500 ring-teal-950)"
			/>
		</NuxtLink>
	</div>
</template>
