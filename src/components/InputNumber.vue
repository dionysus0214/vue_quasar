<template>
  <q-input
    outlined
    dense
    class="s-input-number"
  >
    <template v-slot:append>
      <q-icon class="s-input-number-icon-up" name="expand_less" @click="plusNumber" />
      <q-icon class="s-input-number-icon-down" name="expand_more" @click="minusNumber" />
    </template>
  </q-input>
</template>

<script>
export default {
  methods: {
    plusNumber () {
      this.$emit('update:modelValue', this.$attrs.modelValue + 1)
    },
    minusNumber () {
      this.$emit('update:modelValue', this.$attrs.modelValue - 1)
    }
  }
}
</script>

<style>
.q-icon {
  height: 0.7em;
}

.s-input-number-icon-up {
  border-left: 1px solid #CCCCCC;
  position: absolute;
  margin: auto;
  top: 1px;
  right: 5px;
}

.s-input-number-icon-down {
  border-left: 1px solid #CCCCCC;
  margin: auto;
  bottom: -8px;
  right: -7px;
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
