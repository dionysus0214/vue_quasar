<template>
  <div class="q-pa-md flex">
    <div class="q-gutter-sm q-ma-md">
      <s-date-picker short v-model="innerValue" />
      <s-date-picker long v-model="innerValue" />
      <s-date-picker range v-model="dateRange" :showDate="showDate" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SDatePicker from "../components/SDatePicker.vue";

export default {
  components: {
    SDatePicker,
  },
  setup() {
    return {
      innerValue: ref(null),
      dateRange: ref({}),
      showDate: ref(false),
    };
  },
};
</script>
