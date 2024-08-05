<script setup lang="ts">
import dayjs from "dayjs";

type Props = { articles: Article[] };
const props = defineProps<Props>();

function displayDate(d: string) {
	return dayjs(d).format("MMM-DD");
}
</script>

<template>
	<NuxtLink
		v-for="article in articles"
		:key="article._path"
		:to="article._path"
		:class="[
			'block w-full flex items-end gap-2 mb-4 last-of-type:mb-0',
			'hover:(text-zinc-400)',
			'visited:(text-zinc-500)',
		]"
	>
		<UiHeading order="6" :title="article.title" class="leading-none" />
		<p class="text-zinc-500 text-sm flex items-center gap-1 leading-none">
			<span class="i-mynaui-circle-dashed text-current text-xs" />
			<span class="text-teal-700 dark:(text-teal-500)">{{
				displayDate(article.date)
			}}</span>
		</p>
	</NuxtLink>
</template>
