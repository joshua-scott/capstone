<template lang="pug">
  div
    appHeader
    navbar
    b-container
      b-alert(variant="success" show style="margin-top: 30px;") 
        | {{ alertText }}
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    appHeader: Header,
    Navbar
  },
  data () {
    return {
      alertText: 'This will be the Research and Development page'
    }
  }
}
</script>

<style>

</style>
