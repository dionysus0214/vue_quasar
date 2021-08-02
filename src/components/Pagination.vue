<template>
  <q-pagination
    v-model="current"
    unelevated
    direction-links
    round
    color="black"
    active-color="blue-9"
    active-text-color="white"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      current: ref(3)
    }
  }
}
</script>
