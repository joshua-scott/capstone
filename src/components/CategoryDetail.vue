<template>
  <div>
    <div role="group" :aria-lableledby="categoryName">
        <b-dropdown-header @click="showSubCat(!show)" :id="categoryName" class="category-header">
          {{ categoryName }}
          <span v-show="hasSubCat">
            <font-awesome-icon v-if="!show" icon="chevron-circle-right"></font-awesome-icon>
            <font-awesome-icon v-else-if="show" icon="chevron-circle-down"></font-awesome-icon>
          </span>
        </b-dropdown-header>
        <transition name="shiftx">
          <div v-show="show">
            <b-nav-item class="sub-category" :to="`/products/${slug(subCategory.name)}`" :aria-describedby="categoryName" v-for="subCategory in subCategories"
              :key="`${subCategory.name}-${subCategory.language}`">{{ subCategory.name}}
            </b-nav-item>
          </div>
        </transition>
        <b-dropdown-divider></b-dropdown-divider>
      </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  props: [
    'categoryName',
    'show'
  ],
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
    }
  },
  computed: {
    lang () {
      return this.$store.state.language
    },
    subCategories () {
      const subcats = this.$store.state.subCategories
      const language = this.$store.state.language

      return subcats.filter(subcat => {
        return subcat.language === language && subcat.category === this.slug(this.categoryName)
      })
    },
    // checks if the category has > 1 sub-cat
    hasSubCat () {
      return this.subCategories && this.subCategories.length > 0
    }
  },
  methods: {

    // trigger the subcategories list
    showSubCat (isShown) {
      this.show = isShown
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

  .category-header {
    background-color: white;
    font-size: 1.5rem;
  }

  /* animation for the subcategories list*/
  .shiftx-enter-active, .shiftx-leave-active {
    transition: all 0.25s ease-in-out;
  }
  .shiftx-enter, .shiftx-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform :  translateX(10px);
  }

  /* style for subcategories*/
  .sub-category:hover {
    background-color: $bootstrap-light;
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
