<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <s-checkbox />
      <s-option-group
        type="checkbox"
      />
    </div>
  </div>
</template>

<script>
import SCheckbox from '../components/Checkbox.vue'
import SOptionGroup from '../components/OptionGroup.vue'

export default {
  components: { SCheckbox, SOptionGroup }
}
</script>
