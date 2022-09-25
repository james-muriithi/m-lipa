<template>
  <div>
    <DashboardSidebar :SidebarOpen="sidebarOpen" />
    <div class="app-wrapper" :class="{ 'sidebar-open': sidebarOpen }">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardSidebar from "@/components/common/DashboardSidebar.vue";

export default {
  name: "Dashboard",
  components: { DashboardSidebar },
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
      this.sidebarOpen = window.innerWidth > 1024;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper.sidebar-open {
  margin-left: 250px;
  @include transition;
}
.app-content {
  background: #f5f6fe;
}
</style>