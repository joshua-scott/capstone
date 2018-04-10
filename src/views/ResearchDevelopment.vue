<template>
  <div>
      <div>
        <rdcarousel></rdcarousel>
      </div>
      <div>
        <research-development-article
          v-for="( article, i ) in articles" :key="i"
          :article="article"
        />
      </div>
  </div>
</template>

<script>

import Rdcarousel from '@/components/rdcarousel.vue'
import ResearchDevelopmentArticle from '@/components/ResearchDevelopmentArticle.vue'

export default {
  computed: {
    lang () {
      return this.$store.state.language
    },
    articles () {
      return this.$store.state.rdImages.filter(obj => obj.language === this.lang)
    }
  },
  components: {
    Rdcarousel,
    ResearchDevelopmentArticle
  }
}
</script>

<style>

.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}
.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

</style>
