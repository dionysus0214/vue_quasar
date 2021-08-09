<template>
  <q-select
    outlined
    dense
    options-dense
    dropdown-icon="expand_more"
  />
</template>

<style lang="scss">
.q-focusable:focus, .q-manual-focusable--focused, .q-hoverable:hover {
  > .q-focus-helper {
    background: #0075FF;
    opacity: .5
  }
}
.q-field--dense .q-field__label {
  top: 5px;
}
</style>
