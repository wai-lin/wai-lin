<script setup lang="ts">
import dayjs from "dayjs";

type Props = { articles: Article[] };
const props = defineProps<Props>();

function displayDate(d: string) {
	return dayjs(d).format("MMM-DD");
}
</script>

<template>
	<p v-if="props.articles.length <= 0">No articles found.</p>

	<NuxtLink
		v-else
		v-for="article in articles"
		:key="article._path"
		:to="article._path"
		:class="[
			'block mb-2 w-full flex items-end gap-4',
			'hover:(text-zinc-300)',
			'visited:(text-zinc-500)',
		]"
	>
		<UiHeading order="6" :title="article.title" />
		<p class="text-zinc-500 text-sm flex items-center gap-1">
			<span class="i-mynaui-circle-dashed text-current text-xs" />
			<span class="text-teal-700">{{ displayDate(article.date) }}</span>
		</p>
	</NuxtLink>
</template>
