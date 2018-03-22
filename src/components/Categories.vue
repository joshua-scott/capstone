<template>
  <b-container class="container clickable">
    <b-jumbotron
      class="edited-jumbotron"
      v-b-toggle="category.name"
      v-for="category in categories"
      :key="`${category.name}-${category.language}`"
      :bg-variant="colours[Math.floor(Math.random() * 8)]"
      text-variant="white"
      border-variant="dark"
    >
      <b-row>
        <b-col cols="3">
          <b-img class="reposition-logo" src="http://www.pngmart.com/files/2/Black-Panther-Logo-Transparent-Background.png" fluid alt="Responsive image" />
        </b-col>
        <b-col>
          <h2 slot="header" class="display-3">
            {{ category.name }}
          </h2>
          <h3 slot="lead" class="lead">
            {{ category.description }}
          </h3>
          <hr class="thick-hr">
        </b-col>
      </b-row>
      <!-- <hr class="my-4"> -->
      <b-collapse :id="category.name" class="mt-2">
          <b-card
            v-for="subCategory in subCategories(category.name)"
            :key="`${subCategory.name}-${subCategory.language}`"
          >
          <!-- <p class="card-text">{{ subCategory.name }}</p> -->
            <router-link
              :to="{name: 'ProductList', params: { subCategory: slug(subCategory.name), subCategoryId: subCategory.id }}"
              class="nav-link"
            >{{ subCategory.name }}</router-link>
          </b-card>
      </b-collapse>
    </b-jumbotron>
  </b-container>
</template>

<script>
import slug from '../helpers/slug'

export default {
  data () {
    return {
      variantIndex: 0,
      colours: [
        'primary',
        'secondary',
        'success ',
        'warning',
        'danger',
        'info',
        'dark'
      ]
    }
  },
  methods: {
    slug,
    // gets the subCategories by the Main Category
    subCategories (categoryName) {
      const subCats = this.$store.state.subCategories
      const language = this.$store.state.language

      return subCats.filter(subCat => {
        const catName = this.slug(categoryName)
        return subCat.language === language && subCat.category === catName
      })
    }
  },
  computed: {
    categories () {
      const categories = this.$store.state.categories
      const language = this.$store.state.language
      return categories.filter(category => category.language === language)
    }
  }
}
</script>

<style scoped>
  .container {
      margin-top: 30px;
  }
  .card-text {
      color: black !important;
  }
  .clickable :hover {
    cursor: pointer;
  }
  .thick-hr {
  border: none;
  height: 10px;
  /* Set the hr color */
  background-color:rgba(255,255,255,0.5);
  }
  .edited-jumbotron{
    padding-top: 30px;
    padding-bottom:15px;
  }
  .reposition-logo{
    margin-top:10px;
  }
</style>
