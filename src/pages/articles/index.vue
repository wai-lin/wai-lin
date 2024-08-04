<script setup lang="ts">
import dayjs from "dayjs";

const { data: articles } = await useAsyncData(
	"articles",
	function () {
		return queryContent<Article>("articles").find();
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
	return Object.keys(yearGroups.value).sort((a, b) => Number(b) - Number(a));
});

// definePageMeta({ middleware: ["articles"] });
// const route = useRoute();
// const articlesCount = await queryContent("articles").count();
// watchEffect(() => {
// 	const indexedPage = Number(route.query?.page || 1) - 1;
// 	const skip = indexedPage * query.limit!;
// 	query.skip = skip;
// });
// const currentPage = computed(() => Math.floor(query.skip! / query.limit!) + 1);
// const totalPages = computed(() => Math.ceil(articlesCount / query.limit!));
</script>

<template>
	<main>
		<UiHeading order="2" title="Articles" class="mb-10" />

		<section>
			<article v-for="year in sortedYears" class="mb-8 pb-8 border-b border-dashed border-zinc-600">
				<UiHeading order="4" :title="String(year)" class="mb-4" />
				<ArticleList :articles="yearGroups[year]" />
			</article>
		</section>

		<!-- <ArticlePagination
			v-if="articlesCount > 0"
			:current-page="currentPage"
			:total-pages="totalPages"
			class="flex-none"
		/> -->
	</main>
</template>
