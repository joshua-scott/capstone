<template lang="pug">
  <b-container class="footer">
  <b-jumbotron bg-variant="primary" text-variant="dark">
  <b-row class="label">
    <b-col sm="6"><label for="input-valid">JOIN US AND GET SPECIAL OFFER</label></b-col>
    <b-col sm="5">
      <b-form-input id="input-valid" :state="true" type="text" placeholder="your email"></b-form-input>
    </b-col>
  </b-row>
  </b-jumbotron>
  <b-jumbotron bg-variant="Light" text-variant="dark">
    <b-row>
    <b-col>
    <h1 class="title">CONTACT INFORMATION</h1>
    </b-col>
    <b-col>
    <h2 class="hours">OPENING HOURS</h2>
    </b-col>
    <b-col class="media-logo">
    <a href="https://www.facebook.com/renotechoy/" target="_blank">
    <b-img src="@/assets/facebook.svg"/></a>
    </b-col>
    <b-col class="media-logo">
    <a href="https://twitter.com/" target="_blank">
    <b-img src="@/assets/twitter.svg"/></a>
    </b-col>
    <b-col class="media-logo">
    <a href="https://www.instagram.com/" target="_blank">
    <b-img src="@/assets/instagram.svg"/></a>
    </b-col>
    <b-col class="media-logo">
    <a href="https://www.linkedin.com/" target="_blank">
    <b-img src="@/assets/linkedin.svg"/></a>
    </b-col>
    </b-row>

    <b-row>
    <b-col>Renotech Oy</b-col>
    <b-col class="time">Mon - Fri 8:00-16:00</b-col>
    <b-col></b-col>
    </b-row>

    <b-row>
    <b-col>Sampsankatu 4 B 20520</b-col>
    </b-row>
    <b-row>
    <b-col>TURKU FINLAND</b-col>
    </b-row>
    <b-row>
    <b-col>+358 40 485 1550/+358 50 558 1806</b-col>
    </b-row>
    </b-jumbotron>
    </b-container>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/_variables.scss';
.footer {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #495057;
  }

  .label {
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
    color: white;
    height: 5px;
  }

  .title {
    font-size: 20px;
    text-align: left;
    font-weight: bold;
  }

  .hours {
    font-size: 20px;
    font-weight: bold;
    text-align: justify;
  }

  .time {
    text-align: center;
  }

  .media-logo {
    max-width: 60px;
    justify-content: flex-end;
  }
</style>
