<template>
  <q-btn
    no-caps
    no-wrap
    dense
    unelevated
    style="padding: 5px 12px"
    :ripple="false"
    color="blue-2"
    :class="{
      'button-small': size === 'sm',
      'button-medium': size === 'md',
      'label': label,
      'icon': icon,
    }"
  >
    <slot v-if="icon !== ''">
      <q-icon :name="icon" />
    </slot>
    <slot v-if="label !== ''">
      {{ label }}
    </slot>
  </q-btn>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'sm',
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.button-small {
  width: 69px;
  height: 32px !important;
  border-radius: 4px !important;
  line-height: 20px;
}

.button-small.label.icon {
  width: 91px;
}

.button-small.icon {
  width: 32px;
}

.button-medium {
  width: 107px;
  height: 42px !important;
  border-radius: 4px !important;
  font-size: 18px;
}

.button-medium.label.icon {
  width: 135px;
}

.button-medium.icon {
  width: 42px;
}
</style>
