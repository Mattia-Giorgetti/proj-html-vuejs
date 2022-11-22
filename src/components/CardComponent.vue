<template>
  <div class="position-relative overflow-hidden">
    <div class="free-tag" v-if="item.h4 === '$0.00'">free</div>
    <img
      class="img-fluid"
      :class="item.color ? 'rounded-top' : 'rounded-1'"
      :src="item.img"
    />
  </div>
  <div class="p-3">
    <h4 :class="item.color ? 'greenText' : 'blackText'">{{ item.h4 }}</h4>
    <p>{{ item.p }}</p>
    <div class="d-flex align-items-center gap-4">
      <span
        ><i
          class="fa-regular pe-1"
          :class="item.color ? 'fa-file-zipper' : 'fa-calendar'"
        ></i>
        {{ item.span1 }}</span
      >
      <span
        ><i class="fa-regular pe-1" :class="item.color ? 'fa-user' : 'fa-eye'"></i>
        {{ item.span2 }}</span
      >
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
div.position-relative img {
  transition: all 0.7s ease-in;
}
div.position-relative:hover img {
  transform: scale(1.1);
  cursor: pointer;
}
.free-tag {
  background-color: #ee7455;
  color: $white;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.3rem;
  width: 45px;
  border-radius: 0 5px 0 0;
  position: absolute;
  top: 0;
  right: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    border-top: 16px solid #ee7455;
    left: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    border-bottom: 16px solid #ee7455;
    left: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
  }
}

.greenText {
  color: $green;
  font-size: 1.2rem;
  font-weight: 600;
}
.blackText {
  color: $black;
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
}
p {
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.4s ease;
  &:hover {
    color: $green;
    cursor: pointer;
  }
}
span {
  font-size: 0.7rem;
  color: gray;
  margin-bottom: 0.7rem;
}
</style>
