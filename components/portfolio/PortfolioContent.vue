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
          description: 'Web制作に関わるポートフォリオサイトです。\nNuxt.jsで作られています。',
          link: '',
          // linkGit: 'https://github.com/kev1129/portfolio'
        },
        { title: 'パン工房 プクムク',
          imageurl: 'images/pukumuku.jpg',
          description: 'アルバイト先のパン屋さんのホームページです。\nNuxt.jsで作られています。',
          link: 'https://pankouboupukumuku.netlify.com/',
          // linkGit: 'https://github.com/kev1129/pukumuku'
        },
        { title: '台湾料理のレシピ研究ブログ',
          imageurl: 'images/taiwan.jpg',
          description: '台湾料理のレシピを模索するブログです。\nWordPressで作られています',
          link: 'https://shinadokebukawa.com/taiwan/',
          // linkGit: 'https://github.com/kev1129/pukumuku'
        }
      ]
    }
  }
}
</script>
