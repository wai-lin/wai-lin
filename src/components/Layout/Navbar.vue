<script setup lang="ts">
const NavLinks = [
	{ title: "WaiLin", to: "/", exact: true, useHeading: true },
	{ title: "Articles", to: "/articles", exact: false, useHeading: false },
];
const SideLinks = [
	{
		icon: "i-mynaui-brand-github",
		href: "https://github.com/wai-lin",
	},
	{
		icon: "i-mynaui-brand-linkedin",
		href: "https://www.linkedin.com/in/wailin-aung/",
	},
];
const activeClass = "text-teal-500 underline";
</script>

<template>
	<nav
		class="h-20 flex items-end justify-between max-w-90ch mx-auto px-4 lg:px-0"
	>
		<article class="flex items-end justify-start gap-4">
			<NuxtLink
				v-for="link in NavLinks"
				:key="link.title"
				:to="link.to"
				:active-class="!link.exact ? activeClass : ''"
				:exact-active-class="link.exact ? activeClass : ''"
				:class="[
					'decoration-wavy underline-offset-4',
					'hover:(text-teal-600 underline)',
					'active:(text-teal-500)',
				]"
			>
				<UiHeading v-if="link.useHeading" order="5" :title="link.title" />
				<span v-else>{{ link.title }}</span>
			</NuxtLink>
		</article>

		<article class="flex items-center gap-4">
			<a
				v-for="link in SideLinks"
				:key="link.href"
				:href="link.href"
				target="_blank"
			>
				<span :class="[link.icon, 'block text-2xl']" />
			</a>
		</article>
	</nav>
</template>
