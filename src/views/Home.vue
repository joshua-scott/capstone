<template>

  <div>
    <b-container v-if="brief">
      <carousel></carousel>
      <hr>
      <div>
        <b-row>
          <b-col class="text-center" sm=12 lg=6>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frenotechoy&tabs=timeline&width=470&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="470" height="700" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
          </b-col>
          <b-col xs="12" md="6">
          <div v-html="brief.title"></div>
          <div v-html="brief.intro"></div>
          <div v-html="brief.manufacturerList"></div>
          </b-col>
          <b-col class="text-center" sm=12 lg=6>
            <b-embed type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/dOTttRvR2tI"
              allowfullscreen
            ></b-embed>
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
