<template>
    <div>
        <b-button v-b-modal.signInModal variant = "info button-wide">Sign In</b-button>
        <b-modal id="signInModal" size="lg" centered title="" hide-footer>
          <b-container fluid>
            <b-row>
              <b-col>
                <h2>SIGN IN</h2>
                <b-form>
                  <b-form-group>
                      <b-form-input id="inputEmail" type="email" v-model="signIn.email" required placeholder="Enter email">
                      </b-form-input>
                  </b-form-group>
                  <b-form-group>
                      <b-form-input id="inputPassword" type="password" v-model="signIn.password" required placeholder="Enter password">
                      </b-form-input>
                  </b-form-group>
                  <b-button class="full-width" type="submit" variant="primary"><b>SIGN IN</b></b-button>
                </b-form>
              </b-col>
              <b-col>
                <h2>NEW MEMBERSHIP</h2>
                <b-form>
                  <b-form-group>
                      <b-form-input id="inputFirstName" type="email" v-model="register.firstName" required placeholder="First Name*">
                      </b-form-input>
                  </b-form-group>
                  <b-form-group>
                      <b-form-input id="inputLastName" type="password" v-model="register.lastName" required placeholder="Last Name*">
                      </b-form-input>
                  </b-form-group>
                  <b-form-group>
                      <b-form-input id="inputEmail" type="email" v-model="register.email" required placeholder="Email Address*">
                      </b-form-input>
                  </b-form-group>
                  <b-form-group>
                      <b-form-input id="inputPassword" type="password" v-model="register.password" required placeholder="Password*">
                      </b-form-input>
                  </b-form-group>
                  <b-form-group>
                      <b-form-input id="inputPasswordRetype" type="password" v-model="register.passwordRetype" required placeholder="Retype Password*">
                      </b-form-input>
                  </b-form-group>
                  <b-button class="full-width" type="submit" variant="primary"><b>REGISTER</b></b-button>
                </b-form>
              </b-col>
            </b-row>
            <hr class="hr-text" data-content = "OR">
            <b-row class="justify-content-md-center">
              <b-col cols="5"> 
                <b-button class="full-width" variant="outline-primary" size="lg">          
                  <strong>Facebook</strong> 
                </b-button>
              </b-col>
              <b-col cols="5"> 
                <b-button class="full-width" variant="outline-primary" size="lg">          
                  <strong>Google</strong> 
                </b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-modal>
    </div>
</template>

<script>
export default {
  data () {
    return {
      signIn: {
        email: '',
        password: ''
      },
      register: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordRetype: ''
      }
    }
  }
}
</script>

<style scoped>
  .full-width {
    width: 100%;
  }
  .button-wide {
    width: 150px;
  }
  h2 {
    text-align: center;
  }
  .hr-text {
    line-height: 1em;
    position: relative;
    outline: 0;
    border: 0;
    color: black;
    text-align: center;
    height: 1.5em;
    opacity: .75;
  }
  .hr-text:before {
    content: '';
    /* use the linear-gradient for the fading effect */
    /* use a solid background color for a solid bar */
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  .hr-text:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 .5em;
    line-height: 1.5em;
    /* this is really the only tricky part, you need to specify the background color of the container element... */
    color: #818078;
    background-color: #fcfcfa;
  }
</style>
