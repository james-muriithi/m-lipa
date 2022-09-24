<template>
  <section id="banner" class="min-h-100 pt-5 container-xl">
    <div class="pt-5 row h-sm-75 align-items-center mt-5 mt-sm-0">
      <div class="col-sm-6 col-md-5">
        <h3 class="fs-1 fw-bold text-dark-blue">
          Simplifying your <span class="text-primary d-block">finance</span>
        </h3>
        <p class="text-muted pe-5 mt-4">
          Fast, easier and cheaper cross border
          <span class="d-lg-block">payments starts here.</span>
        </p>
        <div class="mt-4">
          <router-link
            to="#"
            class="btn btn-primary rounded-pill px-4 fw-semibold fs-7 py-2"
          >
            Get Started now
          </router-link>
        </div>
      </div>
      <div class="col-md-7 col-sm-6 h-100">
        <img
          class="img-fluid h-md-100 banner-image pt-5 pt-sm-0"
          src="@/assets/landing-page/banner-illustration.svg"
        />
      </div>
    </div>
    <div class="banner-cards h-sm-25 py-4">
      <div class="row h-100">
        <div class="col-md-4 h-100 mb-4 mb-md-0" v-for="i in 3" :key="i">
          <div class="card-item w-100 px-4 py-4 shadow">
            <p class="d-flex align-items-center fw-bold fs-7 fs-lg-6 mb-1">
              <span class="material-icons text-secondary fs-1">
                people_outline
              </span>
              <span class="ps-2 text-dark-blue"
                >The quick fox jumps over the lazy dog</span
              >
            </p>
            <p class="text-muted fs-7 mb-0">
              the quick fox jumps over the lazy dog the quick fox jumps over the
              lazy dog
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
.banner-image {
  @include media-breakpoint-down(sm) {
    height: 300px;
  }
}
.card-item {
  @include transition;
  &:hover {
    background: $secondary;
    * {
      color: $white !important;
    }
  }
}
</style>