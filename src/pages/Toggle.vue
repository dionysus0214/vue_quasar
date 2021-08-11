<template>
  <div class="q-pa-md">
    <s-toggle
      v-model="check"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import SToggle from '../components/Toggle.vue'

export default {
  components: {
    SToggle
  },
  setup () {
    return {
      check: ref(false)
    }
  }
}
</script>
