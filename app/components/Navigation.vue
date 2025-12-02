<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
      <!-- Logo/Name -->
      <a href="#" class="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
        {{ name }}
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#about" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          About
        </a>
        <a href="#projects" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Projects
        </a>
        <a href="#contact" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Contact
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 animate-fade-in">
      <div class="px-4 py-4 space-y-3">
        <a href="#about" class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-2">
          About
        </a>
        <a href="#projects" class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-2">
          Projects
        </a>
        <a href="#contact" class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-2">
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const isMenuOpen = ref(false)

onMounted(() => {
  // Menu initialization if needed
})
</script>
