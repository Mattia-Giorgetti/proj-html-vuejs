<template>
  <div>
    <img class="img-fluid rounded-top" :src="item.img" />
  </div>
  <div class="p-3">
    <h4>${{ item.price }}<span>.00</span></h4>
    <p>{{ item.text }}</p>
    <div class="d-flex align-items-center gap-4">
      <span
        ><i class="fa-regular fa-file-zipper pe-1"></i> {{ item.lessons }} Lessons</span
      >
      <span><i class="fa-regular fa-user pe-1"></i> {{ item.students }} Students</span>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CardComponent",
  props: {
    item: Object,
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

h4 {
  color: $green;
  font-size: 1.2rem;
  font-weight: 600;
  span {
    font-size: 0.9rem;
    font-weight: 600;
    color: $green;
  }
}
p {
  font-size: 0.9rem;
  font-weight: bold;
}
span {
  font-size: 0.7rem;
  color: gray;
  margin-bottom: 0.7rem;
}
</style>
