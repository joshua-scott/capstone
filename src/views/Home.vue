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
      <h2>Section One</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    </section>
    <div class="pimg2">
      <div class="ptext">
        <span class="border trans">Image Two Text
        </span>
      </div>
    </div>
  <section class="section section-dark">
    <h2>Section Two</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ad minim veniam quis nostrud laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
  </section>

  <div class="pimg3">
    <div class="ptext">
      <span class="border trans">Image Three Text</span>
    </div>
  </div>
  <section class="section section-dark">
    <h2>Section Three</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    </section>
    <div class="pimg3">
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
  }
}
</script>

<style>
.pimg1, .pimg2, .pimg3{
  position: relative;
  opacity: 0.80;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: blue;
}
.pimg1{
  background-image: url('http://momentumauctions.com/wp-content/uploads/2017/09/Kiev_Apt_MARTIN_architects_1.0.jpg');
  min-height: 500px;
}
.pimg2{
  background-image: url('http://momentumauctions.com/wp-content/uploads/2017/09/Kiev_Apt_MARTIN_architects_1.0.jpg');
  min-height: 400px;
}
.pimg3{
  background-image: url('http://momentumauctions.com/wp-content/uploads/2017/09/Kiev_Apt_MARTIN_architects_1.0.jpg');
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
