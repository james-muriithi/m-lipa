<template>
  <div class="h-100">
    <Navbar />
    <Banner />
    <AboutUs />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import Banner from '@/components/landing-page/Banner.vue'
import AboutUs from '@/components/landing-page/AboutUs.vue';
import Testimonials from '../components/landing-page/Testimonials.vue';
import Footer from '../components/common/Footer.vue';

export default {
  components: { Banner, AboutUs, Testimonials, Footer },
  name: 'HomeView',
}
</script>
