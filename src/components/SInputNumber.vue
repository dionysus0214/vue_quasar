<template>
  <q-input
    class="s-input-number"
    type="number"
    outlined
    dense
    placeholder="0"
  >
    <template v-slot:append>
      <q-btn size="sm" dense unelevated :ripple="false" class="s-input-number-icon-up" icon="expand_less" @click="plusNumber" />
      <q-btn size="sm" dense unelevated :ripple="false" class="s-input-number-icon-down" icon="expand_more" @click="minusNumber" />
    </template>
  </q-input>
</template>

<script>
export default {
  methods: {
    plusNumber() {
      this.$emit('update:modelValue', this.$attrs.modelValue + 1);
    },
    minusNumber() {
      this.$emit('update:modelValue', this.$attrs.modelValue - 1);
    },
  },
};
</script>

<style lang="scss">
.q-btn {
  height: 5px;
  border-radius: 0px;
}

.s-input-number-icon-up {
  border-left: 1px solid $grey-3;
  border-radius: 0px !important;
  position: absolute;
  margin: auto;
  padding-left: 2px;
  top: 0px;
  right: 2px;
}

.s-input-number-icon-down {
  border-left: 1px solid $grey-3;
  border-radius: 0px !important;
  margin: auto;
  padding-left: 2px;
  bottom: -5px;
  right: -2px;
}

.s-input-number {
  .q-focusable:focus .q-focus-helper,
  .q-hoverable:hover .q-focus-helper {
    background: inherit !important;
    opacity: 0;
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
