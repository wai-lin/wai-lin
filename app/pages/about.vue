<script setup lang="ts">
import { ArrowRight } from "@lucide/vue";

const facts = [
	{ label: "Based in", value: profile.location },
	{ label: "Focus", value: "Full-stack product engineering" },
	{ label: "Experience", value: "8+ years shipping software" },
	{ label: "Status", value: profile.availability },
];

useHead({
	title: "About",
	meta: [
		{
			name: "description",
			content: `Learn more about ${profile.name}, a ${profile.role.toLowerCase()} based in ${profile.location}.`,
		},
	],
});
</script>

<template>
	<main>
		<PageHeader eyebrow="About" title="A little about me" :description="profile.shortBio" />

		<section>
			<div class="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.6fr]">
				<div class="space-y-8">
					<div class="border-border bg-muted overflow-hidden rounded-xl border">
						<img
							src="/portrait.png"
							:alt="`Portrait of ${profile.name}`"
							class="aspect-square w-full object-cover"
						/>
					</div>

					<dl class="divide-border border-border divide-y rounded-xl border">
						<div
							v-for="fact in facts"
							:key="fact.label"
							class="flex items-center justify-between gap-4 px-4 py-3"
						>
							<dt class="text-muted-foreground font-mono text-xs tracking-widest uppercase">
								{{ fact.label }}
							</dt>
							<dd class="text-right text-sm">{{ fact.value }}</dd>
						</div>
					</dl>
				</div>

				<div>
					<div class="max-w-2xl space-y-6 text-lg leading-relaxed text-pretty">
						<p v-for="(paragraph, i) in profile.longBio" :key="i">
							{{ paragraph }}
						</p>
					</div>

					<div class="mt-10 flex flex-wrap gap-3">
						<NuxtLink
							to="/experience"
							class="group bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
						>
							See my experience
							<ArrowRight class="size-4 transition-transform group-hover:translate-x-0.5" />
						</NuxtLink>
						<a
							:href="`mailto:${profile.email}`"
							class="border-border hover:bg-secondary inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors"
						>
							Say hello
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
