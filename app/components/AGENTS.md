# Components Folder Conventions

- Nuxt components are all file and folder name based conventions.

```bash
# Example
- /app
  - /components
    - ui/
      - button.vue # use as <UiButton /> or <LazyUiButton />
      - input.vue # use as <UiInput /> or <LazyUiInput />
    - hero-banner.vue # use as <HeroBanner /> or <LazyHeroBanner />
```

- Never write component name in single word. (This breaks the convention and conflicts with html tags)
