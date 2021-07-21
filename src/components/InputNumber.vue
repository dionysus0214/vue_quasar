<template>
  <q-input
    outlined
    v-model="innerValue"
    type="number"
    placeholder="Type Number"
    dense
    @change="$emit('update:modelValue', innerValue)"
    class="s-input-number"
  >
    <template v-slot:append>
      <q-icon class="s-input-number-icon" name="expand_less" @click="plusNumber" />
      <q-icon class="s-input-number-icon" name="expand_more" @click="minusNumber" />
    </template>
  </q-input>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    modelValue: Number
  },
  data () {
    return {
      innerValue: ref(0)
    }
  },
  mounted () {
    this.innerValue = this.modelValue
  },
  methods: {
    plusNumber () {
      this.innerValue++
    },
    minusNumber () {
      this.innerValue--
    }
  }
}
</script>

<style>
.s-input-number-icon {
  width: 10px !important;
}

/* Chrome, Safari, Edge, Opera */
.s-input-number input::-webkit-outer-spin-button,
.s-input-number input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.s-input-number input[type=number] {
  -moz-appearance: textfield;
}
</style>
