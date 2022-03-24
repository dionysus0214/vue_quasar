<template>
  <q-input
    class="s-input"
    :type="inputType"
    outlined
    placeholder="Type Something"
    dense
  >
    <template v-if="label !== undefined && !insideLabel" v-slot:before>
      <div class="input-label">{{ label }}</div>
    </template>
    <template v-if="label !== undefined && insideLabel" v-slot:prepend>
      <div class="input-addon">{{ label }}</div>
    </template>
    <template v-if="password" v-slot:append>
      <q-icon
        size="16px"
        :name="isVisible ? 'visibility' : 'visibility_off'"
        @click="isVisible = !isVisible"
      />
    </template>
  </q-input>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {
    label: String,
    insideLabel: Boolean,
    password: Boolean,
    type: String,
  },
  setup(props) {
    const isVisible = ref(false);
    const inputType = computed(() => {
      if (props.password) {
        return isVisible.value ? "text" : "password";
      }
      return props.type;
    });

    return {
      isVisible,
      inputType,
    };
  },
};
</script>

<style lang="sass">
.s-input
  .q-field__inner
    .q-field__control
      padding: 0
      &:before
        border: 1px solid $grey-6
      &-container
        padding: 5px 12px
        height: auto
        .q-field__native
          font-size: 14px
          font-weight: 400
          color: $grey-2
        input::placeholder
          color: $grey-7
        textarea
          padding: 3px 0
      .q-field__append
        padding: 0
        padding-right: 12px
        .q-icon
          color: $grey-6
    .q-field__bottom
      padding: 0
      padding-top: 4px
      .q-field__counter
        padding: 0
        color: $grey-8
        font-size: 12px
  .q-field__before
    padding-right: 12px
    .input-label
      font-size: 14px
      font-weight: 400
      color: $grey-2
  .q-field__prepend
    background-color: $grey-11
    height: auto
    padding: 5px 12px
    border-right: 1px solid $grey-6
    .input-addon
      font-size: 14px
      font-weight: 400
      color: $grey-2

.q-field--focused.s-input
  .q-field__inner
    .q-field__control
      &-container
      .q-field__append
        .q-icon
          color: $positive

.s-input.q-field--disabled
  .q-field__inner
    .q-field__control
      &:before
        border: 1px solid $grey-8
      &-container
        opacity: 1 !important
        .q-field__native
          color: $grey-2
        input::placeholder
          color: $grey-6
</style>
