<template>
  <v-parallax
    id="top"
    class="parallax"
    :src="imageurl"
    height="600"
    width="100%"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h2 class="display-3 font-weight-black text">{{siteTitle}}</h2>
      <h5 class="headline text">{{siteDescription}}</h5>
    </v-layout>
  </v-parallax>
</template>
<script>
export default {
  name: 'TheParallax1',
  data () {
    return {
      imageurl: 'images/parallax4.jpg',
      siteTitle: 'Kebukawa Shinado Portfolio',
      siteDescription: 'As Web Engineer'
    }
  }
}
</script>

<style lang="scss" scoped>
.parallax {
  padding: 0;
}
.text {
  color: #191970;
}
</style>
