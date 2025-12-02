<template>
  <div class="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
    <Navigation name="Wai Lin Aung" />
    <main>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'scroll-smooth',
  },
})

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

