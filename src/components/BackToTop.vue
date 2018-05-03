<template>
  <back-to-top bottom="50px" right="50px" visibleOffset="50px">
    <button type="button" class="btn btn-info btn-to-top">
      <font-awesome-icon icon="chevron-up"></font-awesome-icon>
    </button>
</back-to-top>
</template>

<script>
import BackToTop from 'vue-backtotop'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: {
    BackToTop,
    FontAwesomeIcon
  }
}
</script>

<style>
  .btn-to-top {
    width: 60px;
    height: 60px;
    padding: 10px 16px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
    background-color: black;
  }
</style>
