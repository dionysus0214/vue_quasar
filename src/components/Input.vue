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
  setup () {
    return {
      text: ref('')
    }
  }
}
</script>

<style>
/* .s-input input:focus {
  outline: none !important;
} */
</style>
