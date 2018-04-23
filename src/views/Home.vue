<template>
  <div>
    <b-container v-if="brief">
      <carousel></carousel>
      <hr>
      <div>
        <b-row>
          <b-col class="mt-4" sm=12 lg=6>
            <h3>{{ brief.title }}</h3>
            <p>{{ brief.intro }}</p>
            <div v-html="brief.manufacturerList"></div>
            <b-embed v-if="homeLinks" type="iframe" aspect="16by9" v-src="homeLinks.videoLink" allowfullscreen></b-embed>
          </b-col>
          <b-col class="mt-4 text-center" sm=12 lg=6>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frenotechoy&tabs=timeline&width=470&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="470" height="700" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import carousel from '../components/Carousel.vue'
export default {
  components: {carousel},
  computed: {
    brief () {
      const language = this.$store.state.language
      return this.$store.state.aboutBrief[language]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
