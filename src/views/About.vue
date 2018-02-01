<template lang="pug">
    b-container
      b-alert(variant="success" show style="margin-top: 30px;") This will be the About/Contact page
      p(style="color: red;")
        strong Here's some random sample data for now, to demonstrate how we can get data in the vuex store and show it:
      div(v-for="post in posts")
        h4 {{ post.title }}
        p {{ post.body }}
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.state.sampleData
    }
  }
}
</script>

<style>

</style>
