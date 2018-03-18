<template>
  <gmap-map
    :center="center"
    :zoom="13"
    style="width:100%; max-width: 400px; height: 400px;"
  >
    <gmap-marker
      v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
export default {
  data () {
    return {
      center: {lat: 60.443348, lng: 22.315356},
      markers: [{
        position: {lat: 60.443348, lng: 22.315356}
      }]
    }
  }
}
</script>
