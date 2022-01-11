<template>
  <q-radio
    dense
    color="positive"
    class="s-radio"
  />
</template>

<style lang="scss">
.s-radio {
  & > .q-radio__inner {
    min-width: 16px;
    width: 16px;
    height: 16px;
    color: $grey-6;
    &:before {
      opacity: 0 !important;
    }
    &:hover {
      color: $positive;
    }
  }
  .q-radio__label {
    padding-left: 6px;
    color: $grey-2;
    line-height: 22px;
  }
  &[aria-checked="true"] {
    .q-radio__inner {
      .q-radio__bg {
        .q-radio__check {
          transform: scale3d(1.2, 1.2, 1);
        }
      }
    }
  }
}
.disabled.s-radio {
  opacity: 1 !important;
  border: none;
  background: none !important;
  .q-radio__inner {
    color: $grey-8 !important;
    background: $grey-10;
  }
}
</style>
