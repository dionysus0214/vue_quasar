<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <s-radio />
      <s-option-group />
      <s-radio
        disable
      />
    </div>
  </div>
</template>

<script>
import SRadio from '../components/Radio.vue'
import SOptionGroup from '../components/OptionGroup.vue'

export default {
  components: { SRadio, SOptionGroup }
}
</script>
<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <s-checkbox />
      <s-option-group />
      <s-checkbox
        disable
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
