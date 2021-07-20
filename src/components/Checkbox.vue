<template>
  <q-checkbox dense color="positive" v-model="item1" label="item1" />
  <q-checkbox dense color="positive" v-model="item2" label="item2" />
  <q-checkbox dense color="positive" v-model="item3" label="item3" />
  <q-checkbox dense color="positive" v-model="item4" label="item4" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      item1: ref(false),
      item2: ref(false),
      item3: ref(false),
      item4: ref(false)
    }
  }
}
</script>
