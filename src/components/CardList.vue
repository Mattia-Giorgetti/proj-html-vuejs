<template>
  <div class="container-sm p-5">
    <h3 class="text-center">{{ Subtitle }}</h3>
    <h2 class="text-center">
      {{ Title }} <span>{{ titleSpan }}</span>
    </h2>
    <div
      class="row p-4 ms-1 gap-4 flex-nowrap overflow-hidden"
      id="content"
      ref="content"
    >
      <div
        class="my-col p-0"
        :class="List === store.courses ? 'white_bg' : 'gray_bg'"
        v-for="(item, index) in List"
        :key="index"
      >
        <CardComponent :item="item" />
      </div>
    </div>
    <div class="dots d-flex justify-content-center gap-3" v-if="List === store.courses">
      <div @click="swipeLeft"></div>
      <div @click="swipeRight"></div>
      <div @click="swipeRight"></div>
      <div @click="swipeRight"></div>
    </div>
    <div class="d-flex justify-content-center" v-if="List === store.courses">
      <div class="w-50 pt-3 control">
        <span>
          Control your personal preference settings to get notified about appropriate
          courses.
        </span>
        <a href="#">View all courses <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
  <div class="arc" v-if="List === store.courses">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      width="100%"
      height="100"
    >
      <path
        class="elementor-shape-fill"
        d="M0 0v100h100V0Q50 200 0 0"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<script>
import { store } from "../store";
import CardComponent from "./CardComponent.vue";
export default {
  name: "CardList",
  props: {
    List: Array,
    Subtitle: String,
    Title: String,
    titleSpan: String,
  },
  data() {
    return {
      store,
    };
  },
  components: { CardComponent },
  methods: {
    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      if (
        !(
          (scrollPos === 0 || scrollPixels > 0) &&
          (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0)
        )
      ) {
        const startTime =
          "now" in window.performance ? performance.now() : new Date().getTime();

        function scroll(timestamp) {
          const timeElapsed = timestamp - startTime;

          const progress = Math.min(timeElapsed / duration, 1);

          element.scrollLeft = scrollPos + scrollPixels * progress;

          if (timeElapsed < duration) {
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }

        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft() {
      const content = this.$refs.content;
      this.scrollTo(content, -1200, 1200);
    },
    swipeRight() {
      const content = this.$refs.content;
      this.scrollTo(content, 400, 800);
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.arc {
  color: $white;
}
.control {
  font-size: 0.8rem;
  color: gray;
  a {
    text-decoration: none;
    color: $black;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
}
.dots {
  height: 20px;
  div {
    border: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: lightgray;
    transition: all 0.3s linear;

    &:hover {
      cursor: pointer;
      background-color: black;
      transform: scale(1.2);
    }
  }
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
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    width: calc(100%);
  }
}
.white_bg {
  background-color: $white;
  box-shadow: 0px 0px 10px lightgray;
}
.gray_bg {
  background-color: $lightgray;
}
</style>
