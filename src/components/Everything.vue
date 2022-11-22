<template>
  <section id="everything_in">
    <div class="container-sm p-5 mt-5">
      <div class="row justify-content-between p-4">
        <div class="col-lg-4">
          <h3>Everything in <span class="fw-bold">Maxcoach</span></h3>
          <h2>Learn about our <span>Work Culture</span> at MaxCoach</h2>
          <p>
            Spend some time to visit our website or head office and discover our current
            courses, enrollment procedure, and registration deadline. We're opening new
            classes every beginning of each month.
          </p>
          <div class="everything_question">
            <span>Have questions? </span>
            <a href="#">Get Free Guide <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="position-relative">
            <div class="circleShape"></div>
            <img
              class="everything_in_firstPic"
              src="/images/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg"
              alt="team"
            />
            <img
              class="everything_in_secondPic"
              src="/images/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg"
              alt="blue-shirt-girl"
            />
            <img
              class="everything_in_thirdPic"
              src="/images/maxcoach-shape-07-150x150.png"
              alt="shape"
            />
            <img
              class="everything_in_forthPic"
              src="/images/maxcoach-shape-02.png"
              alt="shape 2"
            />
            <img
              class="everything_in_fifthPic"
              src="/images/maxcoach-shape-08.png"
              alt="shape 3"
            />
          </div>
        </div>
      </div>
      <div class="stats mt-5 d-flex justify-content-center align-items-center gap-5">
        <div class="stats-item pe-4">
          <span class="d-block text-center">129+</span>
          <span>Enrolled Leaners</span>
        </div>
        <div class="stats-item pe-4">
          <span class="d-block text-center">80</span>
          <span>Finished Sessions</span>
        </div>
        <div class="stats-item">
          <span class="d-block text-center">4%</span>
          <span>Satisfaction Rate</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
export default {
  name: "Everything",
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
  .everything_question {
    span {
      font-size: 0.7rem;
    }
    a {
      text-decoration: none;
      color: $green;
      font-size: 0.7rem;
      font-weight: 600;
    }
  }
  .everything_in_firstPic {
    width: 90%;
    border-radius: 5px;
  }
  .everything_in_secondPic {
    position: absolute;
    width: 27%;
    top: -25%;
    right: 0;
  }
  .everything_in_thirdPic {
    position: absolute;
    top: -15%;
    right: 10%;
    width: 120px;
    z-index: -2;
  }
  .everything_in_forthPic {
    width: 20%;
    position: absolute;
    bottom: -70px;
    right: 110px;
  }
  .everything_in_fifthPic {
    position: absolute;
    width: 25%;
    left: 10px;
    bottom: -4px;
    z-index: -4;
  }
  .circleShape {
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 6px solid $goldrose;
    position: absolute;
    top: 0;
    left: -140px;
  }
}

.stats {
  .stats-item span:first-child {
    color: $green;
    font-weight: 700;
    font-size: 2.2rem;
  }
  .stats-item span:last-child {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.8rem;
  }
}
</style>
