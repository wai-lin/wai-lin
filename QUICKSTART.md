# Quick Start Guide

Welcome to your new portfolio website! Here's how to get started and customize it for your needs.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize Your Portfolio

#### Update Your Information

Edit `content/about.yaml` with your personal information:
```yaml
name: "Your Name"
title: "Your Professional Title"
bio: "Your professional bio"
description: "Detailed description about you"

# Add your skills
skills:
  - category: "Frontend"
    items:
      - Vue.js
      - Nuxt.js
      - React

# Add your social links
social:
  - name: "GitHub"
    url: "https://github.com/yourname"
    icon: "github"
  - name: "LinkedIn"
    url: "https://linkedin.com/in/yourname"
    icon: "linkedin"

# Add your work experience
experience:
  - title: "Senior Developer"
    company: "Tech Company"
    period: "2023 - Present"
    description: "What you do here"
```

#### Add Your Projects

Edit `content/projects.yaml` to showcase your work:
```yaml
projects:
  - id: 1
    title: "Project Name"
    description: "What this project does"
    image: "https://example.com/image.jpg"
    tags: [Vue.js, Node.js, Tailwind CSS]
    links:
      - label: "GitHub"
        url: "https://github.com/yourproject"
      - label: "Live Demo"
        url: "https://project.com"
    featured: true  # Shows in featured section
```

## 🎨 Customizing the Design

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  // Your custom colors
  primary: '#your-color',
}
```

### Typography
Update the font import in `nuxt.config.ts`:
```typescript
link: [
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap' },
]
```

### Global Styles
Edit `app/assets/css/main.css` for custom animations and styles.

## 📦 Building for Production

### Build
```bash
pnpm build
```

### Preview Build
```bash
pnpm preview
```

### Static Generation
```bash
pnpm generate
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=.output/public
```

### Deploy to GitHub Pages
1. Set repository to public
2. Enable GitHub Pages in Settings
3. Deploy `.output/public` contents

## 📝 Updating Content After Deployment

Since your content is in YAML files, you can:
1. Edit the YAML files in the `content/` directory
2. Rebuild: `pnpm build`
3. Deploy the new build

## 🎯 Key Features

✅ **Dark/Light Theme** - Toggle available in navigation
✅ **Fully Responsive** - Works on all devices
✅ **Fast** - ~186KB JavaScript, optimized images
✅ **SEO Ready** - Proper meta tags and structure
✅ **Easy to Update** - Just edit YAML files
✅ **Modern Design** - Smooth animations and gradients
✅ **Mobile Friendly** - Touch-optimized navigation

## 📂 Project Structure

```
app/
├── app.vue                 # Main entry point
├── assets/css/main.css    # Global styles
├── components/            # Reusable components
├── composables/           # Vue composables
└── utils/                 # Utility functions

content/
├── about.yaml             # Your info & experience
└── projects.yaml          # Your projects

public/
└── content/               # Content files for client
```

## 🆘 Troubleshooting

### Content not updating?
- Make sure files are in `public/content/` after building
- Clear browser cache (Ctrl+Shift+Delete)
- The prebuild script automatically copies files

### Styling issues?
- Rebuild Tailwind: `pnpm build`
- Check `tailwind.config.ts` is properly configured
- Clear `.nuxt` directory: `rm -rf .nuxt && pnpm dev`

### Deploy issues?
- Make sure `.output/public` contains your content files
- Check that `prebuild` script ran successfully
- Verify `package.json` has correct build scripts

## 💡 Tips

- Use high-quality project images (recommended: 800x600px)
- Keep descriptions concise and impactful
- Update your portfolio regularly with new projects
- Test on mobile devices before deploying
- Use external image URLs or add images to `public/` folder

## 📚 Resources

- [Nuxt Documentation](https://nuxt.com)
- [Vue 3 Guide](https://vuejs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Deployment Guide](https://nuxt.com/docs/getting-started/deployment)

Enjoy building your portfolio! 🎉
