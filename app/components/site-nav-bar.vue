<script setup lang="ts">
import { Menu, X } from "@lucide/vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/experience", label: "Experience" },
	{ href: "/projects", label: "Projects" },
	{ href: "/skills", label: "Skills" },
	{ href: "/blogs", label: "Blog" },
	{ href: "/cv", label: "CV" },
];

const route = useRoute();
const open = ref(false);

const { data: profile } = await useAsyncData("profile-nav", () => {
	return queryCollection("profile").first();
});

function isActive(href: string) {
	return href === "/" ? route.path === "/" : route.path.startsWith(href);
}
</script>

<template>
	<header
		class="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md print:hidden"
	>
		<nav aria-label="Primary" class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
			<NuxtLink to="/" class="group flex flex-col leading-tight">
				<UiTitle :level="6" class="!text-sm">{{ profile?.name }}</UiTitle>
				<UiLabel tag="span">{{ profile?.role }}</UiLabel>
			</NuxtLink>

			<ul class="hidden items-center gap-1 md:flex">
				<li v-for="link in links" :key="link.href">
					<NuxtLink
						:to="link.href"
						:class="
							cn(
								'rounded-md px-3 py-2 text-sm transition-colors',
								isActive(link.href)
									? 'text-foreground'
									: 'text-muted-foreground hover:text-foreground',
							)
						"
					>
						<span v-if="isActive(link.href)" class="text-accent mr-1 font-mono" aria-hidden="true">
							/
						</span>
						{{ link.label }}
					</NuxtLink>
				</li>
			</ul>

			<button
				type="button"
				class="text-foreground inline-flex items-center justify-center rounded-md p-2 md:hidden"
				:aria-expanded="open"
				:aria-label="open ? 'Close menu' : 'Open menu'"
				@click="open = !open"
			>
				<X v-if="open" class="size-5" />
				<Menu v-else class="size-5" />
			</button>
		</nav>

		<div v-if="open" class="border-border border-t md:hidden">
			<ul class="mx-auto flex max-w-5xl flex-col px-6 py-2">
				<li v-for="link in links" :key="link.href">
					<NuxtLink
						:to="link.href"
						:class="
							cn(
								'block rounded-md px-2 py-3 text-sm transition-colors',
								isActive(link.href)
									? 'text-foreground'
									: 'text-muted-foreground hover:text-foreground',
							)
						"
						@click="open = false"
					>
						{{ link.label }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</header>
</template>
