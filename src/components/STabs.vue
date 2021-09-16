<template>
  <q-tabs
    align="left"
    class="tabs text-grey"
    active-color="positive"
    indicator-color="transparent"
    no-caps
    v-model="innerValue"
    @update:model-value="clickTab"
  >
    <slot></slot>
  </q-tabs>
</template>

<script>
export default {
  data() {
    return {
      innerValue: null,
    };
  },
  methods: {
    clickTab() {
      this.$emit('update:model-value', this.innerValue);
    },
  },
};
</script>
