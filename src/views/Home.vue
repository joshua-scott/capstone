<template>
  <div>
    <app-header></app-header>
    <navbar></navbar>
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
