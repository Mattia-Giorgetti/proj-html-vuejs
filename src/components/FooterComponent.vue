<template>
  <section id="footer">
    <div class="container-sm p-5">
      <div class="row p-4">
        <div class="col-lg-6">
          <h4 class="text-white">Address</h4>
          <ul>
            <li v-for="(item, index) in store.Address.text" :key="index">
              <a :href="item.url">{{ item.content }}</a>
            </li>
          </ul>
          <div class="fs-5 d-flex gap-3">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div class="col-lg-6 d-flex gap-5">
          <div v-for="(item, index) in store.footerlinks" :key="index">
            <h4 class="text-white">{{ item.title }}</h4>
            <ul :class="{ 'mt-4': item.title == '' }">
              <li v-for="(n, index) in item.text" :key="index">
                <a :href="n.url">{{ n.content }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <p><i class="fa-regular fa-copyright"></i>2020 Maxcoach. All rights Reserved</p>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
export default {
  name: "FooterComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

section {
  background-color: $cinder;
  i {
    color: gray;
    transition: all 0.3s ease;
    &:hover {
      color: $green;
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  h4 {
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li a {
      text-decoration: none;
      color: gray;
      font-size: 0.7rem;
      transition: all 0.3s ease;
      &:hover {
        color: $green;
      }
    }
  }
  p {
    color: gray;
    font-size: 0.7rem;
    padding: 1rem;
    margin-bottom: 0;
  }
}
</style>
