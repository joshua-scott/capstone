<template>
  <div class="articles">
    <ul>
      <li v-for="article in articles"
      :key="article.id">
        {{article.text}}
        <img v-bind:src="article.img">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'articles',
  data () {
    return {
      articles: [
        {
          text: '2015 seminar organised by ECI with all the top names of geopolymer and AAM: Angel Palomo, Yiannis Pontikes, Bob Talling, Jannie van Deventer, and Cyril Attwell​.',
          img: require('@/assets/r&d_images/article1.jpg')
        },
        {
          text: 'US Ambassador Bruce Oreck​ and R&D Engineer Valter Wigren discussing Renotech R&D Mill Technology in December of 2012.',
          img: require('@/assets/r&d_images/article2.jpg')
        },
        {
          text: 'From the left: Valter Wigren, Bob Talling, Ambassador Oreck and Nick Kuchova from the US Embassy checking biomaterial samples at Renotech Oy in December of 2012.',
          img: require('@/assets/r&d_images/article3.jpg')
        },
        {
          text: 'Professor Glukhovskys team in Helsinki 1988. From left: Elena Kavalerova, Bob Talling, Raisa Runova, Viktor Glukhovsky, Pavel Krivenko. ',
          img: require('@/assets/r&d_images/article4.jpg')
        },
        {
          text: 'Bob Talling in Monterrey 1985 presenting: Accelerated hardening of slag when used as an active binder.',
          img: require('@/assets/r&d_images/article5.jpg')
        },
        {
          text: 'Bob Talling (right) with Professor P.K. Mehta, Professor Odd Gjörv(Norway) and Dr. Kyösti Tuutti(Sweden) at Berkeley, California 1983. Dicussions about AAM.​',
          img: require('@/assets/r&d_images/article6.jpg')
        }

      ]

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
