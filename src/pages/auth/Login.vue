<template>
  <section class="h-100 pt-5 w-100">
    <div class="row center h-100 px-2 px-sm-0">
      <div class="col-sm-8 col-md-7 col-lg-4">
        <div class="bg-white shadow py-5 px-4 w-100 rounded-2">
          <h6 class="text-dark-blue">Login</h6>
          <span class="text-muted"> Easiest way to tranfer money </span>

          <form action="" class="mt-3">
            <div class="mb-4">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control rounded-3"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-4">
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control rounded-3"
                placeholder="password"
              />
            </div>
            <div>
              <button @click.prevent="" class="btn btn-primary w-100">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
};
</script>