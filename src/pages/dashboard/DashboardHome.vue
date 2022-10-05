<template>
  <div class="min-h-100 position-relative mt-3 container-fluid">
    <h5 class="text-primary">Hey Anddy!</h5>
    <div class="mt-5">
      <div class="row">
        <div class="col-sm-6 col-lg-4 col-xl-3 mb-3" v-for="i in 4" :key="i">
          <div class="py-3 px-4 bg-white rounded-2 shadow-1">
            <div class="icon d-flex align-items-center">
              <span class="material-icons fs-1 text-secondary rounded-circle">
                people
              </span>
            </div>
            <div class="number text-end">
              <span class="fs-6 fw-bold"> 2,345 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardHome",
};
</script>

<style scoped>
.min-h-100 {
  min-height: 90vh;
}
</style>