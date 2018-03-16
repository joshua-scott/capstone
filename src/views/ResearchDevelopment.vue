<template lang="pug">
<div>
    <div>
    <rdcarousel></rdcarousel>
    </div>
    <div>
    <articles></articles>
    </div>
    b-container
        b-alert(variant="success" show style="margin-top: 30px;") This will be the R&D page
        p(style="color: red;")
          strong Here's some random sample data for now, to demonstrate how we can get data in the vuex store and show it:
        div(v-for="post in posts")
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
