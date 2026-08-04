import { defineContentConfig, defineCollection } from "@nuxt/content";
import z from "zod";

export default defineContentConfig({
	collections: {
		profile: defineCollection({
			type: "data",
			source: "profile.yaml",
			schema: z.object({
				name: z.string(),
				role: z.string(),
				location: z.string(),
				availability: z.string(),
				email: z.string(),
				shortBio: z.string(),
				longBio: z.string(),
				socials: z.array(
					z.object({
						label: z.string(),
						handle: z.string(),
						href: z.string(),
					}),
				),
				image: z.string(),
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
