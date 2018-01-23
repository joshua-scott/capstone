<template>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/rd">R&D</a></li>
      <li><a href="/about">About/Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '~@/styles/_variables.scss';

  nav {
    margin-top: 10px;
    background-color: $teal;
    display: flex;
    flex: 1 1 100%;
    border-bottom: 1px solid #ccc;
    ul {
      list-style: none;
      li {
        background-image: linear-gradient(
          to bottom,
          transparent 50%,
          rgba(162,211,156, 1) 50%,
          rgba(162,211,156,1) 95%,
          rgba(124,197,118,1) 95%
      );
      }
    }
  }
</style>
