<template>
  <q-tabs
    align="left"
    active-color="positive"
    indicator-color="transparent"
    no-caps
    dense
    class="s-tabs text-grey"
    :model-value="tab"
  >
    <slot></slot>
  </q-tabs>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props) {
    const tab = ref(props.modelValue);

    return {
      tab,
    };
  },
};
</script>
