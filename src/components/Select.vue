<template>
  <q-select
    v-model="model"
    outlined
    dense
    options-dense
    dropdown-icon="expand_more"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null)
    }
  }
}
</script>

<style lang="scss">
.q-focusable:focus, .q-manual-focusable--focused, .q-hoverable:hover {
  > .q-focus-helper {
    background: #0075FF;
    opacity: .5
  }
}
.q-field--dense .q-field__label {
  top: 5px;
}
</style>
