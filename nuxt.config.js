import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Kebukawa Shinado Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Kebukawa Shinado Portfolio' },
      { name: 'description', content: '毛部川 風のWebエンジニアとしてのポートフォリオサイトです。' },
      { name: 'og:url', content: 'https://shinadokebukawa.com/portfolio/' },
      { name: 'og:title', content: 'Kebukawa Shinado Portfolio' },
      { name: 'og:description', content: '毛部川 風のWebエンジニアとしてのポートフォリオサイトです。' },
      { name: 'og:image', content: 'img/icon.jpg' },
      { name: 'og:site_name', content: 'Kebukawa Shinado Portfolio' },
      { name: 'twitter:site', content: 'Kebukawa Shinado Portfolio' },
      { name: 'og:locale', content: 'ja_JP' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/vue-parallax-js.js'
  ],

  router: {
    base: '/portfolio/'
  },
  
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    'vue-scrollto/nuxt'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
      
    // },

  }
}
