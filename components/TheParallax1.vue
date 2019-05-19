<template>
<div class="parallax">
  <v-parallax
    id="top"
    class="parallax_img"
    :src="imageurl"
    height="600"
    jumbotron
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

<h1 v-parallax="0.2">vue-parallax-js</h1>
</div>
</template>
<script>
export default {
  name: 'TheParallax1',
  data () {
    return {
      imageurl: 'images/parallax6.jpg',
      siteTitle: 'Kebukawa Shinado Portfolio',
      siteDescription: 'Portfolio of Web Engineer'
    }
  }
}
</script>

<style lang="scss" scoped>
.parallax img{
  height: 100%;
  object-fit: cover;
}
// .parallax_img {
//   padding: 0;
//   height: 100vh;
//   transform: none !important;
//   width: 100vw !important;
//   // width: 100%;
// }
.text {
  color: #fff;
}
</style>
