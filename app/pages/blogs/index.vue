<script setup lang="ts">
import { ArrowRight } from "@lucide/vue";

const { data: posts } = await useAsyncData("blogs-list", () => {
	return queryCollection("blogs").order("date", "DESC").all();
});

const description =
	"Writing about software engineering, product craft, developer experience and the occasional lesson learned.";

useSeoMeta({
	title: "Blog",
	ogTitle: "Blog",
	description,
	ogDescription: description,
	ogImage: "/og-blog.png",
	twitterCard: "summary_large_image",
});
</script>

<template>
	<main>
		<PageHeader
			eyebrow="Blog"
			title="Notes on the craft"
			description="Occasional writing about software engineering, product craft and developer experience."
		/>

		<section>
			<div class="mx-auto max-w-5xl px-6 py-16">
				<ul class="divide-border border-border divide-y rounded-xl border">
					<li v-for="post in posts" :key="post.path">
						<NuxtLink
							:to="post.path"
							class="group hover:bg-secondary flex flex-col gap-3 p-8 transition-colors"
						>
							<UiLabel
								tag="div"
								class="flex flex-wrap items-center gap-3 tracking-normal normal-case"
							>
								<span>{{ formatDate(post.date) }}</span>
								<span aria-hidden="true">&middot;</span>
								<span>{{ post.readingTime }}</span>
							</UiLabel>
							<UiTitle :level="2" class="group-hover:text-accent text-xl text-balance">
								{{ post.title }}
							</UiTitle>
							<UiText variant="muted" class="max-w-2xl">{{ post.description }}</UiText>
							<div class="mt-2 flex items-center justify-between">
								<div class="flex flex-wrap gap-1.5">
									<UiBadge v-for="tag in post.tags" :key="tag">
										{{ tag }}
									</UiBadge>
								</div>
								<span
									class="text-muted-foreground group-hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
								>
									Read
									<ArrowRight class="size-4 transition-transform group-hover:translate-x-0.5" />
								</span>
							</div>
						</NuxtLink>
					</li>
				</ul>
			</div>
		</section>
	</main>
</template>
