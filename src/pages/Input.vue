<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 297px">
      <s-input
        v-model="text"
      />
      <s-input
        label="이름1"
        v-model="text"
      />
      <s-input
        label="이름2"
        v-model="text"
      />
      <s-input-label
        title="이름"
        v-model="name"
      />
      <s-input-label
        title="전화번호"
        v-model="phoneNumber"
      />
      <s-input-addon
        title="주소"
        v-model="address"
      />
      <s-input
        class="disable"
        disable
      />
      <s-input-password
        v-model="password"
      />
      <s-input-number
        v-model.number="model"
      />
      <s-textarea
        counter maxlength="100"
        v-model="text"
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
  components: {
    SInput,
    SInputLabel,
    SInputAddon,
    SInputNumber,
    SInputPassword,
    STextarea
  },
  setup () {
    return {
      text: ref(null),
      name: ref(null),
      phoneNumber: ref(null),
      address: ref(null),
      password: ref(null),
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
