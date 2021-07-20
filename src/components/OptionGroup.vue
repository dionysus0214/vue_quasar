<template>
  <q-option-group
    color="positive"
    :options="options"
    type="radio"
    v-model="group"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      group: ref('stock1'),
      options: [
        { label: 'stock1', value: 'stock1' },
        { label: 'stock2', value: 'stock2' },
        { label: 'stock3', value: 'stock3' }
      ]
    }
  }
}
</script>
