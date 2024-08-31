<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <Clients />
      <Features />
<!--      <Features04 />-->
      <Features02 />
      <Features03 />
      <TestimonialsCarousel />
      <Pricing />
      <Testimonials />
      <Cta />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
  <svg width="300" height="300" viewBox="0 0 20 20">
    <filter id="inset-shadow">
      <!-- Shadow offset -->
      <feOffset dx="0" dy="0"></feOffset>
      <!-- Shadow blur -->
      <feGaussianBlur stdDeviation="10" result="offset-blur"></feGaussianBlur>
      <!-- Invert drop shadow to make an inset shadow-->
      <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"></feComposite>
      <!-- Cut colour inside shadow -->
      <feFlood flood-color="gray" flood-opacity=".95" result="color"></feFlood>
      <feComposite operator="in" in="color" in2="inverse" result="shadow"></feComposite>
      <!-- Placing shadow over element -->
      <feComposite operator="over" in="shadow" in2="SourceGraphic"></feComposite>
    </filter>

  </svg>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/Hero.vue'
import Clients from '../partials/Clients.vue'
import Features from '../partials/Features.vue'
import Features02 from '../partials/Features02.vue'
import Features03 from '../partials/Features03.vue'
import TestimonialsCarousel from '../partials/TestimonialsCarousel.vue'
import Features04 from '../partials/Features04.vue'
import Pricing from '../partials/Pricing.vue'
import Testimonials from '../partials/Testimonials.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Clients,
    Features,
    Features02,
    Features03,
    TestimonialsCarousel,
    Features04,
    Pricing,
    Testimonials,
    Cta,
    Footer,
  },
}
</script>