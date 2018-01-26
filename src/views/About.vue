<template>
  <div>
    <app-header></app-header>
    <navbar></navbar>
    <b-container>
      <b-alert variant="success" show style="margin-top: 30px;">This will be the About/Contact page</b-alert>
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
  .hello {
    color: pink;
  }
</style>
