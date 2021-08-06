<template>
  <q-input
    outlined
    v-model="text"
    placeholder="Type Something"
    dense
    class="s-input"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      text: ref('')
    }
  }
}
</script>
