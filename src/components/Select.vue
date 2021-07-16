<template>
  <div class="q-pa-md" style="max-width: 297px">
    <div class="q-gutter-md">
      <q-select
        outlined
        v-model="model"
        :options="options"
        label="Select"
        hint="Default"
        :dense="dense"
      />
      <!-- <span>Selected: {{ model }}</span> -->
      <q-select
        disable
        filled
        v-model="single"
        :options="options"
        hint="Disable"
        :dense="dense"
      />

      <q-select
        readonly
        filled
        v-model="single"
        :options="options"
        hint="Readonly"
        :dense="dense"
      />

      <q-select
        filled
        v-model="multiple"
        multiple
        :options="options"
        label="Multiple"
        hint="Multiple"
        :dense="dense"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null),
      single: ref('item01'),
      multiple: ref(null),
      options: [
        'item01', 'item02', 'item03', 'item04', 'item05'
      ],
      dense: ref(true)
    }
  }
}
</script>
