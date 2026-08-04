import { defineConfig } from "vite-plus";

export default defineConfig({
	staged: {
		"*": "vp check --fix",
	},
	fmt: {
		sortImports: true,
		sortPackageJson: true,
		sortTailwindcss: true,
		trailingComma: "all",
		useTabs: true,
	},
	lint: {
		jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
		rules: {
			"vite-plus/prefer-vite-plus-imports": "error",
			"typescript/no-deprecated": "error",
		},
		options: { typeAware: true, typeCheck: true },
	},
});
