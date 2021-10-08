<template>
  <q-chip class="chip" square removable icon-remove="close">
    <slot></slot>
  </q-chip>
</template>

<style lang="scss">
@import "../css/quasar.variables.scss";

.chip {
  background-color: $grey-11;
  border: 1px solid $grey-8;
  border-radius: 4px;
  padding: 5px 12px;
}

.q-chip__icon--remove {
  margin-right: -4px;
  padding-left: 4px;
}
</style>
