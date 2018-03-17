<template lang="pug">
  <div>
      <div>
        <rdcarousel></rdcarousel>
      </div>
      <div>
        <articles></articles>
      </div>
  </div>
</template>

<script>

import Rdcarousel from '@/components/rdcarousel.vue'
import Articles from '@/components/Articles.vue'

export default {
  components: {
    Rdcarousel, Articles
  }
}
</script>

<style>

</style>
