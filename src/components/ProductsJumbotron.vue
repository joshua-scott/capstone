<template>
  <b-container class="products-jumbotron">
    <b-jumbotron
      :header="header"
      :lead="lead"
      bg-variant="success"
      text-variant="light"
    >
      <p>For more information visit website</p>
      <b-btn variant="primary" to="/products">More Info</b-btn>
      <b-btn variant="success" to="/products">More Info</b-btn>
    </b-jumbotron>
  </b-container>
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
