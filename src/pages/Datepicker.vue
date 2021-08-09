<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <s-datepicker
        style="width: 146px"
      />
      <s-datepicker
        style="width: 200px"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SDatepicker from '../components/Datepicker.vue'

export default {
  components: {
    SDatepicker
  },
  setup () {
    return {
      date: ref('')
    }
  }
}
</script>
