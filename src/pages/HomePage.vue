<template>
  <div class="h-100">
    <Banner />
    <AboutUs />
  </div>
</template>

<script>
import Banner from '@/components/landing-page/Banner.vue'
import AboutUs from '@/components/landing-page/AboutUs.vue';

export default {
  components: { Banner, AboutUs },
  name: 'HomeView',
}
</script>
