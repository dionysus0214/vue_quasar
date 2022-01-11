<template>
  <q-btn
    :outline="!helpPopup"
    rounded
    unelevated
    :ripple="false"
    color="info"
    :icon="helpOutlineIcon"
    :label="label"
    no-wrap
    class="s-help-btn"
    :class="{ 's-help-popup-open': helpPopup, 'bg-white': !helpPopup }"
  >
    <q-popup-proxy v-model="helpPopup" class="bg-white s-help-menu">
      <q-btn
        flat
        dense
        :ripple="false"
        :icon="closeIcon"
        color="grey-1"
        @click="helpPopup = false"
        class="close-btn"
      />
      <div class="flex items-center">
        <q-icon :name="helpOutlineIcon" color="info" />
        <span>도움말</span>
      </div>
      <slot name="s-help-message">
        <ul>
          <li v-for="(m, i) in message" :key="i">
            {{ m }}
          </li>
        </ul>
      </slot>
    </q-popup-proxy>
  </q-btn>
</template>

<script>
import { ref } from 'vue';
import { helpOutlineIcon, closeIcon } from '../assets/icons.js';

export default {
  props: {
    title: String,
    label: String,
    message: Array,
  },
  setup() {
    return {
      helpOutlineIcon,
      closeIcon,
      helpPopup: ref(false),
    };
  },
};
</script>

<style lang="scss">
.s-help-btn {
  padding: 0 16px 0 12px;
  min-height: 32px;
  &:before {
    border-color: $grey-8;
  }
  .q-btn__content {
    .q-icon {
      margin-right: 6px;
    }
    & > span {
      color: $grey-2 !important;
      line-height: 22px;
      margin-bottom: 1px;
    }
  }
}
.s-help-popup-open {
  .q-btn__content {
    & > span {
      color: white !important;
    }
  }
}
.s-help-menu {
  width: 452px;
  margin-top: 8px !important;
  border-radius: 8px;
  padding: 20px 32px 28px;
  position: relative;
  .close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 0;
    min-height: 24px;
    height: 24px;
    width: 24px;
  }
  > div {
    margin-bottom: 18px;
    .q-icon {
      width: 32px;
      height: 32px;
      margin-right: 12px;
    }
    span {
      font-size: 20px;
      font-weight: 700;
      color: $grey-2;
    }
  }
  ul {
    margin: 0;
    padding-left: 22px;
    li {
      line-height: 22px;
    }
  }
}
</style>
