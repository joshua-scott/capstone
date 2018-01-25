<template>
  <div>
    <app-header></app-header>
    <navbar></navbar>
    <b-container>
      <h1>Research and Development Page</h1>
      <p>Welcome to this page!</p>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    appHeader: Header,
    Navbar
  }
}
</script>

<style>

</style>
