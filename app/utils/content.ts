export const profile = {
	name: "Ravi Menon",
	role: "Full-Stack Software Engineer",
	location: "Berlin, Germany",
	availability: "Available for select freelance work",
	email: "hello@ravimenon.dev",
	shortBio:
		"I build fast, accessible products for the web. I care about the details that make software feel effortless — from database queries to the final pixel.",
	longBio: [
		"I am a full-stack engineer with over eight years of experience designing and shipping web applications used by millions of people. My focus is on the intersection of solid engineering and thoughtful product design — writing code that is maintainable, and building interfaces that people genuinely enjoy using.",
		"I have worked across early-stage startups and larger product teams, leading frontend architecture, building resilient backend services, and mentoring engineers along the way. I am happiest when I am close to the problem, talking to users, and iterating quickly.",
		"Outside of work you will usually find me contributing to open source, writing about the craft of software, or hiking somewhere without cell service.",
	],
	socials: [
		{ label: "GitHub", handle: "@ravimenon", href: "https://github.com" },
		{ label: "LinkedIn", handle: "in/ravimenon", href: "https://linkedin.com" },
		{ label: "X", handle: "@ravimenon", href: "https://x.com" },
		{ label: "Email", handle: "hello@ravimenon.dev", href: "mailto:hello@ravimenon.dev" },
	],
};

export type Experience = {
	company: string;
	role: string;
	period: string;
	location: string;
	summary: string;
	highlights: string[];
	stack: string[];
};

export const experiences: Experience[] = [
	{
		company: "Northwind Labs",
		role: "Staff Software Engineer",
		period: "2022 — Present",
		location: "Berlin (Remote)",
		summary:
			"Lead engineer on the core platform team, owning the frontend architecture and shared component systems used across five product surfaces.",
		highlights: [
			"Migrated a legacy monolith to a modular Next.js architecture, cutting page load times by 46%.",
			"Designed a design-token driven component library adopted by 30+ engineers.",
			"Introduced end-to-end type safety across the API boundary, reducing production incidents by a third.",
		],
		stack: ["TypeScript", "Next.js", "PostgreSQL", "tRPC", "AWS"],
	},
	{
		company: "Fathom Analytics",
		role: "Senior Frontend Engineer",
		period: "2019 — 2022",
		location: "Amsterdam",
		summary:
			"Built the real-time analytics dashboard and data visualization layer serving thousands of businesses.",
		highlights: [
			"Shipped a streaming charts engine handling 10k+ live data points without dropped frames.",
			"Led the accessibility overhaul that brought the product to WCAG 2.1 AA compliance.",
			"Reduced bundle size by 38% through aggressive code-splitting and dependency audits.",
		],
		stack: ["React", "D3", "WebSockets", "Node.js"],
	},
	{
		company: "Kettle & Co.",
		role: "Software Engineer",
		period: "2017 — 2019",
		location: "London",
		summary:
			"Full-stack engineer at a fintech startup building payment and reconciliation tooling for small businesses.",
		highlights: [
			"Built the invoicing product from zero to first paying customers.",
			"Implemented a background job system processing millions of transactions monthly.",
			"Owned the CI/CD pipeline and cut deploy times from 25 minutes to under 4.",
		],
		stack: ["Ruby on Rails", "React", "Redis", "Stripe"],
	},
];

export type Project = {
	slug: string;
	name: string;
	tagline: string;
	description: string;
	year: string;
	role: string;
	stack: string[];
	featured: boolean;
	href: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		slug: "orbit-scheduler",
		name: "Orbit",
		tagline: "A calendar that plans your week for you",
		description:
			"An intelligent scheduling app that automatically arranges focus blocks, meetings and breaks around your priorities. Built with an offline-first architecture and real-time sync.",
		year: "2024",
		role: "Creator & Lead Engineer",
		stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
		featured: true,
		href: "#",
		repo: "https://github.com",
	},
	{
		slug: "ledgerlite",
		name: "LedgerLite",
		tagline: "Open-source double-entry accounting engine",
		description:
			"A tiny, dependency-free accounting core with a friendly API. Handles multi-currency, immutable ledgers and financial reporting. Used by several indie SaaS products.",
		year: "2023",
		role: "Maintainer",
		stack: ["TypeScript", "Node.js", "SQLite"],
		featured: true,
		href: "#",
		repo: "https://github.com",
	},
	{
		slug: "pixelpush",
		name: "PixelPush",
		tagline: "Collaborative image optimization pipeline",
		description:
			"A drag-and-drop tool that compresses and converts images to modern formats in the browser using WebAssembly, with a shareable team workspace.",
		year: "2023",
		role: "Creator",
		stack: ["React", "WebAssembly", "Rust", "Vercel"],
		featured: true,
		href: "#",
	},
	{
		slug: "terra-cli",
		name: "Terra CLI",
		tagline: "A friendlier command line for cloud infra",
		description:
			"A developer tool that wraps common infrastructure workflows into a guided, interactive CLI experience with sane defaults and helpful errors.",
		year: "2022",
		role: "Creator",
		stack: ["Go", "Cobra", "Terraform"],
		featured: false,
		href: "#",
		repo: "https://github.com",
	},
	{
		slug: "notewell",
		name: "Notewell",
		tagline: "Markdown notes with local-first sync",
		description:
			"A minimalist note-taking app with a plain-text core, keyboard-driven navigation and conflict-free replicated sync across devices.",
		year: "2021",
		role: "Creator",
		stack: ["React", "CRDTs", "IndexedDB"],
		featured: false,
		href: "#",
	},
	{
		slug: "chorus",
		name: "Chorus",
		tagline: "Realtime code review for small teams",
		description:
			"A lightweight review tool that turns pull requests into live, threaded conversations with inline suggestions and presence.",
		year: "2020",
		role: "Contributor",
		stack: ["Vue", "Node.js", "WebSockets"],
		featured: false,
		href: "#",
	},
];

export type SkillGroup = {
	category: string;
	description: string;
	skills: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		category: "Languages",
		description: "The tools I reach for to express ideas in code.",
		skills: ["TypeScript", "JavaScript", "Go", "Rust", "Python", "SQL"],
	},
	{
		category: "Frontend",
		description: "Building interfaces that feel fast and considered.",
		skills: ["React", "Next.js", "Tailwind CSS", "Vue", "Framer Motion", "Accessibility"],
	},
	{
		category: "Backend",
		description: "Designing services that stay reliable under load.",
		skills: ["Node.js", "PostgreSQL", "Redis", "tRPC", "GraphQL", "REST"],
	},
	{
		category: "Infrastructure",
		description: "Shipping and operating software with confidence.",
		skills: ["AWS", "Vercel", "Docker", "Terraform", "CI/CD", "Observability"],
	},
];

export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	readingTime: string;
	tags: string[];
	content: string[];
};

export const posts: Post[] = [
	{
		slug: "type-safe-boundaries",
		title: "Designing type-safe boundaries between your frontend and backend",
		excerpt:
			"End-to-end type safety is one of the highest-leverage investments a product team can make. Here is how I think about drawing the line.",
		date: "2024-11-12",
		readingTime: "8 min read",
		tags: ["TypeScript", "Architecture"],
		content: [
			"One of the most common sources of bugs in web applications is the gap between what the server sends and what the client expects. For years we papered over that gap with hand-written types that drifted out of sync the moment someone changed a field.",
			"The fix is to treat the API boundary as a single source of truth. Whether you use tRPC, GraphQL codegen, or a shared schema package, the goal is the same: a change on the server should surface as a type error on the client before it ever ships.",
			"In practice this means investing in your build pipeline early. The cost of setting this up is real, but it pays for itself the first time a rename ripples cleanly through your entire codebase instead of blowing up in production.",
		],
	},
	{
		slug: "accessible-by-default",
		title: "Accessible by default: shipping inclusive UI without slowing down",
		excerpt:
			"Accessibility is often treated as a final polish step. It works far better as a default baked into your components from day one.",
		date: "2024-09-30",
		readingTime: "6 min read",
		tags: ["Accessibility", "Frontend"],
		content: [
			"The teams that ship accessible products consistently are not the ones with the biggest budgets — they are the ones that made accessibility the path of least resistance.",
			"That starts with your component library. If your button, input and dialog primitives are accessible out of the box, most of your product inherits that for free. Every feature team builds on top of a solid foundation instead of reinventing focus management.",
			"Pair that with a lightweight audit in code review and automated checks in CI, and you catch the majority of regressions before they reach users.",
		],
	},
	{
		slug: "small-tools-big-leverage",
		title: "Small tools, big leverage: the case for building your own CLIs",
		excerpt:
			"The best productivity gains I have seen came from tiny internal tools that removed friction from everyday workflows.",
		date: "2024-07-18",
		readingTime: "5 min read",
		tags: ["Tooling", "Developer Experience"],
		content: [
			"There is a certain kind of task that shows up every single day and quietly taxes an entire team: spinning up an environment, seeding data, running a deploy. Individually they are small. In aggregate they are enormous.",
			"A well-made internal CLI turns those multi-step rituals into a single command with helpful output. The trick is to optimize for clarity over cleverness — good defaults, readable errors, and a short path to the happy case.",
			"You do not need a framework or a grand plan. Start with a shell script, notice which commands you run most, and gradually promote them into a proper tool.",
		],
	},
	{
		slug: "reading-the-source",
		title: "Reading the source: a skill worth practicing",
		excerpt:
			"The ability to comfortably read unfamiliar code is one of the most underrated skills in software engineering.",
		date: "2024-05-04",
		readingTime: "7 min read",
		tags: ["Career", "Craft"],
		content: [
			"Most engineers are trained to write code but rarely trained to read it. Yet the majority of our time is spent understanding systems we did not build.",
			"When I join a new codebase, I resist the urge to change anything for the first few days. Instead I trace a single request from entry point to database and back, taking notes on every layer it passes through.",
			"This habit builds a mental map that makes every subsequent change faster and safer. Reading the source is not a detour from the work — it is the work.",
		],
	},
];

export function formatDate(iso: string) {
	return new Date(iso).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
