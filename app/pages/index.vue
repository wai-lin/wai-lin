<script setup lang="ts">
import { ArrowUpRight, ArrowRight } from "@lucide/vue";

const { data: profile } = await useAsyncData("profile", () => {
	return queryCollection("profile").first();
});

const { data: experiences } = await useAsyncData("experiences-home", () => {
	return queryCollection("experiences").all();
});

const { data: projects } = await useAsyncData("projects-home", () => {
	return queryCollection("projects").all();
});

const { data: skills } = await useAsyncData("skills-home", () => {
	return queryCollection("skills").first();
});

const { data: latestPost } = await useAsyncData("latest-post", () => {
	return queryCollection("blogs").order("date", "DESC").first();
});

const featured = computed(() => {
	return (projects.value ?? []).filter((p) => p.featured).slice(0, 3);
});

const currentRole = computed(() => {
	return experiences.value?.[0];
});

const skillGroups = computed(() => {
	return skills.value?.groups ?? [];
});

useHead({
	title: computed(() => `${profile.value?.name} — ${profile.value?.role}`),
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
					<p class="text-accent font-mono text-xs tracking-widest uppercase">
						{{ profile.availability }}
					</p>
					<h1
						class="mt-5 text-4xl leading-[1.1] font-semibold tracking-tight text-balance md:text-6xl"
					>
						{{ profile.name }}
					</h1>
					<p class="text-muted-foreground mt-3 font-mono text-sm">
						{{ profile.role }} &middot; {{ profile.location }}
					</p>
					<p class="mt-6 max-w-xl text-lg leading-relaxed text-pretty">
						{{ profile.shortBio }}
					</p>
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
							src="/portrait.png"
							:alt="`Portrait of ${profile.name}`"
							class="size-full object-cover"
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
				<p class="text-muted-foreground font-mono text-xs tracking-widest uppercase">Currently</p>
				<p class="text-sm">
					<span class="font-medium">{{ currentRole.role }}</span> at
					<span class="font-medium">{{ currentRole.company }}</span>
					<span class="text-muted-foreground"> &middot; {{ currentRole.period }}</span>
				</p>
			</div>
		</section>

		<!-- Featured projects -->
		<section class="border-border border-b">
			<div class="mx-auto max-w-5xl px-6 py-16">
				<div class="flex items-end justify-between">
					<h2 class="text-2xl font-semibold tracking-tight">Selected work</h2>
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
							<span class="text-muted-foreground font-mono text-xs">{{ project.year }}</span>
							<ArrowUpRight
								class="text-muted-foreground size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							/>
						</div>
						<div>
							<h3 class="text-lg font-semibold tracking-tight">{{ project.name }}</h3>
							<p class="text-muted-foreground mt-1 text-sm text-pretty">
								{{ project.tagline }}
							</p>
						</div>
						<div class="mt-auto flex flex-wrap gap-1.5 pt-2">
							<span
								v-for="tech in project.stack.slice(0, 3)"
								:key="tech"
								class="border-border text-muted-foreground rounded border px-2 py-0.5 font-mono text-[11px]"
							>
								{{ tech }}
							</span>
						</div>
					</NuxtLink>
				</div>
			</div>
		</section>

		<!-- Skills snapshot -->
		<section class="border-border border-b">
			<div class="mx-auto max-w-5xl px-6 py-16">
				<div class="flex items-end justify-between">
					<h2 class="text-2xl font-semibold tracking-tight">What I work with</h2>
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
						<h3 class="text-accent font-mono text-xs tracking-widest uppercase">
							{{ group.category }}
						</h3>
						<ul class="text-muted-foreground mt-3 flex flex-col gap-1.5 text-sm">
							<li v-for="skill in group.skills.slice(0, 5)" :key="skill">
								{{ skill }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Latest writing -->
		<section v-if="latestPost" class="border-border border-b">
			<div class="mx-auto max-w-5xl px-6 py-16">
				<div class="flex items-end justify-between">
					<h2 class="text-2xl font-semibold tracking-tight">Latest writing</h2>
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
					<div class="text-muted-foreground flex items-center gap-3 font-mono text-xs">
						<span>{{ formatDate(latestPost.date) }}</span>
						<span aria-hidden="true">&middot;</span>
						<span>{{ latestPost.readingTime }}</span>
					</div>
					<h3 class="group-hover:text-accent text-xl font-semibold tracking-tight text-balance">
						{{ latestPost.title }}
					</h3>
					<p class="text-muted-foreground max-w-2xl text-pretty">{{ latestPost.description }}</p>
				</NuxtLink>
			</div>
		</section>
	</main>
</template>
