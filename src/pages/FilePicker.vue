<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 297px">
      <s-file-picker
        v-model="model"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SFilePicker from '../components/FilePicker.vue'

export default {
  components: {
    SFilePicker
  },
  setup () {
    return {
      model: ref(null)
    }
  }
}
</script>
