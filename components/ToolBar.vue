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
      <v-layout row wrap align-center justify-center>
        <v-flex>
          <v-btn
            flat
            v-scroll-to="'#about'"
          >
              About me
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn
            flat
            v-scroll-to="'#skills'"
          >
              Skills
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn
            flat
            v-scroll-to="'#portfolio'"
          >
              Portfolio
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn
            flat
            v-scroll-to="'#contact'"
          >
              Contact
          </v-btn>
        </v-flex>
      </v-layout>
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
.tool-bar__logo {
  font-weight: bold;
}
@media (max-width: 760px) {
  .tool-bar__logo {
    display: none;
    }
}
</style>
