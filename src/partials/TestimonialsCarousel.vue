<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div>
            <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">The security first platform</div>
          </div>
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 pb-4">Spot issues faster</h2>
          <p class="text-lg text-neutral-400">All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
        </div>

        <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
        <!-- * Custom styles in src/css/additional-styles/theme.scss -->
        <div class="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-neutral-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-neutral-900 after:to-20%">
          <div class="testimonials-carousel swiper-container group">
            <Highlighter class="swiper-wrapper w-fit" :refresh="swiperInitialized">
              <!-- Carousel items -->
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <div class="relative h-full bg-neutral-900 rounded-[inherit] z-20 overflow-hidden">
                  <!-- Particles animation -->
                  <Particles class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" :quantity="3" :refresh="swiperInitialized" />
                  <!-- Radial gradient -->
                  <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 rounded-full bg-neutral-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]"></div>
                  </div>
                  <div class="flex flex-col p-6 h-full">
                    <img class="mb-3" src="../images/carousel-icon-01.svg" width="56" height="56" alt="Icon 01">
                    <div class="grow">
                      <div class="font-bold text-lg mb-1">Anonymous User</div>
                      <div class="text-neutral-400 mb-3">Incorporate rich user profiling, and facilitate more transactions.</div>
                    </div>
                    <div class="text-right">
                      <a class="text-sm font-medium text-neutral-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <div class="relative h-full bg-neutral-900 rounded-[inherit] z-20 overflow-hidden">
                  <!-- Particles animation -->
                  <Particles class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" :quantity="3" :refresh="swiperInitialized" />
                  <!-- Radial gradient -->
                  <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 rounded-full bg-neutral-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]"></div>
                  </div>
                  <div class="flex flex-col p-6 h-full">
                    <img class="mb-3" src="../images/carousel-icon-02.svg" width="56" height="56" alt="Icon 01">
                    <div class="grow">
                      <div class="font-bold text-lg mb-1">Bot Detection</div>
                      <div class="text-neutral-400 mb-3">Incorporate rich user profiling, and facilitate more transactions.</div>
                    </div>
                    <div class="text-right">
                      <a class="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  <!-- Particles animation -->
                  <Particles class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" :quantity="3" :refresh="swiperInitialized" />
                  <!-- Radial gradient -->
                  <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]"></div>
                  </div>
                  <div class="flex flex-col p-6 h-full">
                    <img class="mb-3" src="../images/carousel-icon-03.svg" width="56" height="56" alt="Icon 01">
                    <div class="grow">
                      <div class="font-bold text-lg mb-1">Social integrations</div>
                      <div class="text-slate-400 mb-3">Incorporate rich user profiling, and facilitate more transactions.</div>
                    </div>
                    <div class="text-right">
                      <a class="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  <!-- Particles animation -->
                  <Particles class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" :quantity="3" :refresh="swiperInitialized" />
                  <!-- Radial gradient -->
                  <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]"></div>
                  </div>
                  <div class="flex flex-col p-6 h-full">
                    <img class="mb-3" src="../images/carousel-icon-04.svg" width="56" height="56" alt="Icon 01">
                    <div class="grow">
                      <div class="font-bold text-lg mb-1">Progressive Profiling</div>
                      <div class="text-slate-400 mb-3">Incorporate rich user profiling, and facilitate more transactions.</div>
                    </div>
                    <div class="text-right">
                      <a class="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem class="swiper-slide h-auto group/slide">
                <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  <!-- Particles animation -->
                  <Particles class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" :quantity="3" :refresh="swiperInitialized" />
                  <!-- Radial gradient -->
                  <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]"></div>
                  </div>
                  <div class="flex flex-col p-6 h-full">
                    <img class="mb-3" src="../images/carousel-icon-05.svg" width="56" height="56" alt="Icon 05">
                    <div class="grow">
                      <div class="font-bold text-lg mb-1">Secure Access</div>
                      <div class="text-slate-400 mb-3">Incorporate rich user profiling, and facilitate more transactions.</div>
                    </div>
                    <div class="text-right">
                      <a class="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </Highlighter>
          </div>
        </div>

        <!-- Arrows -->
        <div class="flex mt-8 justify-end">
          <button class="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
            <span class="sr-only">Previous</span>
            <svg class="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
          </button>
          <button class="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
            <span class="sr-only">Next</span>
            <svg class="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'
import Particles from './Particles.vue'
import Highlighter from './Highlighter.vue'
import HighlighterItem from './HighlighterItem.vue'

// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
Swiper.use([Navigation])

export default {
  name: 'TestimonialsCarousel',
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
        grabCursor: true,
        loop: false,
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 24,
        navigation: {
          nextEl: '.carousel-next',
          prevEl: '.carousel-prev',
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