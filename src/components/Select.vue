<template>
  <q-select
    outlined
    v-model="model"
    dense
    options-dense
    dropdown-icon="expand_more"
  />
  <!-- <q-select
    outlined
    v-model="model"
    label="Select"
    hint="Default"
    dense
    hide-dropdown-icon
    @popup-show="open=true"
    @popup-hide="open=false"
  >
    <template v-slot:append>
      <q-icon :name="open ? 'expand_less' : 'expand_more'"></q-icon>
    </template>
  </q-select> -->
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Select',
  setup () {
    return {
      model: ref(null),
      dense: ref(true)
      // open: ref(false)
    }
  }
}
</script>

<style>
.q-field--dense .q-field__label {
  top: 5px;
}
</style>
