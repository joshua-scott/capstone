<template>
  <div>
    <p>I am a product!</p>
    <p>My productName is: {{ productName }}</p>
    <p>My category is: {{ category }}</p>
    <p>My category is: {{ subcategory }}</p>
  </div>
</template>

<script>
export default {
  props: ['productName', 'category', 'subcategory']
}
</script>

<style lang="scss" scoped>

</style>
