<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 297px">
      <s-input
        hint="Default"
      />
      <s-input-label
        hint="Label"
      />
      <s-input-password
        hint="Password"
      />
      <s-input-number
        hint="Number"
        v-model="number"
      />
      <s-input
        type="textarea"
        hint="Textarea"
        counter maxlength="100"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SInput from '../components/Input.vue'
import SInputLabel from '../components/InputLabel.vue'
import SInputNumber from '../components/InputNumber.vue'
import SInputPassword from '../components/InputPassword.vue'

export default {
  components: { SInput, SInputLabel, SInputNumber, SInputPassword },
  setup () {
    return {
      text: ref(''),
      password: ref(''),
      isPwd: ref(true),
      number: ref(1)
    }
  }
}
</script>
