<script setup lang="ts">
import dayjs from "dayjs";

const { data: articles } = await useAsyncData(
	"articles",
	function () {
		return queryContent<Article>("articles")
			.where({ is_published: true })
			.find();
	},
	{
		transform(articles) {
			return articles.sort((a, b) => dateSorter(a.date, b.date, "desc"));
		},
	},
);

const yearGroups = computed(() => {
	let group: Record<string, Article[]> = {};
	for (const article of articles.value || []) {
		const year = dayjs(article.date).format("YYYY");
		const existing = group[year] || [];
		group[year] = ([] as Article[]).concat(existing, article);
	}
	return group;
});
const sortedYears = computed(() => {
	const keys = Object.keys(yearGroups.value);
	if (keys.length <= 0) return [];
	return keys.sort((a, b) => Number(b) - Number(a));
});

function getArticles(year: string) {
	return yearGroups.value[year] || [];
}
</script>

<template>
	<UiHeading order="2" title="Articles" class="mb-10" />

	<section>
		<p v-if="sortedYears.length <= 0">No articles.</p>
		<article
			v-else
			v-for="year in sortedYears"
			class="mb-8 pb-8 border-b border-dashed border-zinc-600 last-of-type:(border-none)"
		>
			<UiHeading order="4" :title="String(year)" class="mb-4" />
			<ArticleList :articles="getArticles(year)" />
		</article>
	</section>
</template>
