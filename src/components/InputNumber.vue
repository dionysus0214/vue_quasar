<template>
  <q-input
    outlined
    v-model.number="number"
    type="number"
    placeholder="Type Number"
    dense/>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      number: ref()
    }
  }
}
</script>
