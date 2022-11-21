<template></template>

<script>
import { store } from "../store";
export default {
  name: "CardList",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>