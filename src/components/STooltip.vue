<template>
  <q-btn
    no-caps
    no-wrap
    dense
    unelevated
    :ripple="false"
    class="s-tooltip-btn"
    :class="{'no-hover': noHover}"
  >
    <q-tooltip
      :anchor="$props.boxAnchor"
      :self="$props.boxSelf"
      :offset="$props.boxOffset"
      class="bg-indigo-4 text-white s-tooltip"
      :modelValue="$props.modelValue"
    >
      <slot></slot>
    </q-tooltip>
    <q-tooltip
      :anchor="$props.arrowAnchor"
      :self="$props.arrowSelf"
      :offset="$props.arrowOffset"
      :class="$props.arrowStyle"
      class="tooltip-triangle"
      :modelValue="$props.modelValue"
    ></q-tooltip>
  </q-btn>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    noHover: {
      type: Boolean,
      default: false,
    },
    boxAnchor: {
      type: String,
      required: true,
    },
    boxSelf: {
      type: String,
      required: true,
    },
    boxOffset: {
      type: Array,
      required: true,
    },
    arrowAnchor: {
      type: String,
      required: true,
    },
    arrowSelf: {
      type: String,
      required: true,
    },
    arrowOffset: {
      type: Array,
      required: true,
    },
    arrowStyle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.s-tooltip-btn {
  padding: 0;
}
.s-tooltip {
  padding: 6px 20px;
  border-radius: 4px;
  font: {
    size: 14px;
    weight: 500;
  }
}
.tooltip-triangle {
  background: none !important;
  padding: 0;
  width: 0;
  height: 0;
}
.bottom {
  border: {
    top: 0px solid transparent;
    bottom: 12px solid $indigo-4;
    left: 8px solid transparent;
    right: 8px solid transparent;
  }
}
.top {
  border: {
    top: 12px solid $indigo-4;
    bottom: 0px solid transparent;
    left: 8px solid transparent;
    right: 8px solid transparent;
  }
}
.left {
  border: {
    top: 8px solid transparent;
    bottom: 8px solid transparent;
    left: 12px solid $indigo-4;
    right: 0px solid transparent;
  }
}
.right {
  border: {
    top: 8px solid transparent;
    bottom: 8px solid transparent;
    left: 0px solid transparent;
    right: 12px solid $indigo-4;
  }
}
.no-hover {
  &.q-focusable:focus > .q-focus-helper,
  &.q-manual-focusable--focused > .q-focus-helper,
  &.q-hoverable:hover > .q-focus-helper {
    background: none !important;
    opacity: 0 !important;
    &::before,
    &::after {
      opacity: 0 !important;
      background: none !important;
    }
  }
}
</style>
