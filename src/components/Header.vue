<template>
  <b-container class="header">

    <b-row
      align-h="between"
      align-v="center">

      <b-col cols="3">
        <router-link to="/">
          <b-img
            src="@/assets/logo.jpg"
            class="renotech-logo"/>
        </router-link>
      </b-col>

      <b-col cols="2">
        <b-button
          variant="link" size = "sm"
          class="language-select"
          v-b-popover.hover="'Click to change language'"
          @click="toggleLanguage">
          <b-img rounded
            :src="flagImage"
            class="flag"/>
          {{ language === 'fi' ? 'English' : 'Suomi' }}
        </b-button>
      </b-col>

      <!-- Search bar could be added later -->
      <!-- <b-col>
        <div>
          <b-form-input
            type="text"
            placeholder="Search"
            class="search"></b-form-input>
        </div>
      </b-col> -->

    </b-row>

  </b-container>

</template>

<script>
export default {
  data () {
    return {
      language: 'en'
    }
  },
  methods: {
    toggleLanguage () {
      this.language = this.language === 'fi' ? 'en' : 'fi'
    }
  },
  computed: {
    flagImage () {
      return require(`@/assets/flags/${this.language === 'fi' ? 'gb' : 'fi'}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/_variables.scss';

  .header {
    margin: 20px auto;
  }

  .renotech-logo {
    max-width: 250px;
  }

  .flag {
    max-width: 40px;
    margin-right: 10px;
  }

  .language-select {
    text-decoration: none;
    &:hover {
      font-weight: 700;
    }
    a:hover {
      text-decoration: none;
    }
  }

</style>
