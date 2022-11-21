<template>
  <HeaderComponent />
  <JumboComponent />
  <main>
    <Everything />
    <HowWeWork />
    <CardList />
  </main>
</template>

<script>
import { store } from "./store";
import HeaderComponent from "./components/HeaderComponent.vue";
import JumboComponent from "./components/JumboComponent.vue";
import Everything from "./components/Everything.vue";
import HowWeWork from "./components/HowWeWork.vue";
import CardList from "./components/CardList.vue";
export default {
  components: { HeaderComponent, JumboComponent, Everything, HowWeWork, CardList },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;
</style>
