<template lang="pug">
  b-container(class="header")
    b-row(
      align-h="between"
      align-v="center")

      b-col(cols="3")
        router-link(to="/")
          b-img(
            class="renotech-logo"
            src="@/assets/logo.jpg")

      b-col(cols="2")
          b-img(
            class="flag"
            :src="flagImage"
            @click="toggleLanguage")

      <!-- needs to be in a separate component other than Header-->
      b-col(cols="3")
        <SignIn></SignIn>
      //- Search bar could be added later
      //- b-col
      //-   div
      //-     b-form-input(
      //-       type="text"
      //-       placeholder="Search"
      //-       class="search")
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    toggleLanguage () {
      this.$store.commit('toggleLanguage')
    }
  },
  computed: {
    language () {
      return this.$store.state.language
    },
    flagImage () {
      return require(`@/assets/flags/${this.$store.state.language === 'fi' ? 'gb' : 'fi'}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/_variables.scss';

  .header {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .renotech-logo {
    max-width: 250px;
  }

  .flag {
    max-width: 40px;
    &:hover {
      cursor: pointer;
    }
  }

</style>
