<template>
  <b-container>
    <b-row align-v="center">

      <b-col>
        <router-link to="/">
          <b-img src="@/assets/logo.jpg" id="renotech-logo"/>
        </router-link>
      </b-col>

      <b-col>
        <span class="flags">
          <b-img thumbnail fluid
            src="@/assets/fi.svg"
            @click="setLanguage('fi')"
            id="flag-fi"
            class="flag"/>
          <b-img thumbnail fluid
            src="@/assets/gb.svg"
            @click="setLanguage('en')"
            id="flag-en"
            class="flag"/>
        </span>
      </b-col>

      <b-col>
        <input type="text" placeholder="Search">
      </b-col>

    </b-row>
  </b-container>
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

  #renotech-logo {
    max-width: 300px;
  }

  .flags img {
    padding: auto 100px;
    max-width: 40px;
    cursor: pointer;
  }
</style>
