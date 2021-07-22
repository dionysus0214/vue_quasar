<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 297px">
      <s-input />
      <s-input-label />
      <s-input-addon />
      <s-input
        class="disable"
        disable
      />
      <s-input-password />
      <s-input-number
        v-model="number"
      />
      <s-input
        type="textarea"
        counter maxlength="100"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SInput from '../components/Input.vue'
import SInputLabel from '../components/InputLabel.vue'
import SInputAddon from '../components/InputAddon.vue'
import SInputNumber from '../components/InputNumber.vue'
import SInputPassword from '../components/InputPassword.vue'

export default {
  components: { SInput, SInputLabel, SInputAddon, SInputNumber, SInputPassword },
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

<style>
.disable {
  background-color: #F6F6F6;
}
</style>
