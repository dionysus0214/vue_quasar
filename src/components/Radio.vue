<template>
  <q-radio dense color="positive" v-model="items" val="item1" label="item1" />
  <q-radio dense color="positive" v-model="items" val="item2" label="item2" />
  <q-radio dense color="positive" v-model="items" val="item3" label="item3" />
  <q-radio dense color="positive" v-model="items" val="item4" label="item4" />
  <br>
  <q-radio disable dense color="positive" v-model="item" val="item1" label="item1" />
  <q-radio disable dense color="positive" v-model="item" val="item2" label="item2" />
  <q-radio disable dense color="positive" v-model="item" val="item3" label="item3" />
  <q-radio disable dense color="positive" v-model="item" val="item4" label="item4" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      item: ref('item3'),
      items: ref('item1')
    }
  }
}
</script>
