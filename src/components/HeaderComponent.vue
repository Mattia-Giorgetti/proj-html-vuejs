<template>
  <header class="px-5 d-flex justify-content-between align-items-center">
    <nav class="d-none d-lg-block">
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
  <div class="navigation-tool">
    <span><i class="fa-solid fa-ruler-combined"></i></span>
    <span><i class="fa-solid fa-life-ring"></i></span>
    <span><i class="fa-solid fa-book"></i></span>
    <span><i class="fa-solid fa-cart-shopping"></i></span>
  </div>
  <a class="scroll-up" href="#"><i class="fa-solid fa-arrow-up-long"></i></a>
  <a class="chat-popup" href="#"><i class="fa-solid fa-message"></i></a>
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

header {
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: $white;
  z-index: 9999;
  box-shadow: 0px -6px 12px $black;
}
.navigation-tool {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40px;
  height: 160px;
  background-color: $white;
  position: fixed;
  top: 15%;
  right: 0;
  z-index: 9999;
  border-radius: 5px 0 0 5px;
  box-shadow: 0px 0px 3px lightgray;
}
.chat-popup {
  position: fixed;
  right: 20px;
  top: 90%;
  z-index: 999;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%),
    0 3px 1px -2px rgb(0 0 0 / 20%);
  display: block;
  padding: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  font-size: 25px;
  line-height: 60px;
  cursor: pointer;
  opacity: 1;
  color: $white;
  background-color: #1972f5;
  transition: all 0.4s ease;
  i {
    transform: rotate(-10deg);
    font-size: 1.5rem;
  }
  &:hover {
    transform: translateX(-10px);
  }
}
.scroll-up {
  position: fixed;
  right: 20px;
  top: 80%;
  z-index: 999;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%),
    0 3px 1px -2px rgb(0 0 0 / 20%);
  display: block;
  padding: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  font-size: 25px;
  line-height: 60px;
  cursor: pointer;
  opacity: 1;
  color: $white;
  background-color: $green;
  transition: all 0.4s ease;
  i {
    font-size: 1.3rem;
  }
  &:hover {
    transform: translateY(-10px);
  }
}

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
  transition: all 0.3s ease;

  &:hover {
    color: $green;
  }
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
    transition: all 0.3s ease;
    &:focus {
      background-color: white;
    }
  }
  button {
    background-color: $lightgray;
    border: none;
    height: 32px;
    border-radius: 0 6px 6px 0;
    transition: all 0.3s ease;
    &:hover {
      color: $white;
      background-color: $green;
    }
    &:hover i {
      color: $white;
    }
    i {
      font-size: 0.8rem;
      display: block;
      font-weight: bold;
      color: $green;
      transition: all 0.3s ease;
    }
  }
}
.right_header {
  i {
    transition: all 0.3s ease;
  }
  i:hover {
    color: $green;
    cursor: pointer;
  }
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
