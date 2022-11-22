<template>
  <section id="TransformSection" class="pb-4">
    <div class="container-sm p-5">
      <div class="row justify-content-between p-4">
        <div class="col-lg-6">
          <div class="team_pic position-relative">
            <img class="how_we_firstPic" src="/images/home-3-team-image.png" alt="team" />
            <img
              class="how_we_secondPic"
              src="/images/maxcoach-shape-01.png"
              alt="shape1"
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
            <div class="how_we_fifthPic">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="202">
                <path
                  class="elementor-shape-fill"
                  d="M139.374 198.088c16.328 8.906 51.35-1.087 58.304-39.038 7.15-39.022-13.182-40.052-9.633-54.248 14.243-21.15 16.782-48.14 2.028-64.387-36.503-38.024-45.629 7.604-76.048-20.28C101.727 7.837 83.1-6.735 56.23 3.405 18.239 17.74 27.33 47.659 27.33 69.313c0 7.624-24.216 21.957-26.87 41.573-3.346 24.734 12.168 57.29 26.87 68.443 23.322 26.363 59.318 20.28 75.541 11.154 13.931-7.836 25.35 1.52 36.503 7.605z"
                  fill="currentColor"
                />
                >
              </svg>
            </div>
          </div>
        </div>
        <div class="col-lg-4 me-5 align-self-center position-relative">
          <div class="circleShape"></div>
          <h3>Everything in <span class="fw-bold">Maxcoach</span></h3>
          <h2>We're Here To <span>Transform </span>You!</h2>
          <p>
            Opening up more opportunities in front of you to get the ticket to more
            enjoyable door in life. Getting equipped with new skills for new sets of
            insight into your career. MaxCoach accompany learners in every stage of
            learning.
          </p>
          <button>Get Free Guide</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
export default {
  name: "TransformYou",
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
  border: 6px solid $goldrose;
  position: absolute;
  top: -80px;
  left: -30px;
}

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
  button {
    color: $white;
    background-color: $green;
    margin-top: 1.5rem;
    font-size: 0.7rem;
    font-weight: bold;
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: $purple;
    }
  }
  .team_pic {
    .how_we_firstPic {
      width: 90%;
      border-radius: 5px;
    }
    .how_we_secondPic {
      width: 100px;
      position: absolute;
      bottom: 0;
      left: -10%;
      transform: translate(-50%, -50%);
    }
    .how_we_thirdPic {
      position: absolute;
      width: 26%;
      bottom: 150px;
      left: -65px;
      z-index: -4;
    }
    .how_we_forthPic {
      width: 28%;
      position: absolute;
      bottom: -65px;
      right: 35%;
      z-index: -4;
    }
    .how_we_fifthPic {
      color: $green;
      opacity: 0.5;
      width: 20%;
      position: absolute;
      top: 45px;
      left: -15px;
      z-index: -10;
    }
  }
}
</style>
