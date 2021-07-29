<template>
  <q-input
    outlined
    v-model="text"
    placeholder="Type Something"
    type="textarea"
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
