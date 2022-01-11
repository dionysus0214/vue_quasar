<template>
  <q-banner dense rounded class="text-black col s-caution">
    <div class="s-caution-title">{{ title }}</div>
    <slot />
    <q-icon class="s-caution-icon" :name="cautionOutlineIcon" />
  </q-banner>
</template>

<script>
import { cautionOutlineIcon } from '../assets/icons.js';

export default {
  props: {
    title: String,
  },
  setup() {
    return {
      cautionOutlineIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.s-caution {
  padding: 20px 0;
  background-color: #FEF1F1;
  border-radius: 4px;
  border: 1px solid $red-9;
  position: relative;
  overflow: hidden;
  max: {
    height: 100%;
    width: 100%;
  };
  &:before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 8px;
    height: 100%;
    background: $red-7;
  }
  .s-caution-title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font: {
      size: 20px;
      weight: 700;
    }
    color: $red-6;
    margin: {
      left: 54px;
      bottom: 16px;
    };
  }
  ul {
    list-style: "-";
    text-indent: 12px;
    margin: 0;
    li {
      line-height: 25px;
    }
  }
  .s-caution-icon {
    color: rgba(253, 149, 149, 0.24);
    min-width: 200px;
    min-height: 200px;
    position: absolute;
    right: -40px;
    bottom: -15px;
  }
}
</style>
