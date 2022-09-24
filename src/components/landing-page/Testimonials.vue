<template>
  <section class="bg-gray py-7 py-md-10">
    <div class="medium-container mx-auto">
      <div class="small-container mx-auto">
        <h3 class="fs-1 fw-bold text-dark-blue text-center">
          What Clients Say
        </h3>
        <p class="text-muted text-center mt-3">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div class="mt-4">
        <div class="bg-white testimonial-card py-5 text-center shadow">
          <div class="small-container mx-auto">
            <img
              src="@/assets/landing-page/testimonial-user.png"
              alt=""
              class="rounded-circle avatar img-fluid"
            />
            <p class="text-muted mt-5">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>

            <div class="rating my-4"> 
                <span class="material-icons text-warning">star</span>
                <span class="material-icons text-warning">star</span>
                <span class="material-icons text-warning">star</span>
                <span class="material-icons text-warning">star</span>
                <span class="material-icons text-warning">star_outline</span>
            </div>
            <h4 class="fs-4 fw-bold text-dark-blue">
                Regina Miles
            </h4>
            <p class="text-muted fw-semibold fs-7">
                Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials",
};
</script>