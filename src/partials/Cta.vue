<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
        <!-- Radial gradient -->
        <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
          <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"></div>
          <div class="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
        </div>
        <!-- Blurred shape -->
        <div class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stop-color="#A855F7" />
                <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>
        <!-- Content -->
        <div class="max-w-3xl mx-auto text-center">
<!--          <div>-->
<!--            <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">The security first platform</div>-->
<!--          </div>-->
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 pb-4">Хотите присоединится к команде партнеров Хакатона?</h2>
          <p class="text-lg text-neutral-400 mb-8"> Всю подробную информацию об условиях участия и актуальных пакетах партнера можно узнать написав на почту.</p>
          <div>
            <a class="btn text-neutral-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group" href="mailto:hackathon.rostov@gmail.com">
              hackathon.rostov@gmail.com <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cta',
}
</script>