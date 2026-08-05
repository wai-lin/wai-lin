<script setup lang="ts">
import { ArrowUpRight, Code } from "@lucide/vue";

const { data: projects } = await useAsyncData("projects", () => {
	return queryCollection("projects").order("stem", "DESC").all();
});

const featured = computed(() => {
	return (projects.value ?? []).filter((p) => p.featured);
});

const others = computed(() => {
	return (projects.value ?? []).filter((p) => !p.featured);
});

const description =
	"A selection of products, tools and open-source projects I have designed and built.";

useSeoMeta({
	title: "Projects",
	ogTitle: "Projects",
	description,
	ogDescription: description,
	ogImage: "/og-projects.png",
	twitterCard: "summary_large_image",
});
</script>

<template>
	<main>
		<PageHeader
			eyebrow="Projects"
			title="Things I've built"
			description="A selection of products, tools and open-source work. Some are shipped, some are experiments, all taught me something."
		/>

		<!-- Featured -->
		<section class="border-border border-b">
			<div class="mx-auto max-w-5xl px-6 py-16">
				<UiLabel tag="h2">Featured</UiLabel>
				<div class="mt-8 grid gap-6 lg:grid-cols-3">
					<article
						v-for="project in featured"
						:key="project.slug"
						class="group border-border bg-card hover:border-accent/50 flex flex-col rounded-xl border p-6 transition-colors"
					>
						<div class="flex items-center justify-between">
							<UiTitle :level="3">{{ project.name }}</UiTitle>
							<UiLabel tag="span" class="tracking-normal normal-case">{{ project.year }}</UiLabel>
						</div>
						<UiText variant="muted" class="!text-accent mt-1 font-medium">{{
							project.tagline
						}}</UiText>
						<UiText variant="muted" class="mt-4 flex-1">{{ project.description }}</UiText>

						<div class="mt-5 flex flex-wrap gap-1.5">
							<UiBadge v-for="tech in project.stack" :key="tech">
								{{ tech }}
							</UiBadge>
						</div>

						<div class="border-border mt-6 flex items-center gap-4 border-t pt-4 text-sm">
							<a
								:href="project.href"
								class="hover:text-accent inline-flex items-center gap-1 font-medium transition-colors"
							>
								Visit
								<ArrowUpRight class="size-4" />
							</a>
							<a
								v-if="project.repo"
								:href="project.repo"
								target="_blank"
								rel="noreferrer"
								class="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
							>
								<Code class="size-4" />
								Source
							</a>
						</div>
					</article>
				</div>
			</div>
		</section>

		<!-- Other projects -->
		<section>
			<div class="mx-auto max-w-5xl px-6 py-16">
				<UiLabel tag="h2">More projects</UiLabel>
				<ul class="divide-border border-border mt-8 divide-y rounded-xl border">
					<li v-for="project in others" :key="project.slug">
						<a
							:href="project.href"
							class="group hover:bg-secondary flex flex-col gap-3 p-6 transition-colors sm:flex-row sm:items-center sm:justify-between"
						>
							<div class="sm:max-w-md">
								<div class="flex items-center gap-3">
									<UiTitle :level="3">{{ project.name }}</UiTitle>
									<UiLabel tag="span" class="tracking-normal normal-case">
										{{ project.year }}
									</UiLabel>
								</div>
								<UiText variant="muted" class="mt-1">{{ project.tagline }}</UiText>
							</div>
							<div class="flex items-center gap-4">
								<div class="hidden flex-wrap gap-1.5 sm:flex">
									<UiBadge v-for="tech in project.stack" :key="tech">
										{{ tech }}
									</UiBadge>
								</div>
								<ArrowUpRight
									class="text-muted-foreground size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								/>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
	</main>
</template>
