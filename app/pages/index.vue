<script setup lang="ts">
import { ArrowUpRight, ArrowRight } from "@lucide/vue";

const { data: profile } = await useAsyncData("profile", () => {
	return queryCollection("profile").first();
});

const { data: currentRole } = await useAsyncData("experiences-home", () => {
	return queryCollection("experiences").order("stem", "DESC").first();
});

const { data: projects } = await useAsyncData("projects-home", () => {
	return queryCollection("projects").order("stem", "DESC").all();
});

const { data: skills } = await useAsyncData("skills-home", () => {
	return queryCollection("skills").first();
});

const { data: latestPost } = await useAsyncData("latest-post", () => {
	return queryCollection("blogs").order("date", "DESC").first();
});

const { data: education } = await useAsyncData("education-home", () => {
	return queryCollection("education").all();
});

const { data: achievements } = await useAsyncData("achievements-home", () => {
	return queryCollection("achievements").first();
});

const featured = computed(() => {
	return (projects.value ?? []).filter((p) => p.featured).slice(0, 3);
});

const longBio = computed(() => {
	return profile.value?.longBio?.slice(1) ?? [];
});

const skillGroups = computed(() => {
	return skills.value?.groups ?? [];
});

useSeoMeta({
	title: computed(() => `${profile.value?.name} — ${profile.value?.role}`),
	ogTitle: computed(() => `${profile.value?.name} — ${profile.value?.role}`),
	description: computed(() => profile.value?.shortBio),
	ogDescription: computed(() => profile.value?.shortBio),
	ogImage: "/og-default.png",
	twitterCard: "summary_large_image",
});
</script>

<template>
	<main v-if="profile">
		<!-- Hero -->
		<section class="border-border border-b">
			<div
				class="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.5fr_1fr] md:items-center md:py-24"
			>
				<div>
					<UiLabel color="accent" tag="p">{{ profile.availability }}</UiLabel>
					<UiTitle :level="1" display class="mt-5">{{ profile.name }}</UiTitle>
					<UiText variant="muted" tag="p" class="mt-3 font-mono">
						{{ profile.role }} &middot; {{ profile.location }}
					</UiText>
					<UiText class="mt-6 max-w-xl">{{ profile.shortBio }}</UiText>
					<div class="mt-8 flex flex-wrap items-center gap-3">
						<NuxtLink
							to="/projects"
							class="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
						>
							View projects
							<ArrowRight class="size-4" />
						</NuxtLink>
						<a
							:href="`mailto:${profile.email}`"
							class="border-border hover:bg-secondary inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors"
						>
							Get in touch
						</a>
					</div>
				</div>

				<div class="order-first md:order-last">
					<div
						class="border-border bg-muted relative mx-auto aspect-square w-48 overflow-hidden rounded-xl border md:w-full"
					>
						<img
							src="/portrait.webp"
							:alt="`Portrait of ${profile.name}`"
							class="size-full object-cover grayscale"
							loading="eager"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Currently -->
		<section v-if="currentRole" class="border-border border-b">
			<div
				class="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between"
			>
				<UiLabel tag="p">Currently</UiLabel>
				<UiText variant="small">
					<span class="font-medium">{{ currentRole.role }}</span> at
					<span class="font-medium">{{ currentRole.company }}</span>
					<span class="text-muted-foreground"> &middot; {{ currentRole.period }}</span>
				</UiText>
			</div>
		</section>

		<!-- About -->
		<section class="border-border border-b">
			<div class="mx-auto max-w-5xl px-6 py-16">
				<UiText tag="div" class="max-w-2xl space-y-6">
					<p v-for="(paragraph, i) in longBio" :key="i">
						{{ paragraph }}
					</p>
				</UiText>
			</div>
		</section>

		<!-- Education -->
		<section v-if="education?.length" class="border-border border-b">
			<div class="mx-auto max-w-5xl px-6 py-16">
				<UiTitle :level="2">Education</UiTitle>
				<div class="mt-8 flex flex-col gap-4">
					<div
						v-for="edu in education"
						:key="edu.schoolName"
						class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
					>
						<div>
							<UiTitle :level="3" class="font-medium tracking-normal">{{ edu.degree }}</UiTitle>
							<UiText variant="muted">{{ edu.schoolName }}</UiText>
						</div>
						<UiLabel tag="span" class="tracking-normal normal-case">{{ edu.year }}</UiLabel>
					</div>
				</div>
			</div>
		</section>

		<!-- Achievements -->
		<section v-if="achievements?.items?.length" class="border-border border-b">
			<div class="mx-auto max-w-5xl px-6 py-16">
				<UiTitle :level="2">Achievements</UiTitle>
				<UiText variant="muted" tag="ul" class="mt-8 flex flex-col gap-3">
					<li v-for="item in achievements.items" :key="item" class="flex gap-3">
						<span
							class="bg-muted-foreground mt-2 size-1 shrink-0 rounded-full"
							aria-hidden="true"
						/>
						<span>{{ item }}</span>
					</li>
				</UiText>
			</div>
		</section>

		<!-- Featured projects -->
		<section class="border-border border-b">
			<div class="mx-auto max-w-5xl px-6 py-16">
				<div class="flex items-end justify-between">
					<UiTitle :level="2">Selected work</UiTitle>
					<NuxtLink
						to="/projects"
						class="group text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
					>
						All projects
						<ArrowRight class="size-4 transition-transform group-hover:translate-x-0.5" />
					</NuxtLink>
				</div>

				<div
					class="border-border bg-border mt-8 grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-3"
				>
					<NuxtLink
						v-for="project in featured"
						:key="project.slug"
						to="/projects"
						class="group bg-card hover:bg-secondary flex flex-col gap-4 p-6 transition-colors"
					>
						<div class="flex items-center justify-between">
							<UiLabel tag="span" class="tracking-normal normal-case">{{ project.year }}</UiLabel>
							<ArrowUpRight
								class="text-muted-foreground size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							/>
						</div>
						<div>
							<UiTitle :level="3">{{ project.name }}</UiTitle>
							<UiText variant="muted" class="mt-1">{{ project.tagline }}</UiText>
						</div>
						<div class="mt-auto flex flex-wrap gap-1.5 pt-2">
							<UiBadge v-for="tech in project.stack.slice(0, 3)" :key="tech">
								{{ tech }}
							</UiBadge>
						</div>
					</NuxtLink>
				</div>
			</div>
		</section>

		<!-- Skills snapshot -->
		<section class="border-border border-b">
			<div class="mx-auto max-w-5xl px-6 py-16">
				<div class="flex items-end justify-between">
					<UiTitle :level="2">What I work with</UiTitle>
					<NuxtLink
						to="/skills"
						class="group text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
					>
						All skills
						<ArrowRight class="size-4 transition-transform group-hover:translate-x-0.5" />
					</NuxtLink>
				</div>

				<div class="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div v-for="group in skillGroups" :key="group.category">
						<UiLabel color="accent" tag="h3">{{ group.category }}</UiLabel>
						<UiText variant="muted" tag="ul" class="mt-3 flex flex-col gap-1.5">
							<li v-for="skill in group.skills.slice(0, 5)" :key="skill">
								{{ skill }}
							</li>
						</UiText>
					</div>
				</div>
			</div>
		</section>

		<!-- Latest writing -->
		<section v-if="latestPost" class="border-border border-b">
			<div class="mx-auto max-w-5xl px-6 py-16">
				<div class="flex items-end justify-between">
					<UiTitle :level="2">Latest writing</UiTitle>
					<NuxtLink
						to="/blogs"
						class="group text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
					>
						All posts
						<ArrowRight class="size-4 transition-transform group-hover:translate-x-0.5" />
					</NuxtLink>
				</div>

				<NuxtLink
					:to="latestPost.path"
					class="group border-border bg-card hover:bg-secondary mt-8 flex flex-col gap-3 rounded-xl border p-8 transition-colors"
				>
					<UiLabel tag="div" class="flex items-center gap-3 tracking-normal normal-case">
						<span>{{ formatDate(latestPost.date) }}</span>
						<span aria-hidden="true">&middot;</span>
						<span>{{ latestPost.readingTime }}</span>
					</UiLabel>
					<UiTitle :level="3" class="group-hover:text-accent text-xl text-balance">
						{{ latestPost.title }}
					</UiTitle>
					<UiText variant="muted" class="max-w-2xl">{{ latestPost.description }}</UiText>
				</NuxtLink>
			</div>
		</section>
	</main>
</template>
