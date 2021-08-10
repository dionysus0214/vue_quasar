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
        insideLabel
        v-model="text"
      />
      <s-input
        password
        v-model="text"
      />
      <s-input
        label="비밀번호"
        insideLabel
        password
        v-model="text"
      />
      <s-input
        class="disable"
        disable
      />
      <s-input-number
        v-model.number="number"
      />
      <s-input
        type="textarea"
        counter maxlength="100"
        v-model="text"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SInput from '../components/Input.vue'
import SInputNumber from '../components/InputNumber.vue'

export default {
  components: {
    SInput,
    SInputNumber
  },
  setup () {
    return {
      text: ref(null),
      number: ref(100)
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
