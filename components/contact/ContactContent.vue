<template>
    <div>
      <contact-description></contact-description>
      <contact-toolicon></contact-toolicon>
    </div>
</template>

<script>
import ContactDescription from './ContactDescription.vue'
import ContactToolicon from './ContactToolicon.vue'
export default {
  name: 'ContactContent',
  components: {
    ContactDescription,
    ContactToolicon
  }
}
</script>
