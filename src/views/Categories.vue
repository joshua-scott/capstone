<template>
  <div>
    <!-- <b-container style="max-width: 1000px;">
      <b-jumbotron
        class="welcome-jumbotron"
        v-if="lang === 'en-gb'"
        header="Welcome to our products!"
        lead="We have over 100 products for professional use available. Choose a category or use the search function below."
        bg-variant="dark"
        text-variant="light"
        header-level="4"
      >
        <search-box></search-box>
      </b-jumbotron>

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
    </b-container> -->
    <b-nav-item-dropdown :text="title" class="m-md-2">
      <!-- <div role="group" :aria-lableledby="category.name" v-for="category in categories" :key="`${category.name}-${category.language}`">
        <b-dropdown-header @mouseover="showSubCat(true)" @mouseleave="showSubCat(false)" :id="category.name" class="category-header">{{ category.name }}</b-dropdown-header>
        <transition name="shiftx">
          <div v-show="show">
            <b-nav-item :to="`/products/${slug(subCategory.name)}`" @mouseover="showSubCat(true)" :aria-describedby="category.name" v-for="subCategory in subCategories(category.name)"
              :key="`${subCategory.name}-${subCategory.language}`">{{ subCategory.name}}
            </b-nav-item>
          </div>
        </transition>
        <b-dropdown-divider></b-dropdown-divider>
      </div> -->
      <category-detail v-for="category in categories" :key="`${category.name}-${category.language}`" :categoryName="`${category.name}`"></category-detail>
    </b-nav-item-dropdown>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import CategoryDetail from '@/components/CategoryDetail.vue'
export default {
  components: {
    SearchBox,
    CategoryDetail
  },
  data () {
    return {
    }
  },
  computed: {
    title () {
      return this.lang === 'fi' ? 'Tuotteet' : 'Products'
    },
    categories () {
      const categories = this.$store.state.categories
      const language = this.$store.state.language
      return categories.filter(category => category.language === language)
    },
    lang () {
      return this.$store.state.language
    },
    productCount () {
      const products = this.$store.state.products.filter(p => p.language === this.lang)
      return products.length
    }
  },
  methods: {
    subCategories (categoryName) {
      const subcats = this.$store.state.subCategories
      const language = this.$store.state.language

      return subcats.filter(subcat => {
        return subcat.language === language && subcat.category === this.slug(categoryName)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  $bootstrap-light: #f8f9fa;
  $renotech-blue: #263977;

  .welcome-jumbotron {
    padding-bottom: 1rem;
  }

  .category-section {
    margin: 2rem auto;
    border: 3px solid $renotech-blue;
    border-radius: 5px;
    background: darken($bootstrap-light, 20%);
    color: $renotech-blue;
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
    color: $renotech-blue;
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
