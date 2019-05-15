<template>
<div class="sns-box">
  <v-flex
    v-for="(icon, index) in icons"
    v-bind:key="index"
    class="sns"
    xs2
    sm2
    md2
  >
    <a
      v-bind:href="icon.link"
      class="sns__link"
      text-left
      target="_brank"
    >
      <i class="fab fa-border sns__icon" v-bind:class="icon.class"></i>
    </a>
  </v-flex>
</div>
</template>

<script>
export default {
  name: 'ContactToolicon',
  data () {
    return {
      icons: [
        {class: 'fa-instagram', link: 'https://www.instagram.com/shinado1998/?hl=ja'},
        {class: 'fa-facebook', link: 'https://www.facebook.com/profile.php?id=100009639289112'},
        {class: 'fa-github', link: 'https://github.com/kev1129'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.sns-box {
  text-align: left;
  margin-left: -16px;
.sns {
  display: inline-block;
  margin-right: 16px;
  .sns__link {
    text-decoration: none;
    color: #000;
    text-align: left;

    .sns__icon {
      font-size: 2.4rem;
    }
    .fa-border {
      border: 0.1rem solid rgba(0,0,0,0.8);
      border-radius: 50%;
    }
    .sns__icon:hover {
      opacity: 0.3;
      transition: 0.2s ease;
    }
  }
}

}
@media (max-width: 960px) {
  .sns-box {
    text-align: center;
    margin-left: -24px;
    .sns {
      margin: auto;
      margin-right: 24px;
    }
  }
}
</style>
