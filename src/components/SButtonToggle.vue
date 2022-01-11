<template>
  <q-btn-toggle
    v-model="btnValue"
    no-caps
    no-wrap
    outline
    unelevated
    :ripple="false"
    color="grey-8"
    text-color="grey-8"
    toggle-color="white"
    toggle-text-color="positive"
    padding="8px 24px"
    class="s-btn-toggle"
  />
</template>

<script>
import { ref, watch } from 'vue';

export default ({
  props: {
    modelValue: String,
  },
  setup(props) {
    const btnValue = ref(props.modelValue);
    watch(
      () => props.modelValue,
      (newVal) => {
        btnValue.value = newVal;
      },
    );

    return {
      btnValue,
    };
  },
});
</script>

<style lang="scss">
.s-btn-toggle {
  .q-btn {
    height: 38px;
    &:first-of-type {
      border-radius: 2px 0 0 2px;
    }
    &:last-of-type {
      border-radius: 0 2px 2px 0;
    }
    &:before {
      border-right: 1px solid $grey-8 !important;
    }
    &__content {
      > span {
        line-height: 22px;
        font-size: 14px;
        font-weight: 500;
      }
    }
    &:hover {
      .q-focus-helper {
        opacity: 0 !important;
      }
      .q-btn__content {
        > span {
          color: $grey-4;
        }
      }
    }
    &:active {
      background: $positive !important;
      &:before {
        border: 1px solid $positive !important;
      }
      .q-btn__content {
        > span {
          color: white;
        }
      }
    }
  }
  .text-positive {
    &:before {
      border: 1px solid $positive !important;
    }
    &:hover {
      .q-btn__content {
        > span {
          color: $positive !important;
        }
      }
    }
  }
}
</style>
