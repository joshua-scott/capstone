<template>
  <nav class="nav-container">
    <router-link to="/">
      <img src="@/assets/logo.jpg" id="renotech-logo"/>
    </router-link>
    <span class="flags">
      <img src="@/assets/fi.svg" @click="setLanguage('fi')">
      <img src="@/assets/gb.svg" @click="setLanguage('en')">
    </span>
    <input type="text" placeholder="Search">
  </nav>
</template>

<script>
export default {
  methods: {
    setLanguage (language) {
      alert(`Change language to ${language}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/_variables.scss';

  .nav-container {
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #renotech-logo {
    max-width: 300px;
    display: inline-block;
  }

  .flags img {
    padding: auto 10px;
    max-width: 80px;
    cursor: pointer;
  }
</style>
