<template>
  <q-tooltip
    class="bg-blue-3 text-body2"
    anchor="bottom middle"
    self="top middle"
  >
    <slot></slot>
  </q-tooltip>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>
