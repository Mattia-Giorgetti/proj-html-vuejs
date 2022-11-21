<template>
  <section id="courses">
    <div class="container-sm p-5">
      <h3 class="text-center">Join MaxCoach at best</h3>
      <h2 class="text-center">Latest Online <span>Courses</span></h2>
      <div class="row p-4 ms-1 gap-4">
        <div class="my-col p-0" v-for="(item, index) in store.courses" :key="index">
          <CardComponent :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
import CardComponent from "./CardComponent.vue";
export default {
  name: "CardList",
  data() {
    return {
      store,
    };
  },
  components: { CardComponent },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
section {
  background: linear-gradient(180deg, white 75%, $lightgray);
}
h3 {
  font-size: 0.8rem;
  color: gray;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
h2 {
  font-weight: 600;
  margin-bottom: 1.2rem;

  span {
    color: $green;
    font-weight: 300;
  }
}
.my-col {
  width: calc(100% / 3 - 2.3rem);
  background-color: $white;
  border-radius: 8px;
}
</style>
