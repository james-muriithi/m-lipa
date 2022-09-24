<template>
  <div class="h-100">
    <Banner />
    <AboutUs />
    <Testimonials />
  </div>
</template>

<script>
import Banner from '@/components/landing-page/Banner.vue'
import AboutUs from '@/components/landing-page/AboutUs.vue';
import Testimonials from '../components/landing-page/Testimonials.vue';

export default {
  components: { Banner, AboutUs, Testimonials },
  name: 'HomeView',
}
</script>
