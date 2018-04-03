<template>
  <b-container fluid class="header">
    <!-- <b-row
      align-h="between"
      align-v="center">
      <b-col cols="auto" class="mr-auto">
        <router-link to="/">
          <b-img
            class="renotech-logo"
            src="@/assets/logo.jpg">
          </b-img>
        </router-link>
      </b-col>

      <b-col cols="4">
        <div>
          <SearchBox></SearchBox>
        </div>
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

    </b-row> -->

      <!-- <b-col cols="2">
        <b-img
          class="flag"
          :src="flagImage"
          :click="toggleLanguage">
        </b-img>
      </b-col> -->
      <Navbar></Navbar>
  </b-container>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
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
