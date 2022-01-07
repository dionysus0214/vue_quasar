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
import { QInput, QBtn } from "quasar";

export default ({
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
.s-input-number
  .q-field__inner
    .q-field__control
      padding: 0
      &-container
        padding: 0 12px
        .q-field__native
          color: $grey-2
        input::placeholder
          color: $grey-8
      &:before
        border: 1px solid $grey-6
      .q-field__append
        display: none

.q-field--focused.s-input-number
  .q-field__inner
    .q-field__control
      .q-field__append
        display: block
        width: 26px
        border-left: 1px solid $grey-8
        padding: 0
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        .q-btn
          padding: 0
          margin: 0
          width: 15px
          min-height: 15px
          line-height: 15px
          .q-focus-helper
            background: none
          &__content
            .q-icon
              height: auto
              padding: 2.7px

.q-field--disabled.s-input-number
  .q-field__inner
    .q-field__control
      &:before
        border: 1px solid $grey-8
      &-container
        opacity: 1 !important
        .q-field__native
          color: $grey-6
        input::placeholder
          color: $grey-6

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button
  -webkit-appearance: none
  margin: 0

/* Firefox */
input[type=number]
  -moz-appearance: textfield
</style>
