<script lang="ts" setup>
import { ArrowLeft, ArrowRight } from "@lucide/vue";

const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection("blogs").path(route.path).first();
});

const { data: nextPost } = await useAsyncData(`next-${route.path}`, () => {
	return queryCollectionItemSurroundings("blogs", route.path, {
		fields: ["title"],
	}).then((surround) => surround[1]);
});

useSeoMeta({
	title: computed(() => page.value?.title ?? "Post"),
	ogTitle: computed(() => page.value?.title),
	description: computed(() => page.value?.description),
	ogDescription: computed(() => page.value?.description),
	ogImage: "/og-blog.png",
	twitterCard: "summary_large_image",
});
</script>

<template>
	<main v-if="page">
		<article>
			<header class="border-border border-b">
				<div class="mx-auto max-w-3xl px-6 py-16 md:py-20">
					<NuxtLink
						to="/blogs"
						class="group text-muted-foreground hover:text-foreground inline-flex items-center gap-1 font-mono text-xs transition-colors"
					>
						<ArrowLeft class="size-3.5 transition-transform group-hover:-translate-x-0.5" />
						All posts
					</NuxtLink>

					<div
						class="text-muted-foreground mt-8 flex flex-wrap items-center gap-3 font-mono text-xs"
					>
						<span>{{ formatDate(page.date) }}</span>
						<span aria-hidden="true">&middot;</span>
						<span>{{ page.readingTime }}</span>
					</div>
					<h1
						class="mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl"
					>
						{{ page.title }}
					</h1>
					<div class="mt-6 flex flex-wrap gap-1.5">
						<span
							v-for="tag in page.tags"
							:key="tag"
							class="border-border text-muted-foreground rounded border px-2 py-0.5 font-mono text-[11px]"
						>
							{{ tag }}
						</span>
					</div>
				</div>
			</header>

			<div class="mx-auto max-w-3xl px-6 py-16">
				<div class="prose">
					<ContentRenderer :value="page" />
				</div>

				<div v-if="nextPost" class="border-border mt-16 border-t pt-8">
					<p class="text-muted-foreground font-mono text-xs tracking-widest uppercase">Next up</p>
					<NuxtLink :to="nextPost.path" class="group mt-3 flex items-center justify-between gap-4">
						<span class="group-hover:text-accent text-lg font-semibold tracking-tight text-balance">
							{{ nextPost.title }}
						</span>
						<ArrowRight
							class="text-muted-foreground size-5 shrink-0 transition-transform group-hover:translate-x-0.5"
						/>
					</NuxtLink>
				</div>
			</div>
		</article>
	</main>
</template>
