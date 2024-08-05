<script setup lang="ts">
const NavLinks = [
	{ title: "Wai Lin", to: "/", exact: true, useHeading: true },
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
const activeClass = "text-teal-600 underline dark:(text-teal-500)";

const colorMode = useColorMode();
function toggleColorMode() {
	if (colorMode.value === "dark") colorMode.preference = "light";
	else colorMode.preference = "dark";
}
</script>

<template>
	<nav
		class="h-20 flex items-center justify-between max-w-90ch mx-auto px-4 lg:px-0 border-b border-zinc-300"
	>
		<article class="flex items-end justify-start gap-4">
			<NuxtLink
				v-for="link in NavLinks"
				:key="link.title"
				:to="link.to"
				:active-class="!link.exact ? activeClass : ''"
				:exact-active-class="link.exact ? activeClass : ''"
				:class="[
					'decoration-wavy underline-offset-2',
					'hover:(text-teal-700 underline dark:(text-teal-400 underline))',
					'active:(text-teal-600 dark:(text-teal-500))',
				]"
			>
				<UiHeading v-if="link.useHeading" order="5" :title="link.title" />
				<span v-else class="font-bold">{{ link.title }}</span>
			</NuxtLink>
		</article>

		<article class="flex items-center gap-4">
			<a
				v-for="link in SideLinks"
				:key="link.href"
				:href="link.href"
				target="_blank"
				class="hover:(text-teal-700 dark:(text-teal-400)) active:(text-teal-600 dark:(text-teal-500))"
			>
				<span :class="[link.icon, 'block text-2xl']" />
			</a>

			<ClientOnly>
				<button
					@click="toggleColorMode"
					:class="[
						'text-xl p-1 rounded-full',
						'hover:(bg-zinc-500 text-teal-700 bg-opacity-20 dark:(bg-zinc-600 text-teal-400 bg-opacity-20))',
						'active:(bg-opacity-30 text-teal-600 dark:(bg-opacity-30 text-teal-500))',
					]"
				>
					<span v-if="colorMode.value === 'light'" class="i-mynaui-sun block" />
					<span v-else class="i-mynaui-moon block" />
				</button>
			</ClientOnly>
		</article>
	</nav>
</template>
