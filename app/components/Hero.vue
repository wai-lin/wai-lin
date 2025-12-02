<template>
	<section class="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 overflow-hidden">
		<div class="absolute inset-0 -z-10 opacity-40">
			<div
				class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob">
			</div>
			<div
				class="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000">
			</div>
			<div
				class="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000">
			</div>
		</div>

		<div class="max-w-4xl mx-auto text-center">
			<!-- Main Heading -->
			<div class="mb-8 animate-fade-in-up">
				<h1 class="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight">
					<span
						class="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
						Creative Developer
					</span>
				</h1>
				<p class="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-6">
					Building beautiful, performant web experiences with modern technologies
				</p>
			</div>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up"
				style="animation-delay: 0.2s">
				<a href="#projects"
					class="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
					View My Work ↓
				</a>
				<a href="#about"
					class="px-8 py-4 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300">
					Learn More
				</a>
			</div>

			<!-- Stats -->
			<!-- <div class="grid grid-cols-3 gap-8 mb-16 animate-fade-in" style="animation-delay: 0.4s">
        <div>
          <p class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            6+
          </p>
          <p class="text-slate-600 dark:text-slate-400 text-sm">Years Experience</p>
        </div>
        <div>
          <p class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            20+
          </p>
          <p class="text-slate-600 dark:text-slate-400 text-sm">Projects Completed</p>
        </div>
        <div>
          <p class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            100%
          </p>
          <p class="text-slate-600 dark:text-slate-400 text-sm">Client Satisfaction</p>
        </div>
		</div> -->

			<!-- Scroll Indicator -->
			<div class="animate-bounce flex justify-center" style="animation-delay: 0.6s">
				<svg class="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none"
					stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes blob {

	0%,
	100% {
		transform: translate(0, 0) scale(1);
	}

	33% {
		transform: translate(30px, -50px) scale(1.1);
	}

	66% {
		transform: translate(-20px, 20px) scale(0.9);
	}
}

.animate-blob {
	animation: blob 7s infinite;
}

.animation-delay-2000 {
	animation-delay: 2s;
}

.animation-delay-4000 {
	animation-delay: 4s;
}
</style>
