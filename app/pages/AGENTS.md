# Pages Folder Conventions

- All the routes are file based routes.
- Nuxt support nested children routes by convention.

```bash
# Example
- /app
  - /pages
    - admin.vue # Use <NuxtPage /> component to render children routes
    - admin/ # Nested children routes inside admin/
      - index.vue
      - about.vue
```

- Dynamic routes are supported by convention.

```bash
# Example
- /app
  - /pages
    - blogs/
      - [id].vue # Dynamic route for blogs/[id]
    - products/
      - [...all].vue # Dynamic route for products/[all]
    - [...].vue # Catch-all route
```
