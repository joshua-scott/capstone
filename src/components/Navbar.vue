<template>
  <b-container role="navigation">
    <b-nav
      justified
      :tabs="width > 425"
      :vertical="width <= 425"
    >
      <b-nav-item to="/" exact  >Home</b-nav-item>
      <b-nav-item to="/products">Products</b-nav-item>
      <b-nav-item to="/rd"      >R & D</b-nav-item>
      <b-nav-item to="/about"   >About/Contact</b-nav-item>
    </b-nav>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      width: window.innerWidth
    }
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    }
  },
  beforeMount () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
  .active.nav-link {
    font-weight: 700;
    color: #495057;
  }
</style>
