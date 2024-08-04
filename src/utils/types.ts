import type { ParsedContent } from "@nuxt/content";

export interface Article extends ParsedContent {
	title: string;
	description: string;
	date: string;
}
