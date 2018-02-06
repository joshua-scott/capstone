<template lang="pug">
  <div>
    <b-container>
      <div id="introText">
        <h3>Introduction of the product</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem ratione et quibusdam sed tempora quae dolore aliquid explicabo fugiat, quisquam, velit tempore commodi, hic quas voluptatum consectetur incidunt consequatur esse. Numquam autem ipsam velit at explicabo laboriosam fugit. Praesentium quia repellat temporibus exercitationem, alias fugiat iure optio maxime magnam, perferendis nemo doloremque! Numquam dolorem, ducimus doloribus vero eius repellendus laboriosam officiis eum enim repudiandae veniam accusamus corporis nisi magni quibusdam accusantium, quas dolorum nobis tempore. Eveniet sequi distinctio incidunt at consectetur quidem, beatae vel cum, non tempora numquam ut culpa? Sint voluptas sapiente magni. Aspernatur facilis tenetur maxime sit labore eius, commodi, dolore obcaecati odio dignissimos amet quidem? Sequi eos cum laudantium ipsa, quam quae numquam ipsam error iusto blanditiis atque eius tempora dolor exercitationem, beatae iste aliquid mollitia odit ea officiis! Vero accusantium inventore repellat quod, in praesentium alias exercitationem, doloribus illo totam temporibus minus perferendis, debitis ut mollitia incidunt nemo cum tempora provident quidem? Nemo animi facilis aperiam cumque similique iusto consequatur qui tempora eaque. Tenetur, ab! Sequi, vel error. Officiis, optio mollitia dolorem numquam hic aliquid, esse, perspiciatis veniam cum reiciendis consectetur excepturi tenetur neque aperiam nihil assumenda minus ipsum earum. Cumque ad eum nobis nulla.</p>
      </div>
      <div>
        <b-card-group deck class="mb-3">
          <b-card bg-variant="primary" text-variant="white" header="Product 1" class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
          <b-card bg-variant="secondary" text-variant="white" header="Product 2" class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
          <b-card bg-variant="success" text-variant="white" header="Product 3" class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
        </b-card-group>
        <b-card-group deck class="mb-3">
          <b-card bg-variant="info" text-variant="white" header="Product 4" class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
          <b-card bg-variant="warning" text-variant="white" header="Product 5" class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
          <b-card bg-variant="danger" text-variant="white" header="Product 6" class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    appFooter: Footer
  }
}
</script>

<style>
#introText{
  margin-top:20px;
  margin-bottom:20px;
  text-align: center;
}
#introText p{
  text-align: justify;
}
</style>
