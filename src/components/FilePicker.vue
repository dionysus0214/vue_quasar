<template>
  <q-file
    outlined
    dense
    use-chips
    bottom-slots
    v-model="model"
  >
    <template v-slot:prepend>
      <q-img src="~assets/icon_attach_file.svg" width="28px" height="28px" />
    </template>
  </q-file>
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

<style>
.items-center, .flex-center {
  top: -4px;
  left: -4px;
}

.q-field--outlined .q-field__control {
  padding: 0 8px;
}
</style>
