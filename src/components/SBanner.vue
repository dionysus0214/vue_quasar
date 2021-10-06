<template>
  <q-banner inline-actions>
    <template v-slot>
      <slot></slot>
    </template>
    <template v-slot:action>
      <slot name="button"></slot>
    </template>
  </q-banner>
</template>

<script>
export default {
  props: {
    buttonLabel: {
      type: String,
      default: '',
    },
  },
};
</script>
