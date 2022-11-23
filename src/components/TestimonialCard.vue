<template>
  <div
    class="testimonial_card rounded-1 p-4 me-5"
    :class="{
      top_card: index == 2,
      bottom_card: index == 1,
      active_card: index == 0,
    }"
  >
    <h4>{{ item.title }}</h4>
    <p>{{ item.text }}</p>
    <div class="d-flex gap-3">
      <img :src="item.img" :alt="item.name" />
      <div>
        <h4 class="mb-1 text-uppercase">{{ item.name }}</h4>
        <p>{{ item.role }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "TestimonialCard",
  props: {
    item: Object,
    index: Number,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.active_card {
  z-index: 5000;
  position: relative;
  opacity: 1;
  background-color: white;
}
.top_card {
  position: absolute;
  right: 0px;
  top: -100px;
  background-color: $white;
  opacity: 0.5;
  transform: scale(0.8);
}
.bottom_card {
  position: absolute;
  right: 0;
  top: 100px;
  background-color: $white;
  opacity: 0.5;
  transform: scale(0.8);
}
.testimonial_card {
  box-shadow: -4px 4px 40px lightgray;
  height: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h4 {
    font-size: 0.9rem;
  }
  p {
    font-size: 0.8rem;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
</style>
