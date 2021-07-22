<template>
  <q-input
    class="negative"
    borderless
    v-model="text"
    placeholder="  Type Something"
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

<style scoped>
.negative {
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  border-color: #E30000;
}
</style>
