import { defineContentConfig, defineCollection } from "@nuxt/content";
import z from "zod";

export default defineContentConfig({
	collections: {
		personalBio: defineCollection({
			type: "data",
			source: "personal-bio.yaml",
			schema: z.object({
				name: z.string(),
				email: z.string(),
				phone: z.string(),
				address: z.string(),
			}),
		}),
		blogs: defineCollection({
			type: "page",
			source: "blogs/*.md",
			schema: z.object({
				tags: z.array(z.string()),
				image: z.string(),
				date: z.date(),
			}),
		}),
	},
});
