<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid ps-0">
      <button
        class="navbar-toggler border-0"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="$emit('toggleSidebar')"
      >
        <span class="material-icons">menu</span>
      </button>

      <div class="d-flex align-items-center ms-auto">
        <div class="dropdown">
          <a
            class="
              text-reset
              me-3
              dropdown-toggle
              hidden-arrow
              d-flex
              align-items-center
            "
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div class="position-relative">
              <span class="material-icons">notifications</span>
              <span
                class="
                  badge
                  rounded-pill
                  badge-notification
                  bg-danger
                  position-absolute
                  notifications-count
                "
              >
                1
              </span>
            </div>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a class="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            @click.prevent=""
            id="navbarDropdownMenuAvatar"
            role="button"
            data-bs-toggle="dropdown"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-circle"
              height="25"
              alt="profile picture"
              loading="lazy"
            />
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <router-link class="dropdown-item" to="#">My profile</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="#">Settings</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="#">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "DashboardNavbar",
  emits: ['toggleSidebar']
};
</script>

<style lang="scss" scoped>
.notifications-count {
  left: calc(-#{$spacer} / 2);
  top: calc(-#{$spacer} / 2);
}
</style>