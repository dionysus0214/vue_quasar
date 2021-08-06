<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 297px">
      <s-input />
      <s-input-label
        title="이름"
        v-model="name"
      />
      <s-input-label
        title="전화번호"
      />
      <s-input-addon
        title="주소"
      />
      <s-input
        class="disable"
        disable
      />
      <s-input-password />
      <s-input-number
        v-model="number"
      />
      <s-textarea
        counter maxlength="100"
      />
      <q-input
        v-model.number="model"
        type="number"
        filled
        style="max-width: 200px"
      />
      <q-file
      v-model="files"
      outlined
      use-chips
      multiple
      style="max-width: 300px"
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
import STextarea from '../components/Textarea.vue'

export default {
  components: { SInput, SInputLabel, SInputAddon, SInputNumber, SInputPassword, STextarea },
  setup () {
    return {
      email: ref(''),
      // password: ref(''),
      isPwd: ref(true),
      files: ref(null)
    }
  },
  data () {
    return {
      name: null,
      password: null,
      number: ref(1),
      model: ref(100)
    }
  }
}
</script>

<style>
.disable {
  background-color: #F6F6F6;
}

.disable:hover {
  box-shadow: none;
}
</style>
