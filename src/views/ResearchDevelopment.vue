<template lang="pug">
  b-container
      b-alert(variant="success" show style="margin-top: 30px;") This will be the R&D page
      p(style="color: red;")
        strong Here's some random sample data for now, to demonstrate how we can get data in the vuex store and show it:
      div(v-for="post in posts")
        h4 {{ post.title }}
        p {{ post.body }}
</template>

<script>
export default {
  data () {
    return {
      alertText: 'This will be the Research and Development page'
    }
  },
  computed: {
    posts () {
      return this.$store.state.otherpageData.data
    }
  }
}
</script>

<style>

</style>
