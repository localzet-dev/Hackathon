<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">

        <div
            class="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-neutral-950 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-neutral-950 after:to-20%">
          <div class="testimonials-carousel swiper-container group" data-swiper-parallax="-23%">
            <Highlighter class="swiper-wrapper w-fit" :refresh="swiperInitialized">
              <!-- Carousel items -->
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <a data-swiper-parallax="-200"
                   class="relative h-full bg-neutral-950 rounded-[inherit] z-20 overflow-hidden"
                   href="https://vk.com/album-106352936_304010427">
                  <img
                      src="https://sun9-77.userapi.com/impg/g6OBBMLiQEu_vM3zq3zDrb8sE0zKe7UnCd7BGg/-ByW_W5auXU.jpg?size=510x340&quality=95&crop=200,0,2160,1440&sign=ea5bcf69d031687c397d68038e3f9ddd&type=album"
                      alt="Icon 01">
                </a>
              </HighlighterItem>
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <a data-swiper-parallax="-200"
                   class="relative h-full bg-neutral-950 rounded-[inherit] z-20 overflow-hidden"
                   href="https://vk.com/album-106352936_304000662">
                  <img
                      src="https://sun9-77.userapi.com/impg/uOv3Hb06GlHED7DCtUNVgUX6iYAn__bJ9jmzAg/EhfyX2SgXvI.jpg?size=510x340&quality=95&crop=200,0,2160,1440&sign=7c3f0d0759ae1f5c558adaad2fc43396&type=album"
                      alt="Icon 01">
                </a>
              </HighlighterItem>
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <a data-swiper-parallax="-200"
                   class="relative h-full bg-neutral-950 rounded-[inherit] z-20 overflow-hidden"
                   href="https://vk.com/album-106352936_303994565">
                  <img
                      src="https://sun9-66.userapi.com/impg/v0Y2d0pWRYuIvOpZJhWRt1E0FdciAONG1S89eA/thPMPLDTZY0.jpg?size=510x340&quality=95&crop=200,0,2160,1440&sign=ef7e0383f641687e6be04b2696985a98&type=album"
                      alt="Icon 01">
                </a>
              </HighlighterItem>
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <a data-swiper-parallax="-200"
                   class="relative h-full bg-neutral-950 rounded-[inherit] z-20 overflow-hidden"
                   href="https://vk.com/album-106352936_299898391">
                  <img
                      src="https://sun9-48.userapi.com/impg/RzkZF_a-2zewL99HtzcRHHV_Lhb5oZ9t8uZXSg/axpcl8wBFlA.jpg?size=510x340&quality=95&crop=197,0,2166,1444&sign=8dc35a9591784a09881dd933141420f9&type=album"
                      alt="Icon 01">
                </a>
              </HighlighterItem>
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <a data-swiper-parallax="-200"
                   class="relative h-full bg-neutral-950 rounded-[inherit] z-20 overflow-hidden"
                   href="https://vk.com/album-106352936_299843115">
                  <img
                      src="https://sun9-80.userapi.com/impg/LVR6NjPr-Dfw0juYQQf3Luul-qcC9ZQEmL5iTQ/dSrrB_D5H6o.jpg?size=510x340&quality=95&crop=196,0,2167,1445&sign=22afce17678340c3b8e376e497956911&type=album"
                      alt="Icon 01">
                </a>
              </HighlighterItem>
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <a data-swiper-parallax="-200"
                   class="relative h-full bg-neutral-950 rounded-[inherit] z-20 overflow-hidden"
                   href="https://vk.com/album-106352936_299816764">
                  <img
                      src="https://sun9-40.userapi.com/impg/HNd3P643k3zPswxwrRy9dmXhsMBT_oPEX5vifQ/-cdtoIjzOg4.jpg?size=510x340&quality=95&crop=196,0,2167,1445&sign=59a04c0acc9076bf52cfaa7eabe08949&type=album"
                      alt="Icon 01">
                </a>
              </HighlighterItem>
            </Highlighter>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import {onMounted, ref} from 'vue'
import Particles from './Particles.vue'
import Highlighter from './Highlighter.vue'
import HighlighterItem from './HighlighterItem.vue'

// Import Swiper
import Swiper, {Navigation} from 'swiper'
import 'swiper/css'

Swiper.use([Navigation])

export default {
  name: 'Albums',
  components: {
    Particles,
    Highlighter,
    HighlighterItem,
  },
  setup() {

    const swiperInitialized = ref(false)

    onMounted(() => {
      const carousel = new Swiper('.testimonials-carousel', {
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        },
        parallax: true,
        slidesPerView: 'auto',
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        initialSlide: 0,
        spaceBetween: 24,
        speed: 3000,
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
        },
      })
      swiperInitialized.value = true
    })

    return {
      swiperInitialized,
    }
  }
}
</script>