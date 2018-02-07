<template>
    <div>
        <b-button v-b-modal.signInModal variant = "info button-wide">Sign In</b-button>
        <b-modal id="signInModal" centered title="Sign In" hide-footer>
        <div>
            <b-form>
            <b-form-group id="inputGroupEmail" label="Email address:" label-for="inputEmail" description="Enter your Email address or Username.">
                <b-form-input id="inputEmail" type="email" v-model="form.email" required placeholder="Enter email">
                </b-form-input>
            </b-form-group>
            <b-form-group id="inputGroupPassword" label="Your Password:" label-for="inputPassword">
                <b-form-input id="inputPassword" type="password" v-model="form.password" required placeholder="Enter password">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary"><b>Sign In</b></b-button>
            <b-button variant="info"><b>Sign Up</b></b-button>
            </b-form>
        </div>
        </b-modal>
    </div>
</template>

<script lang="ts">
export default {
    data () {
        return {
            form: {
                email: '',
                password: ''
            }
    }
  }
}
</script>


<style scoped>
    .button-wide {
        width: 70%;
    }
</style>
