<template>
  <q-select
    outlined
    dense
    options-dense
    :dropdown-icon="selectArrowDownIcon"
    :options-selected-class="selectedOpt"
    popup-content-class="s-select-group-opts"
    class="s-select"
  >
    <template v-if="label" v-slot:prepend>
      <div class="include-label">{{ label }}</div>
    </template>
    <template v-if="group" v-slot:option="scope">
      <q-item
        v-if="scope.opt.group"
        v-bind="scope.itemProps"
        class="group-title"
      >
        <q-item-section>
          <q-item-label overline>
            {{ scope.opt.group }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-else v-bind="scope.itemProps" class="group-option">
        <q-item-section>
          <q-item-label v-html="scope.opt.label" />
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:no-option>
      <q-item class="s-select-no-option">
        <q-item-section class="text-grey"> No results </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
import { selectArrowDownIcon } from '../assets/icons.js';

export default {
  props: {
    label: String,
    group: Boolean,
    checkbox: Boolean,
    selectedOpt: String,
  },
  setup() {
    return {
      selectArrowDownIcon,
    };
  },
};
</script>

<style lang="scss">
.s-select {
  .q-field__inner {
    .q-field__control {
      padding: 0;
      padding-right: 12px;
      &:after {
        border: 1px solid $grey-7;
        box-shadow: none;
      }
      &:hover:after {
        border: 1px solid $grey-2;
      }
      &:active {
        background: $grey-11;
      }
      &-container {
        padding-left: 8px;
        height: auto;
        .q-field__native {
          > span {
            color: $grey-2;
          }
        }
      }
      .q-field__append {
        padding-left: 8px;
        .q-icon {
          color: $grey-2;
          width: 12px;
          height: 12px;
        }
      }
    }
  }
  .q-field__prepend {
    background-color: $grey-11;
    height: auto;
    padding: 5px 12px;
    border-right: 1px solid $grey-7;
    .include-label {
      font-size: 14px;
      font-weight: 400;
      color: $grey-2;
    }
  }
}
.q-field--disabled.s-select {
  .q-field__inner {
    .q-field__control {
      opacity: 1 !important;
      background: $grey-9;
      &:after {
        border: 1px solid $grey-8;
      }
      &-container {
        .q-field__native {
          > span {
            color: $grey-6;
          }
        }
      }
      .q-field__append {
        .q-icon {
          color: $grey-6;
        }
      }
    }
  }
}
.s-select-group-opts {
  padding: 0;
  .s-select-no-option {
    padding: 6px 12px;
  }
  .q-virtual-scroll__content {
    .q-item {
      padding: 6px 12px;
      height: 34px;
      &__section {
        .q-item__label {
          > span {
            font-size: 14px;
            font-weight: 400;
            color: $grey-2;
          }
        }
      }
    }
    .group-title {
      height: 36px;
      padding: 8px 12px;
      background: $grey-11 !important;
      opacity: 1 !important;
      border: none;
      border-top: 1px solid $grey-9 !important;
      &:first-of-type {
        border: none;
      }
      .q-item__section {
        .q-item__label {
          font-weight: 700;
          font-size: 14px;
          color: $grey-2;
          letter-spacing: 0;
        }
      }
    }
    .group-option {
      padding: 6px 12px 6px 20px;
      .q-item__section {
        .q-item__label {
          color: $grey-2;
        }
      }
    }
    .disabled.group-option {
      border: none;
      background: none !important;
      color: $grey-6 !important;
    }
    .q-manual-focusable--focused {
      background: $positive;
      .q-focus-helper {
        opacity: 0 !important;
      }
      .q-item__section {
        .q-item__label {
          color: white !important;
          > span {
            color: white !important;
          }
        }
      }
    }
  }
}
</style>
