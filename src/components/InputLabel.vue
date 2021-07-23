<template>
  <q-input
    outlined
    v-model="text"
    placeholder="Type Something"
    dense
  >
    <template v-slot:before>
      <div class="input-label">Label</div>
    </template>
  </q-input>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref('')
    }
  }
}
</script>

<style>
.input-label {
  font-size: 14px;
  padding-right: 4px;
}
</style>
