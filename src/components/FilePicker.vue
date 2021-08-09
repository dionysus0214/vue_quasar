<template>
  <q-file
    outlined
    dense
    use-chips
    bottom-slots
  >
    <template v-slot:prepend>
      <q-img src="~assets/icon_attach_file.svg" width="28px" height="28px" />
    </template>
  </q-file>
</template>

<style>
.items-center, .flex-center {
  top: -4px;
  left: -4px;
}

.q-field--outlined .q-field__control {
  padding: 0 8px;
}
</style>
