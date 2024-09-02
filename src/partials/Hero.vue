<template>
  <section>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Particles animation -->
      <Particles class="absolute inset-0 -z-10"/>

      <!-- Illustration -->
      <div class="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
           aria-hidden="true">
        <div class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
          <img src="../images/glow-bottom.svg" class="max-w-none" width="2146" height="774" alt="Hero Illustration">
        </div>
      </div>

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">

        <!-- Hero content -->
        <div class="max-w-3xl mx-auto text-center">
          <div class="mb-3" data-aos="fade-down">
                <span class="relative inline-flex items-center">
                  25 - 27 октября 2024 года
                </span>
          </div>
          <h1 class="h1 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 pb-4"
              data-aos="fade-down">Южный ИТ-форум</h1>
          <p class="text-lg text-neutral-300 mb-8" data-aos="fade-down" data-aos-delay="200">Форум программных
            разработчиков Ростова-на-Дону «Хакатон Осень 2024»</p>
          <div
              class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-down" data-aos-delay="400">
            <div>
              <a class="btn text-neutral-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
                 href="https://fantastic-hackathon.ru/reg.php">
                Стать участником
              </a>
            </div>
            <div>
              <a class="btn text-neutral-200 hover:text-white bg-neutral-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out"
                 href="https://fantastic-hackathon.ru/regv.php">
                <span>Быть волонтёром</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'

export default {
  name: 'Hero',
  components: {
    Particles
  }
}
</script>