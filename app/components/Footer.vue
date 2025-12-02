<template>
  <footer id="contact" class="bg-slate-950 dark:bg-black text-white py-16 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <!-- CTA Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-6">Let's Work Together</h2>
        <p class="text-lg text-slate-400 mb-8">
          I'm always interested in hearing about new projects and opportunities.
        </p>
         <a
           href="mailto:dev.wailin@gmail.com"
           class="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
         >
           Get In Touch →
         </a>
      </div>

      <!-- Divider -->
      <div class="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-12"></div>

      <!-- Footer Content -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Brand -->
        <div>
          <h3 class="text-lg font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Wai Lin Aung
          </h3>
          <p class="text-slate-400">Full Stack Developer</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <a href="#about" class="text-slate-400 hover:text-white transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" class="text-slate-400 hover:text-white transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" class="text-slate-400 hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

         <!-- Social Links -->
         <div>
           <h4 class="font-semibold mb-4">Connect</h4>
           <div class="flex gap-4">
             <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors text-xl">
               🐙
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors text-xl">
               💼
             </a>
             <a href="mailto:dev.wailin@gmail.com" class="text-slate-400 hover:text-white transition-colors text-xl">
               ✉️
             </a>
           </div>
         </div>
      </div>

      <!-- Bottom Bar -->
      <div class="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>
      <div class="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm">
        <p>&copy; 2025 Wai Lin Aung. All rights reserved.</p>
        <p class="mt-4 sm:mt-0">
          Built with <span class="text-red-500">❤️</span> using Nuxt.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
