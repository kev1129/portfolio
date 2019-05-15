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
      description: '東京在住、1998年生まれ、20歳。\n大学では醸造科学を専攻し、主に微生物や化学、生物を学んでいます。\n2018年10月からweb系のプログラミング言語を学習しています。\n感覚的に閲覧できるサイトを目指しています。\n(2019/03/14)'
    }
  }
}
</script>
