<template>
  <header class="py-3 px-4 d-flex justify-content-between align-items-center">
    <nav>
      <ul
        class="list-unstyled d-flex justify-content-between align-items-center mb-0 gap-4"
      >
        <li v-for="(item, index) in store.navList" :key="index">
          <a :href="item.url"> {{ item.link }}</a>
          <span><i class="fa-solid fa-chevron-down"></i></span>
        </li>
      </ul>
    </nav>
    <img src="/images/dark-logo.png" alt="logo" />
    <div class="right_header d-flex align-items-center justify-content-between gap-3">
      <span class="position-relative">
        <i class="fa-solid fa-cart-shopping"></i>
        <div class="cart-counter">{{ store.cartCounter.length }}</div>
      </span>
      <span><i class="fa-solid fa-circle-user"></i></span>
      <div class="searchbar d-flex align-item-center">
        <input type="text" placeholder="Search..." />
        <button><i class="fa-solid fa-magnifying-glass me-1"></i></button>
      </div>
    </div>
  </header>
</template>

<script>
import { store } from "../store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.fa-chevron-down {
  font-size: 7px;
  margin-left: 5px;
}
img {
  width: 130px;
}
li a {
  text-decoration: none;
  color: $black;
  font-size: 0.8rem;
}
.searchbar {
  input {
    background-color: $lightgray;
    border: none;
    height: 2rem;
    padding: 1rem;
    width: 90%;
    font-size: 0.8rem;
    border-radius: 6px 0 0 6px;
  }
  button {
    background-color: $lightgray;
    border: none;
    height: 32px;
    border-radius: 0 6px 6px 0;

    i {
      font-size: 0.8rem;
      font-weight: bold;
      color: $green;
    }
  }
}
.right_header {
  .cart-counter {
    position: absolute;
    text-align: center;
    border-radius: 50%;
    color: $white;
    font-size: 0.6rem;
    width: 13px;
    height: 13px;
    background-color: $green;
    top: -8px;
    left: 10px;
  }
}
</style>
