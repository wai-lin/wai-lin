<template>
  <section id="projects" class="min-h-screen py-20 px-4 sm:px-6 bg-white dark:bg-slate-950">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Featured <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          A selection of projects I've built and contributed to
        </p>
      </div>

      <!-- Featured Projects (Grid) -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          class="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-2xl animate-fade-in-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Image -->
          <div class="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex gap-3">
              <a
                v-for="link in project.links"
                :key="link.label"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-center transition-colors duration-200 text-sm"
              >
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- All Projects Section -->
      <div v-if="otherProjects.length > 0">
        <h3 class="text-2xl font-bold mb-8 text-slate-900 dark:text-white">More Projects</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <a
            v-for="project in otherProjects"
            :key="project.id"
            href="#"
            class="group p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            @click.prevent="expandProject = project"
          >
            <h4 class="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
              {{ project.title }}
            </h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="tag in project.tags.slice(0, 3)"
                :key="tag"
                class="text-xs px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {{ tag }}
              </span>
              <span v-if="project.tags.length > 3" class="text-xs px-2 py-1 text-slate-500 dark:text-slate-400">
                +{{ project.tags.length - 3 }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <Teleport to="body">
      <div
        v-if="expandProject"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
        @click.self="expandProject = null"
      >
        <div class="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
          <div class="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500">
            <img
              :src="expandProject.image"
              :alt="expandProject.title"
              class="w-full h-full object-cover"
            />
            <button
              @click="expandProject = null"
              class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all"
            >
              ✕
            </button>
          </div>
          <div class="p-8">
            <h3 class="text-3xl font-bold mb-3 text-slate-900 dark:text-white">
              {{ expandProject.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {{ expandProject.description }}
            </p>
            <div class="mb-6">
              <h4 class="font-semibold mb-3 text-slate-900 dark:text-white">Technologies</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in expandProject.tags"
                  :key="tag"
                  class="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="flex gap-3">
              <a
                v-for="link in expandProject.links"
                :key="link.label"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
              >
                {{ link.label }} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const projects = ref<any[]>([])
const expandProject = ref<any>(null)
const { loadYaml } = useContent()

const featuredProjects = computed(() => projects.value.filter(p => p.featured))
const otherProjects = computed(() => projects.value.filter(p => !p.featured))

onMounted(async () => {
  const content = await loadYaml('projects')
  projects.value = content?.projects || []
})
</script>
