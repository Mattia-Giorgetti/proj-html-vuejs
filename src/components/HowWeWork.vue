<template>
  <section id="howwework">
    <div class="container-sm p-5">
      <div class="row justify-content-between p-4">
        <div class="col-lg-6">
          <div class="yt-thumb position-relative">
            <img
              class="how_we_firstPic"
              src="/images/stock-full-hd-11-670x450.jpg"
              alt="girl-phone"
            />
            <img
              class="how_we_secondPic"
              src="/images/icon-youtube-play.png"
              alt="yt-logo"
            />
            <img
              class="how_we_thirdPic"
              src="/images/maxcoach-shape-05-150x150.png"
              alt="shape"
            />
            <img
              class="how_we_forthPic"
              src="/images/maxcoach-shape-07-150x150.png"
              alt="shape 2"
            />
            <img class="how_we_fifthPic" src="/images/svg-0.svg" alt="shape 3" />
          </div>
        </div>
        <div class="col-lg-4 me-5">
          <h3>How we Work</h3>
          <h2>Upgrade Your Skills <span>Upgrade Your Life</span></h2>
          <p>
            Opening up more opportunities in front of you to get the ticket to more
            enjoyable door in life. Getting equipped with new skills for new sets of
            insight into your career. MaxCoach accompany learners in every stage of
            learning.
          </p>
          <div class="everything_question">
            <a href="#"
              >Download free guidebook <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
export default {
  name: "HowWeWork",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.row {
  h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 600;
    font-size: 2.2rem;
    span {
      color: $green;
      font-weight: 300;
    }
  }
  p {
    font-size: 0.7rem;
    margin-bottom: 1.3rem;
  }
  a {
    text-decoration: none;
    color: $black;
    font-size: 0.7rem;
    font-weight: 600;
  }
  .yt-thumb {
    .how_we_firstPic {
      width: 100%;
      border-radius: 5px;
    }
    .how_we_secondPic {
      width: 80px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .how_we_thirdPic {
      position: absolute;
      width: 26%;
      top: 40px;
      left: -80px;
      z-index: -4;
    }
    .how_we_forthPic {
      width: 28%;
      position: absolute;
      bottom: -65px;
      right: -18px;
      z-index: -4;
    }
    .how_we_fifthPic {
      position: absolute;
      top: -65px;
      left: -45px;
      z-index: -10;
    }
  }
}
</style>
