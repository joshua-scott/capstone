<template>
  <b-container>

    <!--
      Todo:
      - Images and descriptions in Prismic
      - Styling of this whole page
      - Hardcode the information (employees etc) where it's relevant from the Weebly page.
      Don't worry about storing it in Prismic (at least for now).
     -->

    <b-row>
      <b-img :src="article.imageUrl" style="margin: auto;" />
      <div v-html="article.description"></div>
    </b-row>
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
