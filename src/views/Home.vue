<template>

  <div>
    <b-container>
      <carousel></carousel>
      <hr>
      <div class="news-section">
        <b-row padding-top=20px>
          <b-col sm=12 lg=6 class="news-column1">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frenotechoy&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
            width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
          </b-col>
          <b-col sm=12 lg=6 class="news-column2">
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
  components: {carousel}
}
</script>

<style scoped lang="scss">
  .news-section{
    // background-color:#F4F4F4;
    padding-top: 30px;
    text-align: center;
    .news-column1 {
      border-right: 1px solid black;
    }
  }
</style>
