<template>
  <q-file
    outlined
    dense
    clearable
    v-model="file"
    @update:modelValue="$emit('update:modelValue', file)"
    class="s-file"
  >
    <template v-slot:prepend>
      <q-icon :name="attachFileIcon" size="24px" color="grey-2" @click.stop />
      <div :class="!file ? 's-file-placeholder' : 's-file-no-placeholder'" @click.stop>{{ placeholder }}</div>
    </template>
  </q-file>
</template>

<script>
import { ref, watch } from 'vue';
import { attachFileIcon } from '../assets/icons.js';

export default ({
  props: {
    placeholder: String,
  },
  setup(props) {
    const file = ref(props.modelValue);

    watch(() => props.modelValue,
      (newVal) => {
        file.value = newVal;
      });

    return {
      attachFileIcon,
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
  .q-field__inner
    .q-field__control
      align-items: center
      padding: 0 12px 0 8px
      border: 1px solid $grey-6
      &::after, &::before
        box-shadow: none
        border: none
      .q-field__prepend
        width: fit-content
        height: 100%
        padding: 0
        cursor: pointer
        .s-file-placeholder
          height: 100%
          width: fit-content
          line-height: 30px
          font-size: 14px
          font-weight: 400
          color: $grey-8
          display: block
          margin-left: 10px
        .s-file-no-placeholder
          display: none
      .q-field__control-container
        width: 100%
        .q-field__native
          width: 100%
          padding: 0
          padding-left: 10px
          min-height: 100%
          >div
            width: 100%
            overflow: hidden
            color: $grey-2
            word-break: keep-all
            white-space: nowrap
            text-overflow: ellipsis
  &:hover
    .q-field__control
      border: 1px solid $grey-2
      &::after, &::before
        box-shadow: none
        border: none

.s-file.q-field--disabled
  .q-field__inner
    .q-field__control
      border: 1px solid $grey-8
      .q-field__prepend
        opacity: 1 !important
        .s-file-placeholder
          color: $grey-6
      &-container
        opacity: 1 !important
</style>
