<template>
  <q-pagination
    rounded
    flat
    unelevated
    color="grey-4"
    class="s-pagination q-pa-none"
    active-color="white"
    direction-links
    boundary-links
    :ripple="false"
    :boundary-numbers="false"
    :icon-prev="paginationLeftIcon"
    :icon-next="paginationRightIcon"
    :icon-first="paginationFirstIcon"
    :icon-last="paginationLastIcon"
  />
</template>

<script>
import {
  paginationLeftIcon,
  paginationRightIcon,
  paginationLastIcon,
  paginationFirstIcon,
} from '../assets/icons.js';

export default ({
  name: 'SPagination',
  props: {
    useDisable: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      paginationRightIcon,
      paginationLeftIcon,
      paginationLastIcon,
      paginationFirstIcon,
    };
  },
});
</script>

<style lang="scss">
.s-pagination {
  & > .q-btn-item {
    & > .q-btn__content {
      padding: 4px 10px !important;
      & > svg {
        width: 12px;
        height: 12px;
      }
    }
    &.disabled {
      display: none;
    }
  }
  & > div {
    & > .q-btn {
      & > .q-btn__content {
        padding: 2px 10px 4px 10px !important;
      }
      // active
      &.text-white {
        background: $indigo-7;
      }
    }
  }
  // common style
  .q-btn {
    margin: 0 4px;
    min: {
      width: 28px !important;
      height: 28px !important;
    };
    height: 28px !important;
    padding: 0 !important;
    justify-content: center;
    &:hover {
      &::before {
        border: 1px solid $indigo-7;
      }
    }
  }
  .disabled {
    background: none !important;
    &:hover {
      &::before {
        border: none;
      }
    }
    .q-btn__content {
      .q-icon {
        color: $grey-6;
      }
      > span {
        color: $grey-6;
      }
    }
  }
  .q-focusable:focus,
  .q-hoverable:hover {
    & > .q-focus-helper {
      display: none;
    }
  }
}
</style>
