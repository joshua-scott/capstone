<template lang="pug">
  b-container(class="header")
    b-row(
      align-h="between"
      align-v="center")

      b-col(cols="3")
        router-link(to="/")
          b-img(
            src="@/assets/logo.jpg"
            class="renotech-logo")

      b-col(cols="3")
        b-button(
          variant="link" size = "sm"
          @click="toggleLanguage")
          b-img(
            rounded
            :src="flagImage"
            class="flag")

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
    margin-right: 0;
  }

</style>
