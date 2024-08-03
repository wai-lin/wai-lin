<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";

definePageMeta({ middleware: ["articles"] });
const route = useRoute();
const articlesCount = await queryContent("articles").count();
const query = reactive<QueryBuilderParams>({
	sort: [{ date: -1 }],
	limit: 10,
	skip: 0,
});

watchEffect(() => {
	const indexedPage = Number(route.query?.page || 1) - 1;
	const skip = indexedPage * query.limit!;
	query.skip = skip;
});

const currentPage = computed(() => Math.floor(query.skip! / query.limit!) + 1);
const totalPages = computed(() => Math.ceil(articlesCount / query.limit!));
</script>

<template>
	<main class="flex flex-col gap-10 min-h-screen">
		<UiHeading title="Articles" class="flex-none" />

		<section>
			<ArticleList :query="query" />
		</section>

		<ArticlePagination
			v-if="articlesCount > 0"
			:current-page="currentPage"
			:total-pages="totalPages"
			class="flex-none"
		/>
	</main>
</template>
