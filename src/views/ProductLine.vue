<template>
  <b-container>
    <b-jumbotron class="jumbotron-styling" text-variant="white" border-variant="dark">
      <h1 class="header-padding">
        Title for productLine
      </h1>
      <h5>
        Some introductions
      </h5>
    </b-jumbotron>
    <b-row>
      <b-col cols="9">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, natus delectus, harum neque unde necessitatibus cum sequi inventore aspernatur minus quos tenetur quae accusantium magnam enim aliquam pariatur alias sed ipsum dicta totam amet temporibus corrupti debitis! Expedita aperiam consectetur, delectus enim nobis a illo totam provident illum cupiditate aliquam sit itaque! Consequuntur quidem dicta, doloremque accusamus tenetur sunt, asperiores aut cumque amet nostrum dolorum, sapiente expedita. Id nemo, voluptatibus sed asperiores quas ipsa eaque perferendis, est distinctio, cum obcaecati!
        </p>
        <div>
          <b-embed type="iframe"
           aspect="16by9"
           src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
           allowfullscreen>
          </b-embed>
        </div>
      </b-col>
      <b-col>
        <b-media class="b-media-margin">
          <b-img slot="aside" src="http://www.iconarchive.com/download/i86107/graphicloads/filetype/pdf.ico" width="64" height="64" alt="placeholder" />
          <h5 class="mt-0">Title of file</h5>
          <b-link href="#foo">Download here</b-link>
        </b-media>
        <b-media class="b-media-margin">
          <b-img slot="aside" src="http://www.iconarchive.com/download/i86107/graphicloads/filetype/pdf.ico" width="64" height="64" alt="placeholder" />
          <h5 class="mt-0">Title of file</h5>
          <b-link href="#foo">Download here</b-link>
        </b-media>
        <b-media class="b-media-margin">
          <b-img slot="aside" src="http://www.iconarchive.com/download/i86107/graphicloads/filetype/pdf.ico" width="64" height="64" alt="placeholder" />
          <h5 class="mt-0">Title of file</h5>
          <b-link href="#foo">Download here</b-link>
        </b-media>
        <b-media class="b-media-margin">
          <b-img slot="aside" src="http://www.iconarchive.com/download/i86107/graphicloads/filetype/pdf.ico" width="64" height="64" alt="placeholder" />
          <h5 class="mt-0">Title of file</h5>
          <b-link href="#foo">Download here</b-link>
        </b-media>
      </b-col>
    </b-row>
    
  </b-container>

</template>
<script>
export default {
}
</script>

<style>
.jumbotron-styling{
  background-color:#263779;
  opacity:0.6;
  max-height:200px;
}
.header-padding{
}
.b-media-margin{
  margin-bottom:5px;
}
</style>
