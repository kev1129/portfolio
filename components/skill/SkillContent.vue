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
        xs12
        sm6
        md4
      >
        <skill-card
          v-bind:skill-title="card.title"
          v-bind:skill-icons="card.skillIcons"
          v-bind:skill-description="card.description"
          v-bind:skill-infomation="card.skillInfomation"
        >
        </skill-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SkillCard from './SkillCard.vue'
export default {
  name: 'SkillContent',
  components: {
    SkillCard
  },
  data () {
    return {
      cards: [
        { title: 'コーディング',
          skillIcons: [
            {name: 'HTML5', class: 'fa-html5'},
            {name: 'CSS3', class: 'fa-css3'}
          ],
          description: 'レスポンシブ化対応もします。',
          skillInfomation: [
            {name: 'HTML5', year: '5 months'},
            {name: 'CSS3', year: '5 months'},
            {name: '', year: ''}
          ]
        },
        { title: 'フロントエンド',
          skillIcons: [
            {name: 'JavaScript', class: 'fa-js'},
            {name: 'Vue.js', class: 'fa-vuejs'}
          ],
          description: 'このページはVue.jsで作りました。',
          skillInfomation: [
            {name: 'JavaScript', year: '3 months'},
            {name: 'jQuery', year: '2 months'},
            {name: 'Vue.js', year: '1 months'}
          ]
        },
        { title: 'バックエンド',
          skillIcons: [
            {name: 'PHP', class: 'fa-php'},
            {name: 'Laravel', class: 'fa-laravel'}
          ],
          description: 'レシピ、Todoアプリを作りました。',
          skillInfomation: [
            {name: 'PHP', year: '3 months'},
            {name: 'Laravel', year: '2 months'},
            {name: 'MySQL', year: '2 months'}
          ]
        }
      ]
    }
  }
}
</script>
