<template>
  <div class="q-pa-md q-gutter-sm">
    <div class="q-gutter-sm">
      <q-radio size="22px" color="positive" v-model="item" val="item1" label="item1" />
    </div>

    <div class="q-gutter-sm">
      <q-radio dense color="positive" v-model="items" val="item1" label="item1" />
      <q-radio dense color="positive" v-model="items" val="item2" label="item2" />
      <q-radio dense color="positive" v-model="items" val="item3" label="item3" />
      <q-radio dense color="positive" v-model="items" val="item4" label="item4" />
    </div>

    <div class="q-gutter-sm">
      <q-radio dense color="positive" v-model="items" val="item1" label="item1" /><br>
      <q-radio dense color="positive" v-model="items" val="item2" label="item2" /><br>
      <q-radio dense color="positive" v-model="items" val="item3" label="item3" /><br>
      <q-radio dense color="positive" v-model="items" val="item4" label="item4" /><br>
    </div>

    <div class="q-gutter-sm">
      <q-radio dense disable color="positive" v-model="item" val="item1" label="item1" />
      <q-radio dense disable color="positive" v-model="item" val="item2" label="item2" />
      <q-radio dense disable color="positive" v-model="item" val="item3" label="item3" />
      <q-radio dense disable color="positive" v-model="item" val="item4" label="item4" />
    </div>

    <!-- <div class="q-px-sm q-pt-sm">
      Your choice: <strong>{{ items }}</strong>
    </div> -->
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      item: ref('item1'),
      items: ref('item1')
    }
  }
}
</script>
