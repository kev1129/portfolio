<template>
  <div>
    <base-description
      v-bind:gettingDescription="description"
    >
    </base-description>
  </div>
</template>
<script>
import BaseDescription from '~/components/BaseDescription.vue'
export default {
  name: 'AboutTitle',
  components: {
    BaseDescription
  },
  data () {
    return {
      description: '東京在住、1998年生まれ、20歳。\n大学では醸造科学を専攻し、微生物・生命科学を中心に学習しています。\n2018年10月からweb系のプログラミング言語の学習を始め、知り合いづてや、クラウドソーシングからWebサイト制作しています。\n感覚的に閲覧できるサイトを目指しています。\n最近は、バイオインフォマティクス・機械学習を学習しています。'
    }
  }
}
</script>
