<template>
  <b-container>
    <b-alert variant="success" show style="margin-top: 30px;"> TODO: add picture here, and links to certificates</b-alert>
    <div class="row">
      <div class="col-sm-8">
        <h5>RENOTECH OY - over 20 years of experience!</h5>
        <p>Renotech Oy develops, manufactures, markets and imports products for house building and renovation as well as for interior decoration and shipbuilding.</p>
        <p>There are several products with special features in our interior design selection. These properties include incombustibility, soundproofing, sound absorption, lightness, durability or appearance requirements, such as likeness to the preceding structure.</p>
        <ul>
          <li>Shipbuilding and interior design products</li>
          <li>Spray-​on​ ​a​coustic ​p​roducts and ​noise reduction flooring</li>
          <li>Fire protection products and non-flammable composite structures</li>
          <li>Quick-curing floor level​ling compounds​ and ​screeds</li>
          <li>​Adhesive systems (Bonding solutions) and special concrete for demanding conditions</li>
          <li>Special​ist​ products for renovation​ work and concrete protection</li>
          <li>Special paints and coatings</li>
        </ul>
      </div>
      <div class="col-sm-4">
         <google-map></google-map>
      </div>
      <div class="col-sm-4">
        <div class="about-titles">Sales:</div>

        <div class="about-titles">Fire protection for wooden constructions, and firestops:</div>
        <div>Jari Koivisto <a href="mailto:jk@renotech.fi">jk@renotech.fi</a></div>
        <div class="end-line">Tel. +358 40 485 1550</div>

        <div class="about-titles">Fire protection for steel and concrete constructions, and acoustic compounds:</div>
        <div>Bob Talling <a href="bt@renotech.fi">bt@renotech.fi</a></div>
        <div class="end-line">Tel. +358 50 558 1806</div>

        <div class="about-titles">Billing address:</div>
        <span class="about-titles-underlined">e-invoicing:</span>
        <div>003709674124</div>
        <div>Operator: Liaison Technologies Oy</div>
        <div class="end-line">Operator ID: 003708599126</div>

        <span class="about-titles-underlined">Conventional invoicing:</span>
        <div>Renotech Oy</div>
        <div>c/o Laskentatieto Oy Irja Hirsinummi</div>
        <div>Yliopistonkatu 33 G 122</div>
        <div>20100 TURKU</div>
        <div class="end-line"><a href="laskut@laskentatieto.fi">laskut@laskentatieto.fi</a></div>

        <span class="about-titles">Office:</span>
        <div>010 8301600 / <a href="rt@renotech.fi">rt@renotech.fi</a></div>
        <div><b>MD:</b> Bob Talling:</div>
        <div>y-tunnus: 0967412-4</div>
        <div class="end-line">VAT: FI09674124</div>
      </div>
            <div class="col-sm-4">
        <p>​​Renotech Oy develops, manufactures, markets and imports innovative fire- and sound proofing products and other construction industry products.</p><br>
        <p align="Center"> CERTIFICATES LINK </p>
      </div>
      <div class="col-sm-4">
        <p>Renotech Oy represents the following manufacturers:</p>
        <ul class='list-unstyled'>
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
/* eslint-disable */ 
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  components: {
    GoogleMap
  }
}
</script>

<style lang="scss" scoped>
  .list-unstyled {
    li {
      list-style-type: none;
    }
  }
  .about-titles {
    font-weight: bold;
    font-size: 100%;
  }
  .about-titles-underlined {
    font-weight: 80%;
    text-decoration: underline;
  }
  .end-line {
    padding-bottom: 10px;
  }
</style>
