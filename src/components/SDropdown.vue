<template>
  <q-btn
    outline
    split
    color="grey-6"
    no-caps
    no-wrap
    unelevated
    :ripple="false"
    :icon-right="arrowDownIcon"
    menu-anchor="bottom start"
    menu-self="top start"
    class="s-dropdown"
  >
    <q-menu class="s-dropdown-menu">
      <q-item
        v-for="(opt, i) in options"
        :key="i"
        clickable
        v-close-popup
        @click="$emit('hendleClickOption', opt.value)"
      >
        <q-item-section>
          <q-item-label>{{ opt.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-menu>
  </q-btn>
</template>

<script>
import { ref } from 'vue';
import { arrowDownIcon } from '../assets/icons.js';

export default ({
  name: 'SDropdown',
  props: {
    options: Array,
  },
  setup() {
    return {
      arrowDownIcon,
      showMenu: ref(false),
    };
  },
});
</script>

<style lang="scss">
.s-dropdown {
  height: 32px;
  min-height: 0;
  padding: 0 !important;
  border: 1px solid $grey-6;
  &:before {
    border: none;
  }
  .q-btn__content {
    min-height: 0;
    span {
      height: 100%;
      padding: 5px 10px 5px 12px;
      border-right: 1px solid #cccccc;
      font-size: 14px;
      font-weight: 400;
      color: $grey-2;
      line-height: 20px !important;
    }
    .q-icon {
      margin: 8px;
      width: 16px;
      height: 16px;
    }
  }
}
.s-dropdown.disabled {
  opacity: 1 !important;
  border: none;
  padding: 0;
  &:before {
    border: 1px solid $grey-8;
    background: $grey-9 !important;
  }
  .q-btn__content {
    span {
      color: $grey-6;
      line-height: 22px !important;
    }
  }
}
.s-dropdown-menu {
  .q-item {
    padding: 6px 12px;
    min-height: 0;
    &__section {
      min-height: 0;
      height: 22px;
    }
  }
}
</style>
