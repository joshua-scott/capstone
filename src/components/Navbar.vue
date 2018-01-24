<template>
  <nav>
      <a class="nav-link" href="/">Home</a>
      <a class="nav-link" href="/products">Products</a>
      <a class="nav-link" href="/rd">R&D</a>
      <a class="nav-link" href="/about">About/Contact</a>
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
    height: 3rem;
    background-color: $teal;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ccc;
    a.nav-link {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex-grow: 1;
      text-align: center;
      border-left: 1px solid $blue;
      &:hover {
        background-color: $gray;
      }
      &:first-child {
        border-left: none;
      }
    }
  }
</style>
