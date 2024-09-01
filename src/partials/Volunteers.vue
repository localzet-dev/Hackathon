<template>
  <section class="relative">
    <!-- Blurred shape -->
    <div class="absolute top-0 -translate-y-1/4 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none -z-10"
         aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
        <defs>
          <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
            <stop offset="0%" stop-color="#22c55e"/>
            <stop offset="100%" stop-color="#22c55e" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <path fill="url(#bs3-a)" fill-rule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)"/>
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-4xl mx-auto text-center">
        <img src="../images/g1592.svg" class="my-4 w-full" alt="">
      </div>

      <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20 pt-6 md:pt-10">
        <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 pb-4">
          Волонтёрам</h2>
        <p class="text-lg text-neutral-400 mb-8">Не разбираешься в IT, но хочешь стать частью этого события?</p>
        <div>
          <a class="btn text-neutral-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group"
             href="https://fantastic-hackathon.ru/regv.php">
            Присоединяйся!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Volunteers',
}
</script>