<template>
  <b-container fluid class="footer">
    <hr class="hr">
    <b-card text-variant="dark">
      <b-row>
        <b-col xs="12" sm="6" md="4">
          <div class="info-block">
            <h1 class="title">{{ contactInfo[language] }}</h1>
            <div>Renotech Oy</div>
            <div>Sampsankatu 4 B 20528</div>
            <div>Turku, Finland</div>
            <div>+358 40 485 1550</div>
            <div>+358 50 558 1806</div>
            <div><a href="rt@renotech.fi">rt@renotech.fi</a></div>
          </div>
        </b-col>
        <b-col xs="12" sm="6" md="4">
          <div class="info-block">
            <h2 class="title">{{ openingHours[language] }}</h2>
            <div>{{ days[language] }} 8:00-16:00</div>
          </div>
        </b-col>
        <b-col sm="12" md="4" class="social-icons">
          <a href="https://www.facebook.com/renotechoy/" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
          </a>
          <a href="https://www.youtube.com/channel/UCSVXFiTqwXWa69nrHBHsDVw" target="_blank">
            <font-awesome-icon :icon="['fab', 'youtube']" size="2x" />
          </a>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data () {
    return {
      contactInfo: {
        fi: 'Yhteystiedot',
        'en-gb': 'Contact Information'
      },
      openingHours: {
        fi: 'Aukioloajat',
        'en-gb': 'Opening hours'
      },
      days: {
        fi: 'Maa - Per',
        'en-gb': 'Mon - Fri'
      }
    }
  },
  computed: {
    language () {
      return this.$store.state.language
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.footer {
    margin-bottom: 20px;
    background-color: #FFFFFF;
  }

.hr {
  border-top: 5px solid #999;
  margin-bottom: 1rem;
}

.info-block {
  text-align: center;
  padding-bottom: 1rem;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.social-icons {
  text-align: center;
  a {
    color: inherit;
  }
}
</style>
