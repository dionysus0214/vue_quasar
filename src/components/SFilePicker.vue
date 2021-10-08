<template>
  <q-file outlined dense use-chips bottom-slots>
    <template v-slot:prepend>
      <q-img src="~assets/icon_attach_file.svg" width="28px" height="28px" />
    </template>
  </q-file>
</template>

<style lang="scss">
@import "../css/quasar.variables.scss";

.items-center,
.flex-center {
  top: -4px;
  left: -4px;
}

.q-field--outlined .q-field__control {
  padding: 0 8px;
}

.q-chip--dense {
  border-radius: 4px;
  background-color: $grey-10;
  padding: 0 0.4em;
  height: 1.5em;
}
</style>
