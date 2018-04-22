<template>
  <b-container>
    <div class="jumbotron-styling" text-variant="white" border-variant="dark">
      <h1>
        Title for productLine
      </h1>
      <h5>
        Some introductions
      </h5>
    </div>
    <b-row>
      <b-col cols="9">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, natus delectus, harum neque unde necessitatibus cum sequi inventore aspernatur minus quos tenetur quae accusantium magnam enim aliquam pariatur alias sed ipsum dicta totam amet temporibus corrupti debitis! Expedita aperiam consectetur, delectus enim nobis a illo totam provident illum cupiditate aliquam sit itaque! Consequuntur quidem dicta, doloremque accusamus tenetur sunt, asperiores aut cumque amet nostrum dolorum, sapiente expedita. Id nemo, voluptatibus sed asperiores quas ipsa eaque perferendis, est distinctio, cum obcaecati!
        </p>
        <b-row>
          <b-col>
            <p>Size: 19mm-22mm-25mm</p>
          </b-col>
          <b-col>
            <p>Status: Available</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>Size: 19mm-22mm-25mm</p>
          </b-col>
          <b-col>
            <p>Status: Available</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>Size: 19mm-22mm-25mm</p>
          </b-col>
          <b-col>
            <p>Status: Available</p>
          </b-col>
        </b-row>
        <div>
          <b-embed class="styling-embed" type="iframe"
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
  height:125px;
  margin-bottom:40px;
  padding:25px;
  padding-top:10px;
  color:white;
  border-radius:5px;
}
.header-padding{
}
.b-media-margin{
  margin-bottom:10px;
}
.styling-embed{
  padding-top:25px;
  padding-bottom:50px;
}
</style>
