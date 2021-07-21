<template>
  <q-checkbox dense color="positive" v-model="item1" label="item1" />
  <q-checkbox dense color="positive" v-model="item2" label="item2" />
  <q-checkbox dense color="positive" v-model="item3" label="item3" />
  <q-checkbox dense color="positive" v-model="item4" label="item4" />
  <br>
  <q-checkbox disable dense color="positive" v-model="item" label="item1" val="item1" />
  <q-checkbox disable dense color="positive" v-model="item" label="item2" val="item2"/>
  <q-checkbox disable dense color="positive" v-model="item" label="item3" val="item3"/>
  <q-checkbox disable dense color="positive" v-model="item" label="item4" val="item4"/>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      item: ref(['item2', 'item4']),
      item1: ref(false),
      item2: ref(false),
      item3: ref(false),
      item4: ref(false)
    }
  }
}
</script>
