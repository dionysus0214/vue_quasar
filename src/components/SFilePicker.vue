<template>
  <q-file
    outlined
    dense
    clearable
    v-model="file"
    @update:modelValue="$emit('update:modelValue')"
    class="s-file"
  >
    <template v-slot:prepend>
      <q-img src="~assets/icon_attach_file.svg" width="24px" height="24px" />
      <div :class="!file ? 's-file-placeholder' : 'no-placeholder'">{{ placeholder }}</div>
    </template>
  </q-file>
</template>

<script>
import { ref } from 'vue';

export default ({
  props: {
    modelValue: File,
    placeholder: String,
  },
  setup(props) {
    const file = ref(props.singleFile);

    return {
      file,
    };
  },
});
</script>

<style lang="sass">
@import '../css/quasar.variables.scss'

.s-file.q-file
  width: 294px
  border-radius: 2px
  .q-field__control
    align-items: center
    padding: 0
    border: 1px solid $grey-6
    &::after, &::before
      box-shadow: none
      border: none
    .q-field__prepend
      width: fit-content
      height: 100%
      padding: 0
      margin-left: 8px
      cursor: pointer
    .q-field__control-container
      padding: 5px 0
      .q-field__native
        padding: 0
        min-height: 100%
        width: 97% !important
    .q-field__append
      padding: 0 8px 0 0
  &:hover
    .q-field__control
      border: 1px solid $grey-2
      &::after, &::before
        box-shadow: none
        border: none
  .q-chip
    border-radius: 4px
    background: none
    padding: 0
    margin: 0
    height: 22px
    .q-chip__content
      span
        width: 98%
    .q-chip__icon
      margin: 0 !important

.s-file-placeholder
  height: 100%
  width: fit-content
  line-height: 30px
  font-size: 14px
  position: absolute
  left: 32px
  display: block
.no-placeholder
  display: none
</style>
