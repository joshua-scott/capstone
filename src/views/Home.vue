<template>
  <div>
    <b-container fluid>
    <div class="pimg1">
      <div id="board">
        <span class="border">Register Now</span>
        <div class="class">
        </div>
      </div>
    </div>

    <section class="section section-dark">
      <h2>{{ homePage.section1_heading}}</h2>
      <p>{{ homePage.section1_text}}</p>
    </section>
    <div class="pimg2">
      <div class="ptext">
        <span class="border trans">Image Two Text
        </span>
      </div>
    </div>
  <section class="section section-dark">
    <h2>{{ homePage.section2_heading}}</h2>
      <p>{{ homePage.section2_text}}</p>
  </section>

  <div class="pimg3">
    <div class="ptext">
      <span class="border trans">Image Three Text</span>
    </div>
  </div>
  <section class="section section-dark">
    <h2>{{ homePage.section3_heading}}</h2>
      <p>{{ homePage.section3_text}}</p>
    </section>
    <div class="pimg4">
      <div class="ptext">
        <span class="border">
          Image 4 text
        </span>
      </div>
    </div>
</b-container>
</div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  components: {
    Carousel
  },
  computed: {
    // gets HomePage data in current language
    homePage () {
      const language = this.$store.state.language
      const homePage = this.$store.state.homePages.filter(page => page.language === language)
      console.log(homePage)
      return homePage[0]
    }
  }
}
</script>

<style>
.pimg1, .pimg2, .pimg3, .pimg4{
  position: relative;
  opacity: 0.80;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: blue;
}
.pimg1{
  background-image: url('https://images.pexels.com/photos/704982/pexels-photo-704982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  min-height: 700px;
}
.pimg2{
  background-image: url('https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  min-height: 400px;
}
.pimg3{
  background-image: url('https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  min-height: 400px;
}
.pimg4{
  background-image: url('https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  min-height: 400px;
}

.section{
  text-align: center;
  padding: 50px 80px;
}

.section-light{
  background-color: #f4f4f4;
  color: #666;
}
.section-dark{
  background-color: #282e34;
  color: #ddd;
}

.ptext{
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #00a1c9;
  font-size: 27px;
  letter-spacing: 8px;
  text-transform: uppercase;
}

#board{
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 30px;
}

.ptext .border{
  background-color: #111;
  color:#fff;
  padding: 20px;
}
#board .border{
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-weight: bold;
}

footer{
  padding: 6px;
  text-align: center;
  background-color: white;
  font-weight: bold;
  border-top: 3px black solid;
}

@media(max-width: 568px){
  .pimg1,.pimg2,.pimg3{
    background-attachment: scroll;
  }
}

</style>
