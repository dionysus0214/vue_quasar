<template>
  <q-input
    outlined
    v-model="text"
    placeholder="Type Something"
    dense
    class="inner-label-input"
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

<style lang="scss">
.inner-label-input {
  .q-field__prepend {
    border-right: 1px solid #cccccc;
    padding-right: 10px;
    margin-right: 10px;
  }
  .input-addon {
    font-size: 14px;
  }
}
</style>
