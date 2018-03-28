<template lang="pug">
  <b-container fluid class="header">
    b-row(
      align-h="between"
      align-v="center")

      b-col(cols="3")
        router-link(to="/")
          b-img(
            class="renotech-logo"
            src="@/assets/logo.jpg")
      //- adds a global search box
      b-col(cols="4")
        div
          <SearchBox></SearchBox>

      b-col(cols="2")
          b-img(
            class="flag"
            :src="flagImage"
            @click="toggleLanguage")
  </b-container>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'

export default {
  components: {
    SearchBox
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
