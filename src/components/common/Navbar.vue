<template>
  <nav class="navbar navbar-expand-md navbar-light bg-transparent mt-2 position-absolute w-100">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold text-dark-blue" href="#">M-Lipa</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse fw-semibold" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li
            class="nav-item px-2"
            v-for="({ title, url }, index) in menuItems"
            :key="index"
          >
            <router-link class="nav-link" exact aria-current="page" :to="url">
              {{ title }}
            </router-link>
          </li>
        </ul>
        <div class="ms-auto d-md-flex align-items-center">
          <router-link
            class="nav-link text-primary mx-2"
            aria-current="page"
            to="#"
          >
            Login
          </router-link>

          <router-link to="#" class="btn btn-primary mx-2 px-3 mt-3 mt-md-0">
            <div class="center">
              Signup
              <span class="material-icons ps-1">arrow_forward</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    menuItems() {
      return [
        {
          title: "Home",
          url: "#",
        },
        {
          title: "Product",
          url: "#",
        },
        {
          title: "Pricing",
          url: "#",
        },
        {
          title: "Contact",
          url: "#",
        },
      ];
    },
  },
};
</script>