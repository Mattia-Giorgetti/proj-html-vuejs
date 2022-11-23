<template>
  <section id="testimonials" class="pt-4">
    <div class="container-sm p-5 pb-sm-0 pb-lg-5 mt-lg-5 mt-sm-0">
      <div class="row justify-content-between p-4">
        <div class="col-lg-4">
          <h3>Testimonials</h3>
          <h2>Why Do People <span>*Hearts*</span> Us?</h2>
          <p>
            Seeking for verbals of pur service quality? Find them here. Everything is
            transparent and straightforward for your sens of justification.
          </p>
          <div class="everything_question">
            <a href="#">View all <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="col-lg-7 position-relative d-none d-lg-block">
          <div v-for="(item, index) in store.testimonials" :key="index">
            <TestimonialCard :item="item" :index="index" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
import TestimonialCard from "./TestimonialCard.vue";
export default {
  name: "Testimonials",
  components: { TestimonialCard },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.row {
  height: 350px;
  align-items: flex-start;
  h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 600;
    font-size: 2.2rem;
    span {
      color: $green;
      font-weight: 300;
    }
  }
  p {
    font-size: 0.7rem;
    margin-bottom: 1.3rem;
  }
  a {
    text-decoration: none;
    color: $black;
    font-size: 0.7rem;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
