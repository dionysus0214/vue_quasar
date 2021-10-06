<template>
  <q-input class="s-input-number" type="number" outlined dense placeholder="0">
    <template v-slot:append>
      <q-btn
        class="s-input-number-icon-up"
        size="sm"
        dense
        unelevated
        :ripple="false"
        icon="expand_less"
        @click="plusNumber"
      />
      <q-btn
        class="s-input-number-icon-down"
        size="sm"
        dense
        unelevated
        :ripple="false"
        icon="expand_more"
        @click="minusNumber"
      />
    </template>
  </q-input>
</template>

<script>
import { defineComponent } from "vue";
import { QInput, QBtn } from "quasar";

export default defineComponent({
  name: "SInputNumber",
  components: {
    QInput,
    QBtn,
  },
  methods: {
    plusNumber() {
      this.$emit("update:modelValue", this.$attrs.modelValue + 1);
    },
    minusNumber() {
      this.$emit("update:modelValue", this.$attrs.modelValue - 1);
    },
  },
});
</script>

<style lang="sass">
@import '../css/quasar.variables.scss'

.s-input-number-icon-up
  border-left: 1px solid $grey-8
  border-radius: 0px !important
  position: absolute
  margin: auto
  padding-left: 2px
  top: 0px
  right: 2px

.s-input-number-icon-down
  border-left: 1px solid $grey-8
  border-radius: 0px !important
  margin: auto
  padding-left: 2px
  bottom: -6px
  right: -6px

.s-input-number
  .q-btn
    height: 5px
  .q-focusable:focus .q-focus-helper,
  .q-hoverable:hover .q-focus-helper
    background: inherit !important
    opacity: 0

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button
  -webkit-appearance: none
  margin: 0

/* Firefox */
input[type=number]
  -moz-appearance: textfield
</style>
