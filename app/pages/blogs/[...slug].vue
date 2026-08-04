<script lang="ts" setup>
import { ArrowLeft, ArrowRight } from "@lucide/vue";

const route = useRoute();
const slug = computed(() => {
	const p = route.params.slug;
	return Array.isArray(p) ? p.join("/") : p;
});

const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection("blogs").path(route.path).first();
});

const post = computed(() => {
	return posts.find((p) => p.slug === slug.value);
});

const nextPost = computed(() => {
	if (!post.value) return null;
	const index = posts.findIndex((p) => p.slug === slug.value);
	return posts[index + 1] ?? null;
});

useHead({
	title: computed(() => post.value?.title ?? page.value?.title ?? "Post"),
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
						v-if="post"
						class="text-muted-foreground mt-8 flex flex-wrap items-center gap-3 font-mono text-xs"
					>
						<span>{{ formatDate(post.date) }}</span>
						<span aria-hidden="true">&middot;</span>
						<span>{{ post.readingTime }}</span>
					</div>
					<h1
						class="mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl"
					>
						{{ page.title }}
					</h1>
					<div v-if="post" class="mt-6 flex flex-wrap gap-1.5">
						<span
							v-for="tag in post.tags"
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
					<NuxtLink
						:to="`/blogs/${nextPost.slug}`"
						class="group mt-3 flex items-center justify-between gap-4"
					>
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
