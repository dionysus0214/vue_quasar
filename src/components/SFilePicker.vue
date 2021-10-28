<template>
  <q-file
    outlined
    dense
    use-chips
    v-model="file"
    class="s-file"
    label="Click to upload"
    label-color="grey-8"
  >
    <template v-slot:prepend>
      <q-img src="~assets/icon_attach_file.svg" width="24px" height="24px" />
    </template>
  </q-file>
</template>

<script>
import { ref } from 'vue';

export default ({
  setup() {
    return {
      file: ref(null),
    };
  },
});
</script>

<style lang="sass">
@import '../css/variable.sass'

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
      width: 24px
      height: 100%
      padding: 0
      margin: 0 10px 0 8px
    .q-field__control-container
      padding: 5px 12px 5px 0px
      .q-field__native
      .q-field__label
        top: 6px
.q-field--dense.q-field--float .q-field__label
  transform: translateY(-37%) scale(0.6)
  &:hover
    .q-field__control
      border: 1px solid $grey-2
      &::after, &::before
        box-shadow: none
        border: none
      .q-field__prepend
        .q-icon
          color: black
.q-chip
  border-radius: 4px
  background: none
  padding: 0
  margin: 0
  height: 22px
  width: 100%
  .q-chip__content
    span
      width: 98%
  .q-chip__icon
    margin: 0 !important
</style>
