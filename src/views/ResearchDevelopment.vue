<template lang="pug">
  b-container
    b-alert(variant="success" show style="margin-top: 30px;")
      | {{ alertText }}
</template>

<script>
export default {
  data () {
    return {
      alertText: 'This will be the Research and Development page'
    }
  }
}
</script>

<style>

</style>
