<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
export default {
  name: 'search',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
        latitude: 44.4269,
        longitude: 26.1025
      }, {
        latitude: 44.4247,
        longitude: 26.1064
      }, {
        latitude: 44.4236,
        longitude: 26.1083
      }],
      map: null,
      bounds: null,
      markers: []
    }
  },
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0]
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({ 
        position,
        map: this.map
      });
    this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position))
    });
  }
};
</script>
<style scoped>
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>