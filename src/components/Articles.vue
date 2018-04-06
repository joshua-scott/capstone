<template>
  <div class="articles">

        <div class="container" v-for="article in articles"
        :key="article.id">

          <div class="row">
            <div class="col-md-6">

                  <img  v-bind:src="rdpage.image" style="width:100%">
                  <div class="caption">
                    rdpage.description
                  </div>
                  <div v-html="rdpage.description"></div>
            </div>

            <div class="col-md-6">

                  <img v-bind:src="article.img" style="width:100%">
                  <div class="caption">
                    {{article.text}}
                  </div>
            </div>
          </div>

  </div>
  </div>
</template>

<script>
export default {
  props: ['rdpage']
}
</script>

<style lang="scss" scoped>
  .row{
    margin-top: 50px;
    text-align: center;
  }
</style>
