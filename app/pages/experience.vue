<script setup lang="ts">
const { data: experiences } = await useAsyncData("experiences", () => {
	return queryCollection("experiences").order("stem", "DESC").all();
});

const description =
	"Work history and professional experience — the teams, roles and problems I have worked on over the years.";

useSeoMeta({
	title: "Experience",
	ogTitle: "Experience",
	description,
	ogDescription: description,
	ogImage: "/og-experience.png",
	twitterCard: "summary_large_image",
});
</script>

<template>
	<main>
		<PageHeader
			eyebrow="Experience"
			title="Where I've worked"
			description="A timeline of the teams I have been part of and the impact I helped create along the way."
		/>

		<section>
			<div class="mx-auto max-w-5xl px-6 py-16">
				<ol class="relative">
					<li
						v-for="(exp, index) in experiences"
						:key="exp.company"
						class="border-border relative border-l pb-12 pl-8 last:pb-0 md:pl-12"
					>
						<span
							class="border-background bg-accent absolute top-1.5 -left-1.5 size-3 rounded-full border-2"
							aria-hidden="true"
						/>
						<div class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
							<div>
								<UiTitle :level="2" class="text-xl">{{ exp.role }}</UiTitle>
								<UiText variant="muted" tag="p">
									<span class="text-foreground">{{ exp.company }}</span> &middot; {{ exp.location }}
								</UiText>
							</div>
							<UiLabel tag="span" class="md:whitespace-nowrap">{{ exp.period }}</UiLabel>
						</div>

						<UiText class="mt-4 max-w-2xl">{{ exp.summary }}</UiText>

						<UiText variant="muted" tag="ul" class="mt-4 max-w-2xl space-y-2">
							<li v-for="highlight in exp.highlights" :key="highlight" class="flex gap-3">
								<span
									class="bg-muted-foreground mt-2 size-1 shrink-0 rounded-full"
									aria-hidden="true"
								/>
								<span class="text-pretty">{{ highlight }}</span>
							</li>
						</UiText>

						<div class="mt-5 flex flex-wrap gap-1.5">
							<UiBadge v-for="tech in exp.stack" :key="tech">
								{{ tech }}
							</UiBadge>
						</div>
						<span class="sr-only">{{ `Position ${index + 1} of ${experiences?.length}` }}</span>
					</li>
				</ol>
			</div>
		</section>
	</main>
</template>
