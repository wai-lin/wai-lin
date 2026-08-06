declare const process: { env: Record<string, string | undefined> };

export default defineNitroPlugin(() => {
	const config = useRuntimeConfig();
	const studioAuth = (config as Record<string, unknown>).studio as
		| { auth?: { github?: { clientId?: string; clientSecret?: string } } }
		| undefined;

	if (!studioAuth?.auth) return;

	const envMap: Record<string, string | undefined> = {
		STUDIO_GITHUB_CLIENT_ID: studioAuth.auth.github?.clientId,
		STUDIO_GITHUB_CLIENT_SECRET: studioAuth.auth.github?.clientSecret,
	};

	for (const [key, value] of Object.entries(envMap)) {
		if (value && !process.env[key]) {
			process.env[key] = value;
		}
	}
});
