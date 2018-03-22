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
      // If user changes language while viewing product subcategories, link to the new language version if possible.
      if (this.$route.params.subCategoryName) {
        const currentSubName = this.$route.params.subCategoryName
        const allSubcats = this.$store.state.subCategories
        const oldSubcat = allSubcats.find(subcat => this.slug(subcat.name) === currentSubName)
        const newSubcat = allSubcats.find(subcat => oldSubcat.id === subcat.id && newLanguage === subcat.language)

        if (newSubcat) {
          console.log(`Redirecting from ${oldSubcat.name} to matching subcategory ${newSubcat.name}`)
          this.$router.push({ name: 'ProductList', params: { subCategory: this.slug(newSubcat.name) } })
        } else {
          console.log(`Can't find translation for subcategory: '${oldSubcat.name}'. Redirecting to products.`)
          this.$router.push('/products')
        }
      }

      this.$store.commit('setLanguage', newLanguage)
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
