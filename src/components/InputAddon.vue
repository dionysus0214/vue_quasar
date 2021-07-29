<template>
  <q-input
    outlined
    v-model="text"
    placeholder="Type Something"
    dense
    class="s-input-addon"
  >
    <template v-slot:prepend>
      <div class="input-addon">{{title}}</div>
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
  },
  props: {
    title: {
      default: ''
    }
  }
}
</script>

<style lang="scss">
.s-input-addon {
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
