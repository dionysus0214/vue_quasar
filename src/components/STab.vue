<template>
  <q-tab :name="name" :label="label" :ripple="false" class="s-tab" />
  <div class="s-tab-space"></div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.s-tab {
  padding: 12px 32px;
  border-radius: 8px 8px 0 0;
  border: 1px solid $grey-8;
  border-bottom: 1px solid $positive;
  background: $grey-11;
  color: $grey-6;
  .q-tab__content {
    padding: 0;
    height: 22px;
    .q-tab__label {
      height: 22px;
      font-weight: 400;
    }
  }
}
.s-tab.q-tab--active {
  border: 1px solid $positive;
  background: white;
  .q-tab__content {
    .q-tab__label {
      font-weight: 700;
    }
  }
}
.s-tab-space {
  width: 4px;
  min-width: 4px;
  height: 100%;
  border-bottom: 1px solid $positive;
  &:last-of-type {
    width: 100%;
  }
}
</style>
