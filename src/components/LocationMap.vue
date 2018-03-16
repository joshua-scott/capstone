<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
/* eslint-disable */
export default {
//   name: "location-map",
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + '-map',
      locationCoordinate: {
        latitude: 60.443348,
        longitude: 22.315356
      }
    }
  },
  mounted: function () {
    //   draws a google map showing Renotech Company Area
    const element = document.getElementById(this.mapName)
    const positionOnMap = new google.maps.LatLng(this.locationCoordinate.latitude, this.locationCoordinate.longitude)
    const options = {
      zoom: 13,
      center: positionOnMap
    }
    const map = new google.maps.Map(element, options)

    // adds position marker
    const position = positionOnMap
    const marker = new google.maps.Marker({
      position,
      map
    })
  }
}
</script>

<style scoped>
    .google-map {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background: gray;
    }
</style>
