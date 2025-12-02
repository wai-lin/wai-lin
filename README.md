# Personal Portfolio Website

A modern, responsive portfolio website built with **Nuxt 4**, **Vue 3**, and **Tailwind CSS v4**. Content is managed via YAML files, making it easy to update your portfolio without touching code.

## Features

- **Modern Design**: Clean, minimalist design with smooth animations and gradients
- **Dark/Light Theme**: Built-in theme toggle with local storage persistence
- **Content Management**: Update your portfolio via YAML files (`content/about.yaml`, `content/projects.yaml`)
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Performance**: Optimized with modern web standards and best practices
- **SEO Ready**: Proper meta tags and semantic HTML
- **Interactive Components**:
  - Featured projects with image galleries
  - Interactive project cards with modal details
  - Smooth scroll navigation
  - Social links and CTAs
  - Experience timeline
  - Skills showcase

## Project Structure

```
portfolio/
├── app/
│   ├── app.vue                 # Main app component
│   ├── assets/
│   │   └── css/
│   │       └── main.css        # Tailwind v4 CSS with @theme config
│   ├── components/
│   │   ├── Navigation.vue      # Header with theme toggle
│   │   ├── Hero.vue            # Landing section
│   │   ├── About.vue           # About section with skills & experience
│   │   ├── Projects.vue        # Projects showcase
│   │   └── Footer.vue          # Footer with CTA
│   ├── composables/
│   │   └── useContent.ts       # Composable for loading YAML content
│   └── utils/
│       └── contentLoader.ts    # Server-side YAML loader
├── content/
│   ├── about.yaml              # Your personal info, skills, experience
│   └── projects.yaml           # Your projects with details
├── public/
│   └── content/                # YAML files copied for client access
├── nuxt.config.ts              # Nuxt configuration with @tailwindcss/vite
└── package.json
```

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Customization

### Update Your Content

Edit the YAML files in the `content/` directory:

#### `content/about.yaml`

```yaml
name: "Your Name"
title: "Your Title"
bio: "Your bio"
description: "Your description"

skills:
  - category: "Frontend"
    items:
      - Vue.js
      - Nuxt.js
      # ... more skills

social:
  - name: "GitHub"
    url: "https://github.com/yourname"
    icon: "github"
  # ... more social links

experience:
  - title: "Job Title"
    company: "Company Name"
    period: "2024 - Present"
    description: "Job description"
  # ... more jobs
```

#### `content/projects.yaml`

```yaml
projects:
  - id: 1
    title: "Project Title"
    description: "Project description"
    image: "https://example.com/image.jpg"
    tags: [Vue.js, Tailwind CSS]
    links:
      - label: "GitHub"
        url: "https://github.com"
      - label: "Live Demo"
        url: "https://example.com"
    featured: true  # Shows in featured section
  # ... more projects
```

### Styling

The site uses **Tailwind CSS v4** with modern CSS-based configuration. To customize:

**Edit `app/assets/css/main.css`**:
```css
@import "tailwindcss";

@theme {
  --color-primary: #your-color;
  --font-display: "Your Font";
  --spacing-custom: 2rem;
}
```

**Available customizations**:
- Colors: `--color-blue-500`, `--color-green-600`, etc.
- Spacing: `--spacing-1` through `--spacing-96`
- Typography: `--font-sans`, `--text-lg`, etc.
- Animations: `--duration-fade`, etc.

Global styles are in `app/assets/css/main.css`

**Note**: No JavaScript config file needed! Tailwind v4 uses CSS variables for everything. 🎉

### Components

All components are in `app/components/`:
- **Navigation.vue**: Header with navigation and theme toggle
- **Hero.vue**: Landing section with CTA
- **About.vue**: Personal info, skills, and experience
- **Projects.vue**: Project showcase with modal details
- **Footer.vue**: Footer with contact CTA

## Deployment

The site can be deployed to any platform that supports Node.js/Nuxt:

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy
```

### Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Static Generation

```bash
pnpm generate
```

This creates a static site in `.output/public/` that can be deployed to any static host.

## Technologies Used

## Technologies Used

- **Nuxt 4**: Vue framework with SSR/SSG
- **Vue 3**: Progressive JavaScript framework
- **Tailwind CSS v4**: Modern utility-first CSS framework with CSS-based config
- **TypeScript**: Type-safe JavaScript
- **js-yaml**: YAML parser for content files
- **@tailwindcss/vite**: Vite plugin for optimized builds

## Customization Tips

1. **Colors**: Update in `app/assets/css/main.css` using `@theme` block
2. **Fonts**: Change by updating the font import in `nuxt.config.ts` or use a different Google Font
3. **Animations**: Modify custom `@keyframes` or `@utility` directives in `app/assets/css/main.css`
4. **Social Links**: Add more platforms in `content/about.yaml`

## Performance

- Optimized bundle size (~186KB client JS)
- Lazy-loaded images
- CSS minification and optimization
- Efficient YAML parsing with js-yaml

## License

MIT

## Support

For issues or questions, check the Nuxt documentation at https://nuxt.com
