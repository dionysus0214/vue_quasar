<template>
  <div class="q-pa-md q-gutter-md">
    <s-toggle
      v-model="toggleClick"
    />
    <s-toggle
      v-model="toggleClick"
      disable
    />
    <s-button-toggle
      v-model="innerValue"
      :options="options"
      @update:modelValue="updateModelValue"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import SToggle from "../components/SToggle.vue";
import SButtonToggle from "../components/SButtonToggle.vue";

const options = [
  { label: 'item01', value: 'item01' },
  { label: 'item02', value: 'item02' },
  { label: 'item03', value: 'item03' },
  { label: 'item04', value: 'item04' },
];

export default {
  components: {
    SToggle,
    SButtonToggle,
  },
  setup() {
    const toggleClick = ref(false);
    const innerValue = ref(options[0].value);

    function updateModelValue(val) {
      console.log(val);
    }
    return {
      toggleClick,
      innerValue,
      options,

      updateModelValue,
    };
  },
};
</script>
