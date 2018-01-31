<template lang="pug">
  b-container(class="products-jumbotron")
    b-jumbotron(
      :header="header"
      :lead="lead"
      bg-variant="success"
      text-variant="light")
</template>

<script>
export default {
  data () {
    return {
      header: 'Our Products',
      lead: 'Renotech Oy develops, manufactures, markets and imports innovative fire- and sound proofing products and other construction industry products.'
    }
  }
}
</script>

<style lang="scss" scoped>
  .products-jumbotron {
    margin-top: 30px;
  }
</style>
