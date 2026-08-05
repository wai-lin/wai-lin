<script setup lang="ts">
import { ArrowRight } from "@lucide/vue";

const { data: profile } = await useAsyncData("profile-about", () => {
	return queryCollection("profile").first();
});

const { data: education } = await useAsyncData("education-about", () => {
	return queryCollection("education").all();
});

const { data: achievements } = await useAsyncData("achievements-about", () => {
	return queryCollection("achievements").first();
});

const facts = computed(() => {
	if (!profile.value) return [];
	return [
		{ label: "Based in", value: profile.value.location },
		{ label: "Focus", value: "Full-stack product engineering" },
		{ label: "Experience", value: "5+ years shipping software" },
		{ label: "Status", value: profile.value.availability },
	];
});

useHead({
	title: "About",
	meta: [
		{
			name: "description",
			content: computed(() =>
				profile.value
					? `Learn more about ${profile.value.name}, a ${profile.value.role.toLowerCase()} based in ${profile.value.location}.`
					: "",
			),
		},
	],
});
</script>

<template>
	<main v-if="profile">
		<PageHeader eyebrow="About" title="A little about me" :description="profile.shortBio" />

		<section>
			<div class="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.6fr]">
				<div class="space-y-8">
					<div class="border-border bg-muted overflow-hidden rounded-xl border">
						<img
							src="/portrait.webp"
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

					<!-- Education -->
					<div v-if="education?.length" class="mt-10">
						<h2 class="text-muted-foreground font-mono text-xs tracking-widest uppercase">
							Education
						</h2>
						<div class="mt-4 flex flex-col gap-3">
							<div v-for="edu in education" :key="edu.schoolName">
								<p class="font-medium">{{ edu.degree }}</p>
								<p class="text-muted-foreground text-sm">{{ edu.schoolName }} · {{ edu.year }}</p>
							</div>
						</div>
					</div>

					<!-- Achievements -->
					<div v-if="achievements?.items?.length" class="mt-10">
						<h2 class="text-muted-foreground font-mono text-xs tracking-widest uppercase">
							Achievements
						</h2>
						<ul class="text-muted-foreground mt-4 flex flex-col gap-2 text-sm">
							<li v-for="item in achievements.items" :key="item" class="flex gap-3">
								<span
									class="bg-muted-foreground mt-2 size-1 shrink-0 rounded-full"
									aria-hidden="true"
								/>
								<span>{{ item }}</span>
							</li>
						</ul>
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
