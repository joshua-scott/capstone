<template>
  <b-container class="container">
      <b-jumbotron v-for="category in categories" :key="`${category.name}-${category.language}`" :bg-variant="randomVariant()" text-variant="white" border-variant="dark">
        <template slot="header">
          {{ category.name }}
        </template>
        <template slot="lead">
          {{ category.description }}
        </template>
        <!-- <hr class="my-4"> -->
    </b-jumbotron>
    </b-container>
</template>

<script>
export default {
  data () {
    return {
      variantIndex: 0,
    }
  },
  methods: {
    // set random color for each Category
    randomVariant () {
      let variants = [
        "primary",
        "secondary",
        "success ",
        "warning",
        "danger",
        "info",
        "dark"
      ];
      return variants[(this.variantIndex++) % 7];
    }
  },
  computed: {
    categories () {
      const categories = this.$store.state.categories;
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
</style>


