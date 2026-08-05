<script setup lang="ts">
const { data: skills } = await useAsyncData("skills", () => {
	return queryCollection("skills").first();
});

const skillGroups = computed(() => {
	return skills.value?.groups ?? [];
});

const description = "The languages, frameworks and tools I use to design, build and ship software.";

useSeoMeta({
	title: "Skills",
	ogTitle: "Skills",
	description,
	ogDescription: description,
	ogImage: "/og-skills.png",
	twitterCard: "summary_large_image",
});
</script>

<template>
	<main>
		<PageHeader
			eyebrow="Skills"
			title="Tools of the trade"
			description="A snapshot of the technologies I reach for most often, grouped by where they sit in the stack."
		/>

		<section>
			<div class="mx-auto max-w-5xl px-6 py-16">
				<div
					class="border-border bg-border grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2"
				>
					<div v-for="group in skillGroups" :key="group.category" class="bg-card p-8">
						<div class="flex items-baseline justify-between">
							<UiTitle :level="3">{{ group.category }}</UiTitle>
							<UiLabel tag="span" class="tracking-normal normal-case">
								{{ group.skills.length.toString().padStart(2, "0") }}
							</UiLabel>
						</div>
						<UiText variant="muted" class="mt-2">{{ group.description }}</UiText>
						<ul class="mt-5 flex flex-wrap gap-2">
							<li
								v-for="skill in group.skills"
								:key="skill"
								class="border-border bg-background rounded-md border px-3 py-1.5 text-sm"
							>
								{{ skill }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
