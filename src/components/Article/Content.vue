<template>
	<article class="w-full max-w-[unset] prose prose-white text-zinc-400">
		<ContentDoc />
	</article>
</template>

<style>
code {
	@apply bg-teal-700! px-1 rounded-sm;
}
code::before,
code::after {
	@apply content-[unset]!;
}

pre.shiki {
	@apply bg-zinc-900;
}
pre.shiki code {
	@apply bg-[unset]!;
}
</style>
