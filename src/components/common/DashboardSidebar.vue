<template>
  <div
    id="app-sidebar"
    class="app-sidebar position-fixed h-100 top-0 fs-7 z-index-10"
    :class="{ open: SidebarOpen }"
  >
    <div
      class="sidebar-inner d-flex flex-column position-relative h-100 bg-white"
    >
      <button
        @click="$emit('closeSidebar')"
        class="
          sidepanel-close
          d-lg-none
          top-0
          text-dark
          position-absolute
          fs-6
          rounded-circle
          btn
        "
      >
        X
      </button>
      <div class="app-branding pt-3 mb-3 ps-3">
        <router-link
          class="app-logo text-decoration-none fw-semibold fs-5"
          :to="{ name: 'dashboard' }"
        >
          <span class="logo-text text-dark-blue">M-Lipa</span>
        </router-link>
      </div>
      <!--//app-branding-->

      <nav
        id="app-nav-main"
        class="app-nav app-nav-main flex-grow-1 d-block p-0 w-100"
      >
        <ul class="app-menu list-unstyled accordion" id="menu-accordion">
          <li class="nav-item">
            <router-link
              class="
                nav-link
                active
                ps-4
                pe-3
                py-3
                fw-semibold
                d-flex
                align-items-center
              "
              exact
              active-class="active"
              :to="{ name: 'dashboard' }"
            >
              <span class="material-icons"> home </span>
              <span class="nav-link-text ps-2 fs-6">Dashboard</span>
            </router-link>
            <!--//nav-link-->
          </li>
        </ul>
        <!--//app-menu-->
      </nav>
      <!--//app-nav-->
    </div>
    <!--//sidepanel-inner-->
  </div>
</template>

<script>
export default {
  name: "DashboardSidebar",
  props: {
    SidebarOpen: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['closeSidebar']
};
</script>

<style lang="scss" scoped>
.app-sidebar {
  min-height: 100vh;
  left: -250px;
  @include transition;
  &.open {
    left: 0;
  }

  .sidebar-inner {
    z-index: 10;
    box-shadow: rgb(0 0 0 / 5%) 0px 8px 15px;
    width: 250px;
  }

  .sidepanel-close {
    z-index: 20;
    right: 0rem;
  }

  .app-branding {
    height: 60px;
  }

  .logo-icon {
    width: 36px;
    height: 36px;
  }

  .nav-item {
    .nav-link {
      color: #5d6778;
      @include transition;
      &.active {
        background: lighten($color: $primary, $amount: 40);
        color: $primary;
        border-left: 3px solid $primary;
      }
      &:not(.active):hover {
        * {
          color: $primary !important;
        }
      }
    }
  }
}
</style>