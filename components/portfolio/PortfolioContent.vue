<template>
  <v-container
    grid-list-xl
  >
    <v-layout
      row
      wrap
      align-center
      justify-center
    >
      <v-flex
        v-for="(card, index) in cards"
        v-bind:key="index"
        xs10
        sm5
        md4
      >
        <portfolio-card
          v-bind:title="card.title"
          v-bind:description="card.description"
          v-bind:imageurl="card.imageurl"
          v-bind:link="card.link"
          v-bind:linkGit="card.linkGit"
        >
        </portfolio-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PortfolioCard from './PortfolioCard.vue'

export default {
  name: 'PortfolioContent',
  components: {
    PortfolioCard
  },
  data () {
    return {
      cards: [
        { title: 'Portfolio site',
          imageurl: 'images/portfolio.jpg',
          description: 'Webエンジニアとしての、ポートフォリオサイトを作りました。(このサイトです)\nVue.jsを使って作りました。',
          link: '',
          linkGit: 'https://github.com/kev1129/portfolio'
        },
        { title: '「パン工房 プクムク」のHP',
          imageurl: 'images/pukumuku.jpg',
          description: '地元のアルバイト先のパン屋さんのホームページを作成させていただいています。\n現在作成中...',
          link: '',
          linkGit: 'https://github.com/kev1129/pukumuku'
        }
      ]
    }
  }
}
</script>
