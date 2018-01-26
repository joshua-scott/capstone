<template>
  <div>
    <app-header></app-header>
    <navbar></navbar>
    <b-container>
      <b-alert variant="success" show style="margin-top: 30px;">This will be the About/Contact page</b-alert>
    </b-container>
    <b-container>
      <nice-table></nice-table>
      <div class="hello">
        <h1>Hello</h1>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import NiceTable from '@/components/NiceTable.vue'

export default {
  components: {
    appHeader: Header,
    Navbar,
    NiceTable
  }
}
</script>

<style>
  .hello {
    color: pink;
  }
</style>
