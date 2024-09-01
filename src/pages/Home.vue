<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <Header/>

    <main class="grow">
      <Hero/>
      <Partners/>
      <Features/>
      <Schedule/>
      <Volunteers/>
      <Video/>
      <Albums/>
      <InvitePartners/>
    </main>

    <Footer/>

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/Hero.vue'
import Partners from '../partials/Partners.vue'
import Features from '../partials/Features.vue'
import Schedule from '../partials/Schedule.vue'
import Volunteers from "../partials/Volunteers.vue";
import Video from '../partials/Video.vue'
import Albums from '../partials/Albums.vue'
import InvitePartners from '../partials/InvitePartners.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Partners,
    Features,
    Schedule,
    Volunteers,
    Video,
    Albums,
    InvitePartners,
    Footer,
  },
}
</script>