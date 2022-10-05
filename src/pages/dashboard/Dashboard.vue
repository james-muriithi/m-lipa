<template>
  <div>
    <DashboardSidebar @closeSidebar="sidebarOpen = false" :SidebarOpen="sidebarOpen" />
    <div class="app-wrapper" :class="{ 'sidebar-open': sidebarOpen }">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl px-0">
          <DashboardNavbar @toggleSidebar="sidebarOpen = !sidebarOpen" />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardSidebar from "@/components/common/DashboardSidebar.vue";
import DashboardNavbar from "@/components/common/DashboardNavbar.vue";

export default {
  name: "Dashboard",
  components: { DashboardSidebar, DashboardNavbar },
  data() {
    return {
      sidebarOpen: true,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.sidebarOpen = window.innerWidth > 992;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper.sidebar-open {
  @include media-breakpoint-up(lg) {
    margin-left: 250px;
  }
  @include transition;
}
.app-content {
  background: #f5f6fe;
}
</style>