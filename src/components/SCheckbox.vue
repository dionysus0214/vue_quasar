<template>
  <q-checkbox
    dense
    color="positive"
    class="s-checkbox"
  />
</template>

<style lang="scss">
.s-checkbox {
  justify-content: center;
  align-items: center;
  &:hover {
    .q-checkbox__inner {
      .q-checkbox__bg {
        border: 1px solid $positive;
      }
    }
  }
  & > .q-checkbox__inner {
    min-width: 0;
    width: 16px;
    height: 16px;
    &:before {
      background: none !important;
    }
    .q-checkbox__bg {
      border: 1px solid $grey-6;
      width: 16px;
      height: 16px;
      padding: 0 2.5px;
      background: white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .q-checkbox__svg {
        width: 11.43px !important;
        margin: auto;
      }
    }
    &--indet,
    &--truthy {
      color: $positive !important;
      .q-checkbox__bg {
        border: none;
        background: $positive;
      }
    }
  }
  & > .q-checkbox__label {
    padding-left: 8px;
    color: $grey-2;
  }
}
.disabled.s-checkbox {
  border: none !important;
  background: none !important;
  & > .q-checkbox__inner {
    .q-checkbox__bg {
      border: 1px solid $grey-8;
      background: $grey-10;
      .q-checkbox__svg {
        color: $grey-6;
      }
    }
  }
}
</style>
