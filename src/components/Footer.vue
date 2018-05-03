<template>
  <b-container v-if="page" class="footer">
    <hr class="hr">
    <b-card text-variant="dark">
      <b-row>
        <b-col xs="12" sm="6" md="4">
          <div class="info-block">
            <h1 v-html="page.contactInfoTitle" class="title"></h1>
            <div v-html="page.companyName"></div>
            <div v-html="page.address1"></div>
            <div v-html="page.address2"></div>
            <div v-html="page.phoneNumber1"></div>
            <div v-html="page.phoneNumber2"></div>
            <div><a :href="page.emailAddress">{{ page.emailAddressName }}</a></div>
          </div>
        </b-col>
        <b-col xs="12" sm="6" md="4">
          <div class="info-block">
            <h2 v-html="page.openTimesTitle" class="title"></h2>
            <div v-html="page.openDaysAndTimes"></div>
          </div>
        </b-col>
        <b-col sm="12" md="4" class="social-icons">
          <a :href="page.facebookLink" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
          </a>
          <a :href="page.youtubeLink" target="_blank">
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
  computed: {
    page () {
      const language = this.$store.state.language
      return this.$store.state.footerContent[language]
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
