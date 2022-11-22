<template>
  <HeaderComponent />
  <JumboComponent />
  <main>
    <Everything />
    <HowWeWork />
    <section id="courses">
      <CardList
        :List="store.courses"
        Subtitle="Join Maxcoach at best"
        Title="Latest Online"
        titleSpan="Courses"
      />
    </section>
    <Testimonials />
    <TransformYou />
    <section id="blogs">
      <CardList
        :List="store.blogs"
        Subtitle="Read for more joyment"
        Title="Latest From"
        titleSpan="Our Blogs"
      />
    </section>
    <NewsLetter />
    <FooterComponent />
  </main>
</template>

<script>
import { store } from "./store";
import HeaderComponent from "./components/HeaderComponent.vue";
import JumboComponent from "./components/JumboComponent.vue";
import Everything from "./components/Everything.vue";
import HowWeWork from "./components/HowWeWork.vue";
import CardList from "./components/CardList.vue";
import NewsLetter from "./components/NewsLetter.vue";
import FooterComponent from "./components/FooterComponent.vue";
import Testimonials from "./components/Testimonials.vue";
import TransformYou from "./components/TransformYou.vue";
export default {
  components: {
    HeaderComponent,
    JumboComponent,
    Everything,
    HowWeWork,
    CardList,
    NewsLetter,
    FooterComponent,
    Testimonials,
    TransformYou,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;
#courses {
  background: linear-gradient(180deg, white 70%, $lightgray);
}
#blogs {
  padding-top: 1rem;
  background-color: $lightgray;
}
</style>
