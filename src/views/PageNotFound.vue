<template lang="pug">
  b-container
    b-alert(variant="danger" show style="margin-top: 30px;")
      | We couldn't find the page you were looking for. Go to our #[router-link(to="/") homepage]?
</template>

<script>
export default {

}
</script>

<style>

</style>
