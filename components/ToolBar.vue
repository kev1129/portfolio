<template>
  <v-toolbar
    flat
    color=white
    class="tool-bar"
    height=64
  >
    <v-toolbar-title
      class="tool-bar__logo"
    >
      {{siteLogo}}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="tool-bar__items">
      <v-btn
        flat
        v-scroll-to="'#about'"
      >
          About me
      </v-btn>
      <v-btn
        flat
        v-scroll-to="'#skills'"
      >
          Skills
      </v-btn>
      <v-btn
        flat
        v-scroll-to="'#portfolio'"
      >
          Portfolio
      </v-btn>
      <v-btn
        flat
        v-scroll-to="'#contact'"
      >
          Contact
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: 'ToolBar',
  data () {
    return {
      siteLogo: 'Kebukawa Shinado Portfolio'
    }
  }
}
</script>
<style lang="scss" scoped>
@media (max-width: 760px) {
  .tool-bar__logo {
    display: none;
  }
}
@media (max-width: 430px) {
  .tool-bar {
    display: none;
  }
}
</style>
