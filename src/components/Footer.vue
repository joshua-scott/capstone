<template>
  <b-container fluid class="footer">
    <hr class="hr">
    <b-card text-variant="dark">
      <b-row>
        <b-col xs="12" sm="6" md="4">
          <div class="info-block">
            <h1 class="title">CONTACT INFORMATION</h1>
            <div>Renotech Oy</div>
            <div>Sampsankatu 4 B 20528</div>
            <div>TURKU FINLAND</div>
            <div>+358 40 485 1550</div>
            <div>+358 50 558 1806</div>
            <div><a href="rt@renotech.fi">rt@renotech.fi</a></div>
          </div>
        </b-col>
        <b-col xs="12" sm="6" md="4">
          <div class="info-block">
            <h2 class="title">OPENING HOURS</h2>
            <div>Mon - Fri 8:00-16:00</div>
          </div>
        </b-col>
        <b-col sm="12" md="4" class="social-icons">
          <ul>
            <li>
              <a href="https://www.facebook.com/renotechoy/" target="_blank">
              <b-img class="icon" src="@/assets/facebook.svg"/></a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
              <b-img class="icon" src="@/assets/twitter.svg"/></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
              <b-img class="icon" src="@/assets/instagram.svg"/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
              <b-img class="icon" src="@/assets/linkedin.svg"/></a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<style lang="scss" scoped>
@import '~@/styles/_variables.scss';
.footer {
    margin-top: 50px;
    margin-bottom: 20px;
    background-color: #FFFFFF;
  }

.hr {
  border-top: 5px solid #999;
  margin-bottom: 50px;
}

.info-block {
  text-align: center;
  padding-bottom: 15px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.icon {
  max-width: 35px;
  min-width: 35px;
}

.social-icons {
  text-align: center;
  ul {
    list-style-type: none;
    padding: 0px;
  }
  li {
    display: inline-block;
  }
}
</style>
