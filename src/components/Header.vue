<template lang="pug">
  b-container(class="header")
    b-row(
      align-h="between"
      align-v="center")

      b-col(cols="3")
        router-link(to="/")
          b-img(
            class="renotech-logo"
            src="@/assets/logo.jpg")

      b-col(cols="3")
          b-img(
            class="flag"
            :src="flagImage"
            @click="toggleLanguage")

      <!-- needs to be in a separate component other than Header-->
      b-col(cols="3")
        <div>
          <b-button v-b-modal.signInModal variant = "info button-wide">Sign In</b-button>
          <b-modal id="signInModal" centered title="Sign In" hide-footer>
            <div>
              <b-form>
                <b-form-group id="inputGroupEmail" label="Email:" label-for="inputEmail">
                  <b-form-input id="inputEmail" type="email" v-model="form.email" required placeholder="Enter email">
                  </b-form-input>
                </b-form-group>
                <b-form-group id="inputGroupPassword" label="Password:" label-for="inputPassword">
                  <b-form-input id="inputPassword" type="password" v-model="form.password" required placeholder="Enter password">
                  </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary"><b>Sign In</b></b-button>
                <b-button variant="info"><b>Sign Up</b></b-button>
              </b-form>
            </div>
          </b-modal>
        </div>

      //- Search bar could be added later
      //- b-col
      //-   div
      //-     b-form-input(
      //-       type="text"
      //-       placeholder="Search"
      //-       class="search")
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    toggleLanguage () {
      this.$store.commit('toggleLanguage')
    }
  },
  computed: {
    language () {
      return this.$store.state.language
    },
    flagImage () {
      return require(`@/assets/flags/${this.$store.state.language === 'fi' ? 'gb' : 'fi'}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/_variables.scss';

  .header {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .renotech-logo {
    max-width: 250px;
  }

  .flag {
    max-width: 40px;
    &:hover {
      cursor: pointer;
    }
  }

  .button-wide {
    width: 70%;
  }
</style>
