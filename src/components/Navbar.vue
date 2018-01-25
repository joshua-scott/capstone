<template>
  <nav class="nav-container">
    <b-nav justified tabs>
      <b-nav-item active="">
        <router-link to="/" exact>Home</router-link>
      </b-nav-item>
      <b-nav-item >
        <router-link to="/products">Products</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/rd">Research & Development</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/about">About/Contact</router-link>
      </b-nav-item>
    </b-nav>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-container {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
