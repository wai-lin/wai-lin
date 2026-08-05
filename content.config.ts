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
				longBio: z.array(z.string()),
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
		experiences: defineCollection({
			type: "data",
			source: "experiences/*.yml",
			schema: z.object({
				company: z.string(),
				role: z.string(),
				period: z.string(),
				location: z.string(),
				summary: z.string(),
				highlights: z.array(z.string()),
				stack: z.array(z.string()),
			}),
		}),
		projects: defineCollection({
			type: "data",
			source: "projects/*.yml",
			schema: z.object({
				slug: z.string(),
				name: z.string(),
				tagline: z.string(),
				description: z.string(),
				year: z.string(),
				role: z.string(),
				stack: z.array(z.string()),
				featured: z.boolean(),
				href: z.string(),
				repo: z.string().optional(),
			}),
		}),
		skills: defineCollection({
			type: "data",
			source: "skills.yaml",
			schema: z.object({
				groups: z.array(
					z.object({
						category: z.string(),
						description: z.string(),
						skills: z.array(z.string()),
					}),
				),
			}),
		}),
		education: defineCollection({
			type: "data",
			source: "education/*.yml",
			schema: z.object({
				schoolName: z.string(),
				degree: z.string(),
				year: z.string(),
			}),
		}),
		achievements: defineCollection({
			type: "data",
			source: "achievements.yml",
			schema: z.object({
				items: z.array(z.string()),
			}),
		}),
		blogs: defineCollection({
			type: "page",
			source: "blogs/*.md",
			schema: z.object({
				tags: z.array(z.string()),
				readingTime: z.string(),
				date: z.date(),
			}),
		}),
	},
});
