<template>
  <b-container class="header">
    <b-row
      align-h="between"
      align-v="center"
    >
      <b-col cols="auto" class="mr-auto">
        <router-link to="/">
          <b-img
            class="renotech-logo"
            src="@/assets/logo.jpg"
          />
        </router-link>
      </b-col>

      <b-col cols="auto" class="language-select-group">
        <span @click="setLanguage('fi')" class="language-select">
          <span v-if="width >= 768" class="language-text" :class="{ active: language === 'fi' }">Suomi:</span>
          <img :src="flags.fi" alt="Finland flag" class="flag">
        </span>
        <span @click="setLanguage('en-gb')" class="language-select">
          <span v-if="width >= 768" class="language-text" :class="{ active: language === 'en-gb' }">English:</span>
          <img :src="flags.gb" alt="GB flag" class="flag">
        </span>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['width'],
  data () {
    return {
      flags: {
        fi: require('@/assets/flags/fi.svg'),
        gb: require('@/assets/flags/gb.svg')
      }
    }
  },
  methods: {
    setLanguage (newLanguage) {
      this.$store.commit('setLanguage', newLanguage)

      // If user changes language while viewing product subcategories, link to the new language version if possible.
      if (this.$route.params.subCategoryName) this.$router.push('/products')
    }
  },
  computed: {
    language () {
      return this.$store.state.language
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

    @media screen and (max-width: 400px) {
      max-width: 175px;
    }
  }

  .language-select {
    &:first-of-type {
      padding-right: 1rem;

      @media screen and (max-width: 410px) {
        padding-right: 0.1rem;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .language-text {
    padding-right: 5px;

    &.active {
      text-decoration: underline;
    }
  }

  .flag {
    max-width: 40px;
  }

</style>
