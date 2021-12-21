<template>
  <q-select
    v-model="model"
    @update:modelValue="$emit('update:modelValue', model)"
    hide-dropdown-icon
  />
</template>

<script>
import ModelBindable from '../mixins/ModelBindable';

export default {
  name: 'EditableChipInput',
  mixins: [ModelBindable],
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {
    };
  },
};
</script>
