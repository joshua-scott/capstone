<template>
  <b-container class="container">
      <b-jumbotron class="edited-jumbotron" v-b-toggle="category.name" v-for="category in categories" :key="`${category.name}-${category.language}`" :bg-variant="randomVariant()" text-variant="white" border-variant="dark">
        <b-row>
          <b-col>
          </b-col>
          <b-col cols="9">
            <div>
              <h1 slot="header" class="display-3 ">
                {{ category.name }}
              </h1>
              <h3 slot="lead" class="lead">
                {{ category.description }}
              </h3>
            </div>
            <hr class="thick-hr">
          </b-col>
        </b-row>
        <!-- <hr class="my-4"> -->
        <b-collapse :id="category.name" class="mt-2">
            <b-card v-for="subCategory in subCategories(category.name)" :key="`${subCategory.name}-${subCategory.language}`">
            <p class="card-text">{{ subCategory.name }}</p>

            </b-card>
        </b-collapse>
    </b-jumbotron>
    </b-container>
</template>

<script>
export default {
  data () {
    return {
      variantIndex: 0
    }
  },
  methods: {
    // set random color for each Category
    randomVariant () {
      let variants = [
        'primary',
        'secondary',
        'success ',
        'warning',
        'danger',
        'info',
        'dark'
      ]
      return variants[(this.variantIndex++) % 7]
    },

    // gets the subCategories by the Main Category
    subCategories (categoryName) {
      const subCategories = this.$store.state.subCategories
      const language = this.$store.state.language
      return subCategories.filter(subCategory => subCategory.language === language && subCategory.category === categoryName.toLowerCase())
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
    .thick-hr {
      border: none;
    height:3px;
    /* Set the hr color */
    opacity: 0.5;
    background-color: rgb(248, 247, 247); /* Modern Browsers */
    }

    .edited-jumbotron {
      padding-bottom: 5px;
      
    }
</style>
