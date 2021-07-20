<template>
  <q-radio dense color="positive" v-model="items" val="item1" label="item1" />
  <q-radio dense color="positive" v-model="items" val="item2" label="item2" />
  <q-radio dense color="positive" v-model="items" val="item3" label="item3" />
  <q-radio dense color="positive" v-model="items" val="item4" label="item4" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      items: ref('item1')
    }
  }
}
</script>
