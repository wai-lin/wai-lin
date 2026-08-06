<script setup lang="ts">
import { MapPin, Mail } from "@lucide/vue";

const { data: profile } = await useAsyncData("profile-cv", () => {
	return queryCollection("profile").first();
});

const { data: experiences } = await useAsyncData("experiences-cv", () => {
	return queryCollection("experiences").order("stem", "DESC").all();
});

const { data: skills } = await useAsyncData("skills-cv", () => {
	return queryCollection("skills").first();
});

const { data: education } = await useAsyncData("education-cv", () => {
	return queryCollection("education").all();
});

const { data: achievements } = await useAsyncData("achievements-cv", () => {
	return queryCollection("achievements").first();
});

const skillGroups = computed(() => {
	return skills.value?.groups ?? [];
});

useSeoMeta({
	title: computed(() => `CV — ${profile.value?.name}`),
	ogTitle: computed(() => `CV — ${profile.value?.name}`),
	description: computed(() =>
		profile.value ? `Curriculum vitae for ${profile.value.name}, ${profile.value.role}.` : "",
	),
	ogDescription: computed(() =>
		profile.value ? `Curriculum vitae for ${profile.value.name}, ${profile.value.role}.` : "",
	),
	ogImage: "/og-cv.png",
	twitterCard: "summary_large_image",
});
</script>

<template>
	<div v-if="profile" class="mx-auto max-w-3xl px-6 py-12 md:py-16 print:py-0">
		<!-- Action bar (hidden when printing) -->
		<div
			class="border-border mb-10 flex flex-col gap-4 border-b pb-8 sm:flex-row sm:items-center sm:justify-between print:hidden"
		>
			<div>
				<UiLabel color="accent" tag="p">Curriculum Vitae</UiLabel>
			</div>
			<DownloadCvButton />
		</div>

		<!-- Resume document -->
		<article class="print:text-black">
			<header class="border-border border-b pb-6">
				<UiTitle :level="1">{{ profile.name }}</UiTitle>
				<UiText variant="muted" tag="p" class="mt-1 font-mono">{{ profile.role }}</UiText>
				<UiText variant="muted" tag="div" class="mt-4 flex flex-wrap gap-x-6 gap-y-2">
					<span class="inline-flex items-center gap-1.5">
						<MapPin class="size-4" aria-hidden="true" />
						{{ profile.location }}
					</span>
					<a
						:href="`mailto:${profile.email}`"
						class="hover:text-foreground inline-flex items-center gap-1.5"
					>
						<Mail class="size-4" aria-hidden="true" />
						{{ profile.email }}
					</a>
					<a
						v-for="s in profile.socials.filter((s) => s.label !== 'Email')"
						:key="s.label"
						:href="s.href"
						class="hover:text-foreground"
						target="_blank"
						rel="noreferrer"
					>
						{{ s.label }}: {{ s.handle }}
					</a>
				</UiText>
			</header>

			<!-- Summary -->
			<section class="border-border border-b py-6">
				<UiLabel tag="h2">Profile</UiLabel>
				<UiText class="mt-3">{{ profile.longBio[0] }}</UiText>
			</section>

			<!-- Experience -->
			<section class="border-border border-b py-6">
				<UiLabel tag="h2">Experience</UiLabel>
				<div class="mt-4 flex flex-col gap-6">
					<div
						v-for="(job, index) in experiences"
						:key="`${job.company}-${job.period}`"
						:class="{
							'cv-break-after': index === 3,
						}"
					>
						<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
							<UiTitle :level="3" class="font-medium tracking-normal">
								{{ job.role }}
								<span v-if="job.company" class="text-muted-foreground">· {{ job.company }}</span>
							</UiTitle>
							<UiLabel tag="span">{{ job.period }}</UiLabel>
						</div>
						<UiText
							variant="muted"
							tag="ul"
							v-if="job.highlights.length"
							class="mt-2 list-disc pl-5"
						>
							<li v-for="h in job.highlights" :key="h">{{ h }}</li>
						</UiText>
						<UiText variant="muted" tag="p" v-if="job.stack.length" class="mt-2 font-mono text-xs">
							{{ job.stack.join(" · ") }}
						</UiText>
					</div>
				</div>
			</section>

			<!-- Education -->
			<section v-if="education?.length" class="border-border border-b py-6">
				<UiLabel tag="h2">Education</UiLabel>
				<div class="mt-4 flex flex-col gap-4">
					<div v-for="edu in education" :key="edu.schoolName">
						<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
							<UiTitle :level="3" class="font-medium tracking-normal">{{ edu.degree }}</UiTitle>
							<UiLabel tag="span">{{ edu.year }}</UiLabel>
						</div>
						<UiText variant="muted">{{ edu.schoolName }}</UiText>
					</div>
				</div>
			</section>

			<!-- Skills -->
			<section class="border-border border-b py-6">
				<UiLabel tag="h2">Skills</UiLabel>
				<dl class="mt-4 flex flex-col gap-3">
					<div
						v-for="group in skillGroups"
						:key="group.category"
						class="flex flex-col gap-1 sm:flex-row sm:gap-4"
					>
						<dt class="w-32 shrink-0 text-sm font-medium">{{ group.category }}</dt>
						<UiText variant="muted" tag="dd">{{ group.skills.join(", ") }}</UiText>
					</div>
				</dl>
			</section>

			<!-- Achievements -->
			<section v-if="achievements?.items?.length" class="py-6">
				<UiLabel tag="h2">Achievements</UiLabel>
				<UiText variant="muted" tag="ul" class="mt-4 list-disc pl-5">
					<li v-for="item in achievements.items" :key="item">{{ item }}</li>
				</UiText>
			</section>
		</article>
	</div>
</template>
