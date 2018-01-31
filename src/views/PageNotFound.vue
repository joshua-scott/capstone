<template lang="pug">
    div
      app-header
      navbar
      b-container
        b-alert(variant="danger" show style="margin-top: 30px;") We couldn't find the page you were looking for. Go to our #[router-link(to="/") homepage]?
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
