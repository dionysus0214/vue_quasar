<template>
  <q-input
    class="positive"
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
.positive {
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  border-color: #00973C;
}
</style>
