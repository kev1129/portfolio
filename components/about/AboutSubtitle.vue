<template>
  <div>
    <base-subtitle
      v-bind:gettingSubtitle="subtitle"
    >
    </base-subtitle>
  </div>
</template>
<script>
import BaseSubtitle from '~/components/BaseSubtitle.vue'
export default {
  name: 'AboutSubtitle',
  components: {
    BaseSubtitle
  },
  data () {
    return {
      subtitle: '毛部川 風  Kebukawa Shinado'
    }
  }
}
</script>
