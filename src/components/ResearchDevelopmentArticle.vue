<template>
  <b-container>

    <!--
      Todo:
      - Images and descriptions in Prismic
      - Styling of this whole page
      - Hardcode the information (employees etc) where it's relevant from the Weebly page.
      Don't worry about storing it in Prismic (at least for now).
      - Potentially, make Carousel.vue into a reusable component that receives its props (data) from the parent component (e.g. Home.vue for the one on the homepage, and ResearchDevelopment.vue for RD page).
     -->

  <!--  <b-row>
      <b-img :src="article.imageUrl" style="margin: auto;" />
      <div v-html="article.description"></div>
    </b-row> -->
  </b-container>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="scss" scoped>
  .row{
    margin-top: 50px;
    text-align: center;
  }
</style>
