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
								<h2 class="text-xl font-semibold tracking-tight">{{ exp.role }}</h2>
								<p class="text-muted-foreground">
									<span class="text-foreground">{{ exp.company }}</span> &middot; {{ exp.location }}
								</p>
							</div>
							<span class="text-muted-foreground font-mono text-xs md:whitespace-nowrap">
								{{ exp.period }}
							</span>
						</div>

						<p class="mt-4 max-w-2xl leading-relaxed text-pretty">{{ exp.summary }}</p>

						<ul class="mt-4 max-w-2xl space-y-2">
							<li
								v-for="highlight in exp.highlights"
								:key="highlight"
								class="text-muted-foreground flex gap-3 text-sm"
							>
								<span
									class="bg-muted-foreground mt-2 size-1 shrink-0 rounded-full"
									aria-hidden="true"
								/>
								<span class="text-pretty">{{ highlight }}</span>
							</li>
						</ul>

						<div class="mt-5 flex flex-wrap gap-1.5">
							<span
								v-for="tech in exp.stack"
								:key="tech"
								class="border-border text-muted-foreground rounded border px-2 py-0.5 font-mono text-[11px]"
							>
								{{ tech }}
							</span>
						</div>
						<span class="sr-only">{{ `Position ${index + 1} of ${experiences?.length}` }}</span>
					</li>
				</ol>
			</div>
		</section>
	</main>
</template>
