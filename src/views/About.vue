<template>
  <b-container v-if="page">
    <b-row>

      <b-col class="mt-4" xs="12" md="6" >
        <div v-html="page.title"></div>
        <div v-html="page.description"></div>
      </b-col>

      <b-col class="mt-4" xs="12" md="6">
         <google-map></google-map>
      </b-col>

      <b-col class="mt-4" xs="12" md="6">
        <div v-html="page.contactInfo"></div>
      </b-col>

      <b-col class="mt-4" xs="12" md="6">
        <div v-html="page.manufacturerList"></div>
        <div v-html="page.certificatesList"></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  components: {
    GoogleMap
  },
  computed: {
    page () {
      const language = this.$store.state.language
      return this.$store.state.aboutPages[language]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
