<template>
  <b-container>
    <div v-html="currentPage" class="current-page"></div>
    <research-development-carousel></research-development-carousel>
    <div>
      <research-development-article
        v-for="( article, i ) in articles" :key="i"
        :article="article"
      />
    </div>
  </b-container>
</template>

<script>
import ResearchDevelopmentCarousel from '@/components/ResearchDevelopmentCarousel.vue'
import ResearchDevelopmentArticle from '@/components/ResearchDevelopmentArticle.vue'

export default {
  props: ['currentView'],
  computed: {
    lang () {
      return this.$store.state.language
    },
    articles () {
      return this.$store.state.rdImages.filter(obj => obj.language === this.lang)
    },
    currentPage () {
      const page = this.currentView
      return this.$store.state.rdPages[page]
    }
  },
  components: {
    ResearchDevelopmentCarousel,
    ResearchDevelopmentArticle
  }
}
</script>

<style scoped lang="scss">

.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}
.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

</style>
