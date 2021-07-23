<template>
  <q-input
    outlined
    v-model="text"
    placeholder="Type Something"
    dense
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref('')
    }
  }
}
</script>
