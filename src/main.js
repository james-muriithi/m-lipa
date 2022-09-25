import Vue from 'vue'
import App from './App.vue'
import router from './router'

// components
import Navbar from '@/components/common/Navbar.vue';

// styles
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "@/assets/scss/styles.scss";

Vue.component('Navbar', Navbar);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
