<template>
  <section>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Particles animation -->
      <Particles class="absolute inset-0 -z-10"/>

      <!-- Illustration -->
      <div class="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
           aria-hidden="true">
        <div class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="max-w-none"
               width="2146" height="744">
            <defs>
              <linearGradient id="d" x1="43.176%" x2="50%" y1="12.436%" y2="97.744%">
                <stop offset="0%" stop-color="#16a34a"/>
                <stop offset="100%" stop-color="#16a34a"/>
              </linearGradient>
              <linearGradient id="f" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stop-color="#16a34a"/>
                <stop offset="100%" stop-color="#16a34a" stop-opacity="0"/>
              </linearGradient>
              <filter id="e" width="145.2%" height="187%" x="-22.6%" y="-43.5%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="50"/>
              </filter>
              <filter id="g" width="165.1%" height="170.3%" x="-32.5%" y="-35.1%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="50"/>
              </filter>
              <radialGradient id="c" cx="50%" cy="100%" r="77.678%" fx="50%" fy="100%"
                              gradientTransform="matrix(0 -1 .37746 0 .123 1.5)">
                <stop offset="0%" stop-color="#86efac"/>
                <stop offset="22.35%" stop-color="#16a34a"/>
                <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
              </radialGradient>
              <path id="a" d="M0 0h2440v921H0z"/>
            </defs>
            <g fill="none" fill-rule="evenodd" transform="translate(-140 -177)">
              <mask id="b" fill="#fff">
                <use xlink:href="#a"/>
              </mask>
              <g mask="url(#b)">
                <path fill="url(#c)" d="M0 0h2440v921H0z"/>
                <path fill="url(#d)" fill-rule="nonzero"
                      d="M1975.72 781.763c-3.682-3-8.757-3.61-13.042-1.568a12.323 12.323 0 0 0-7.014 11.129v98.57h-430.368c-6.79 0-12.296 5.516-12.296 12.321v98.57c0 6.805 5.505 12.321 12.296 12.321h430.368v98.57a12.323 12.323 0 0 0 7.014 11.129 12.276 12.276 0 0 0 13.042-1.568l196.74-160.176a12.33 12.33 0 0 0 4.54-9.561 12.33 12.33 0 0 0-4.54-9.561l-196.74-160.176Z"
                      filter="url(#e)"/>
                <path fill="url(#f)" d="m913 274 461 369-284 58z" filter="url(#g)"/>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">

        <!-- Hero content -->
        <div class="max-w-3xl mx-auto text-center">
          <div class="mb-3" data-aos="fade-down">
            <pre class="text-lg relative inline-flex items-center">25 - 27 октября  •  Ростов Арена</pre>
          </div>
          <h1 class="h1 bg-clip-text text-transparent bg-neutral-200 pb-4"
              data-aos="fade-down">Южный ИТ-форум</h1>
          <p class="text-lg text-neutral-200 mb-8" data-aos="fade-down" data-aos-delay="200">Форум программных
            разработчиков Ростова-на-Дону «Хакатон Осень 2024»</p>
          <div
              class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-down" data-aos-delay="400">
            <div>
              <a class="btn text-neutral-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
                 href="/reg.html">
                Стать участником
              </a>
            </div>
            <div>
              <a class="btn text-neutral-200 hover:text-white bg-neutral-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out"
                 href="/regv.html">
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