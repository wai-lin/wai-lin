<template>
	<div class="flex min-h-screen flex-col">
		<SiteNavBar />
		<div class="flex-1">
			<slot />
		</div>
		<SiteFooter />
	</div>
</template>
