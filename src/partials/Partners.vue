<template>
  <section>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Particles animation -->
      <div class="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
        <Particles class="absolute inset-0 -z-10" :quantity="5"/>
      </div>

      <div class="py-12 md:py-16">
        <div class="overflow-hidden">
          <div
              class="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-neutral-950 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-neutral-950">
            <div class="swiper-wrapper !ease-linear select-none items-center">
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/center-invest.png" alt="Client 02"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/axenix.png" alt="Client 04"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/beshtau.png" alt="Client 05"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/datum-soft.png" alt="Client 06"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/it.png" alt="Client 07"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16" style="filter: invert();"
                     src="../images/partners/garage.png" alt="Client 08"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/eltex.png" alt="Client 09"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/forabank.png" alt="Client 09"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/iktin.png" alt="Client 09"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/kaspersky.png" alt="Client 09"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/sber.png" alt="Client 09"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/mediapark.png" alt="Client 09"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/odgetto.png" alt="Client 09"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/rostov-youth.png" alt="Client 09"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/special-university-automation.png" alt="Client 09"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/ttk.png" alt="Client 09"/>
              </div>
              <div class="swiper-slide !w-auto">
                <img class="h-16"
                     src="../images/partners/webpractik.png" alt="Client 09"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg width="0" height="0" viewBox="0 0 20 20">
      <filter id="inset-shadow">
        <feOffset dx="0" dy="0"></feOffset>
        <feGaussianBlur stdDeviation="10" result="offset-blur"></feGaussianBlur>
        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"></feComposite>
        <feFlood flood-color="gray" flood-opacity=".95" result="color"></feFlood>
        <feComposite operator="in" in="color" in2="inverse" result="shadow"></feComposite>
        <feComposite operator="over" in="shadow" in2="SourceGraphic"></feComposite>
      </filter>
    </svg>
  </section>
</template>

<script>
import {onMounted} from 'vue'
import Particles from './Particles.vue'

// Import Swiper
import Swiper, {Autoplay} from 'swiper'
import 'swiper/css'

Swiper.use([Autoplay])

export default {
  name: 'Partners',
  components: {
    Particles
  },
  setup() {
    onMounted(() => {
      const carousel = new Swiper('.clients-carousel', {
        parallax: true,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        initialSlide: 0,
        spaceBetween: 64,
        speed: 10000,
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
        },
      })
    })
  }
}
</script>