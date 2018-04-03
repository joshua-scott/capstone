<template>
  <b-container>

    <div class="parallax main-image">
      <!-- <div class="welcome">Welcome</div> -->
    </div>

    <section v-for="( slide, index ) in slides" :key="index">
      <div class="sales-text dark">
        <h2>{{ slide.heading }}</h2>
        <p>{{ slide.description }}</p>
      </div>
      <div class="parallax" :style="{ backgroundImage: `url(${slide.imageUrl})` }"></div>
    </section>

  </b-container>
</template>

<script>
export default {
  computed: {
    slides () {
      const slides = this.$store.state.carouselItems
      const language = this.$store.state.language
      return slides.filter(slide => slide.language === language)
    }
  }
}
</script>

<style scoped lang="scss">
.parallax {
  opacity: 0.95;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #fff;
  min-height: 600px;

  &.main-image {
    background-image: url('../assets/marketing.jpg');
    background-size: contain;
    min-height: 700px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.welcome {
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  color:#fff;
  padding: 30px;
}

.sales-text {
  text-align: center;
  padding: 50px 80px;
  background-color: #282e34;
  color: #ddd;

  @media screen and (max-width: 480px) {
    padding: 40px 50px;
  }
}
</style>
