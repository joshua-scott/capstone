<template>
  <b-container>
    <b-alert variant="success" show style="margin-top: 30px;"> TODO: add picture here, and links to certificates</b-alert>
    <div class="row">
      <div class="col-sm-5">
        <p>​​Renotech Oy develops, manufactures, markets and imports innovative fire- and sound proofing products and other construction industry products.</p><br>
        <p align="Center"> CERTIFICATES LINK </p>
      </div>
      <div class="col-sm-7">
        <p>Renotech Oy represents the following manufacturers:</p>
        <ul>
          <li><a href="https://gcpat.com/en/solutions/products/monokote-fireproofing" target="_blank">W.R Grace​:</a>  Steel and concrete fire proofing (with sound proofing)</li>
          <li><a href="https://securo.no/" target="_blank">Securo:</a> Fire stop air vents for wood constructions</li>
          <li><a href="http://tenapors.lv/en" target="_blank">Tenax Group:</a> MS-Polymer® based sealants and adhesives​</li>
          <li><a href="https://fin.sika.com/" target="_blank">Sika-Finland:</a>  ​Viscoelastic, floating floors</li>
          <li>​​<a href="http://www.firetherm.com/" target="_blank">Firetherm: </a>Fire stops</li>
          <li><a href="https://www.vanbaerle.com/" target="_blank">van Baerle​:</a> ​Incombustible adhesives</li>
          <li><a href="https://www.siniat.co.uk/en/" target="_blank">Lafarge Siniat:</a> Specialized gypsum products</li>
          <li><a href="http://www.formglas.com/" target="_blank">Formglas:</a> ​Reinforced gypsum elements</li>
          <li><a href="http://www.sto.fi/fi/tuotteet_jarjestelmat/lattiat/lattiat.html" target="_blank">Sto floor compounds​</a></li>
          <li><a href="http://www.datbim.com/partner/ead/Produit-SONOPHONE-1069.html" target="_blank">EAD Sonophone​:</a> Sound proofing compounds</li>
          <li><a href="http://www.kerneos.com/" target="_blank">Kerneos:</a> Aluminate cement​</li>
          <li><a href="http://www.vogl-ceilingsystems.de/" target="_blank">Vogl Deckensysteme GmbH: </a> ​Acoustic panels​</li>
          <li><a href="https://progeo.com/?portfolio=enviro-quality-control" target="_blank">PROGEO:</a> Waterproofing monitoring systems​</li>
          <li><a href="https://www.pavepad.dk/en/default.asp" target="_blank">PavePad: </a>Paving supports</li>
        </ul>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.state.otherpageData.data
    }
  }
}
</script>

<style lang="scss" scoped>
  li {
    list-style-type: none;
  }
</style>
