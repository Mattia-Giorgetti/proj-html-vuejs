<template>
  <section id="testimonials">
    <div class="container-sm p-5 mt-5">
      <div class="row justify-content-between p-4">
        <div class="col-lg-4">
          <h3>Testimonials</h3>
          <h2>Why Do People <span>*Hearts*</span> Us?</h2>
          <p>
            Seeking for verbals of pur service quality? Find them here. Everything is
            transparent and straightforward for your sens of justification.
          </p>
          <div class="everything_question">
            <a href="#">View all <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="position-relative">
            <div class="testimonial_card rounded-1 p-4 me-5">
              <h4>Professional team of specialists and passionate mentors at reach</h4>
              <p>
                I need to get a certification for English proficiency and MaxCoach is my
                best choice. Their tutors are smart and professional when dealing with
                students.
              </p>
              <div class="d-flex gap-3">
                <img src="/images/testimonial-avata-01.jpg" alt="avatar1" />
                <div>
                  <h4 class="mb-1 text-uppercase">Madley Pondor</h4>
                  <p>/ IT Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials",
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.row {
  height: 350px;
  align-items: center;
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

  .testimonial_card {
    box-shadow: -4px 4px 100px $lightgray;
    height: 260px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    h4 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.8rem;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
}
</style>
