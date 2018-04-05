<template>
  <b-container>
    <section
      v-for="category in categories"
      :key="`${category.name}-${category.language}`"
      class="category-section"
    >
      <div class="section-top">
        <div class="section-top-text">
          <h2 class="category-title">{{ category.name }}</h2>
          <h5 class="category-description">{{ category.description }}</h5>
        </div>
        <img class="logo" :src="category.image" :alt="`${category.name} icon`" />
      </div>
      <div class="links">
      <ul>
        <li
          v-for="subCategory in subCategories(category.name)"
          :key="`${subCategory.name}-${subCategory.language}`"
        >
          <b-link :to="`/products/${slug(subCategory.name)}`">{{ subCategory.name }}</b-link>
        </li>
      </ul>
    </div>
    </section>
  </b-container>
</template>

<script>
export default {
  methods: {
    subCategories (categoryName) {
      const subcats = this.$store.state.subCategories
      const language = this.$store.state.language

      return subcats.filter(subcat => {
        return subcat.language === language && subcat.category === this.slug(categoryName)
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

<style scoped lang="scss">
  .category-section {
    margin: 2rem auto;
    max-width: 1000px;
    border: 3px solid var(--dark);
    border-radius: 5px;
    background: var(--dark);
    color: var(--light);
  }

  .section-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .category-title,
    .category-description {
      padding-left: 1.8rem;
    }

    .logo {
      height: 100px;
      width: auto;
    }
  }

  .links {
    background: var(--light);
    color: var(--dark);
    padding: 0.8rem;
    font-size: 1.2em;
    li {
      list-style-type: square;
      padding: 0.3em;
    }
  }

  @media screen and (max-width: 600px) {
    .section-top {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .logo {
        order: -1;
        padding-bottom: 1rem;
      }
      .category-title,
      .category-description {
        padding-left: 0;
      }
    }
  }
</style>
