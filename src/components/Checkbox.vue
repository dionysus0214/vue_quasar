<template>
  <div class="q-pa-md q-gutter-sm">
    <div class="q-gutter-sm">
      <q-checkbox size="22px" color="positive" v-model="item" label="item1" />
    </div>

    <div class="q-gutter-sm">
      <q-checkbox dense color="positive" v-model="item1" label="item1" />
      <q-checkbox dense color="positive" v-model="item2" label="item2" />
      <q-checkbox dense color="positive" v-model="item3" label="item3" />
      <q-checkbox dense color="positive" v-model="item4" label="item4" />
    </div>

    <div class="q-gutter-sm">
      <q-checkbox dense color="positive" v-model="item1" label="item1" /><br>
      <q-checkbox dense color="positive" v-model="item2" label="item2" /><br>
      <q-checkbox dense color="positive" v-model="item3" label="item3" /><br>
      <q-checkbox dense color="positive" v-model="item4" label="item4" /><br>
    </div>

    <div class="q-gutter-sm">
      <q-checkbox dense disable color="positive" v-model="item1" label="item1" />
      <q-checkbox dense disable color="positive" v-model="item" label="item2" />
      <q-checkbox dense disable color="positive" v-model="item3" label="item3" />
      <q-checkbox dense disable color="positive" v-model="items" label="item4" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      item: ref(true),
      item1: ref(false),
      item2: ref(false),
      item3: ref(false),
      item4: ref(false),
      items: ref(null)
    }
  }
}
</script>
