export default defineNuxtRouteMiddleware((to) => {
	const page = Number(to.query?.page || 0);
	if (page <= 0) return navigateTo(`/articles?page=1`);
});
