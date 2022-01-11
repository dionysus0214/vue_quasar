<template>
  <q-toggle
    color="positive"
    dense
    class="s-toggle"
  />
</template>

<style lang="scss">
@import '../css/quasar.variables.scss';

.s-toggle {
  height: 24px;
  .q-toggle__inner {
    padding: 0;
    width: 42px;
    height: 24px;
    .q-toggle__track {
      width: 42px;
      height: 24px;
      background: $grey-8;
      border-radius: 12px;
      margin-right: 0;
      opacity: 1;
    }
    .q-toggle__thumb {
      width: 20px;
      height: 20px;
      top: 2px;
      left: 2px;
      &:before {
        background: none;
      }
    }
    &--truthy {
      .q-toggle__track {
        background: $positive;
      }
      .q-toggle__thumb {
        left: 0.5em;
        color: #fff;
      }
    }
  }
}
.disabled.s-toggle {
  border: none;
  background: none !important;
  opacity: 1 !important;
  .q-toggle__inner {
    .q-toggle__track {
      background: $grey-10;
    }
  }
  &--truthy {
    .q-toggle__track {
      background: $blue-10;
    }
  }
}
</style>
