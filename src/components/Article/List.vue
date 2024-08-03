<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";

type Props = { query?: QueryBuilderParams };
const props = defineProps<Props>();
</script>

<template>
	<ContentList path="/articles" :query="props.query">
		<template #default="{ list }">
			<NuxtLink
				v-for="article in list"
				:key="article._path"
				:to="article._path"
				:class="[
					'block mb-8 px-8 py-4 w-full',
					'border-b border-dashed border-slate-600',
					'hover:(border-teal-500 text-slate-300)',
					'visited:(bg-teal-600 text-slate-600)',
				]"
			>
				<UiHeading order="4" :title="article.title" />
				<p class="mt-2 text-slate-500">{{ article.description }}</p>
			</NuxtLink>
		</template>

		<template #not-found>
			<p>No articles found.</p>
		</template>
	</ContentList>
</template>
