<template>
  <div class="q-pa-md" style="max-width: 297px">
    <div class="q-gutter-md">
      <s-select
        :options="options"
        label="Select"
      />

      <s-select
        disable
        label="Disable"
      />
    </div>
  </div>
</template>

<script>
import SSelect from '../components/Select.vue'

export default {
  components: { SSelect },
  setup () {
    return {
      options: [
        'item01', 'item02', 'item03', 'item04', 'item05'
      ]
    }
  }
}
</script>
