<template>
  <section id="newsletter" class="py-4">
    <div class="container-sm p-5 d-flex justify-content-center position-relative">
      <div class="circleShape"></div>
      <div class="text-center w-50">
        <h2>Subscribe <span>Newsletters</span></h2>
        <p>
          Enter your email address to register to our newsletter subscription delivered on
          a regular basis!
        </p>
        <div>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <img class="news_img_1" src="/images/maxcoach-shape-02.png" alt="shape2" />
      <img class="news_img_2" src="/images/maxcoach-shape-09.png" alt="" />
    </div>
  </section>
</template>

<script>
import { store } from "../store";
export default {
  name: "NewsLetter",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.circleShape {
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 6px solid $green;
  opacity: 0.6;
  position: absolute;
  bottom: 40%;
  left: 0;
}

h2 {
  font-weight: 600;
  span {
    font-weight: 300;
    color: $green;
  }
}
p {
  font-size: 0.8rem;
  padding: 1rem;
  color: $black;
}
input {
  width: 70%;
  padding: 0.5rem 1rem;
  font-size: 0.7rem;
  background-color: $lightgray;
  border-radius: 5px 0 0 5px;
  border: none;
}
button {
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.7rem;
  background-color: $green;
  font-weight: 600;
  color: $white;
  border-radius: 0 5px 5px 0;
}
.news_img_1 {
  position: absolute;
  width: 10%;
  bottom: 60px;
  right: 40px;
}
.news_img_2 {
  position: absolute;
  width: 15%;
  top: 30px;
  right: 40px;
}
</style>
