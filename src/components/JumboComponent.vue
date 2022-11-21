<template>
  <div class="jumbo">
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <h2>Commence Business</h2>
      <h1>Distant Mentoring Program</h1>
      <button>
        Download free guidebook
        <i class="fa-solid fa-arrow-right ps-1"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumboComponent",
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.jumbo {
  background-image: url(../../public/images/home-3-hero-bg.jpg);
  height: 500px;
  background-size: cover;

  h2 {
    color: $white;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  h1 {
    color: $white;
    font-size: 3rem;
    font-weight: 300;
  }
  button {
    color: $green;
    margin-top: 1.5rem;
    font-size: 0.7rem;
    font-weight: bold;
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: $green;
      color: $white;
    }
  }
}
</style>
