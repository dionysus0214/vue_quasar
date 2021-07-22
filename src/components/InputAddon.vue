<template>
  <q-input
    outlined
    v-model="text"
    placeholder="Type Something"
    dense
  >
    <template v-slot:prepend>
      <div class="input-addon">Label</div>
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

<style scoped>
.input-addon {
  font-size: 14px;
  padding-right: 10px;
  border-right: 1px solid #cccccc;
}
</style>
