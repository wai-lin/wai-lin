<template>
	<article
		class="w-full max-w-[unset] prose prose- prose-zinc text-zinc-800 dark:(prose-white text-zinc-300)"
	>
		<ContentDoc>
			<template #empty>
				<p class="flex items-center gap-2">
					<span class="i-solar-confounded-square-line-duotone text-3xl text-teal-700" />
					<span>No content.</span>
				</p>
			</template>
		</ContentDoc>
	</article>
</template>

<style>
.prose h1 {
	@apply mb-10;
}

.prose code {
	@apply bg-teal-700! text-zinc-200! px-1 rounded-sm;
}
.prose code::before,
.prose code::after {
	@apply content-[unset]!;
}

pre.shiki {
	@apply bg-zinc-900;
}
pre.shiki code {
	@apply bg-[unset]!;
}
</style>
