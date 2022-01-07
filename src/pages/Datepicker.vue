<template>
  <div class="q-pa-md flex">
    <div class="q-gutter-sm q-ma-md">
      <s-date-picker
        short
        v-model="innerValue"
        @update:modelValue="updateDate"
      />
      <s-date-picker
        long
        v-model="innerValue"
        @update:modelValue="updateDate"
      />
      <s-date-picker
        range
        v-model="dateRange"
        :isDisable="isDisable"
        :inquiryLimit="1"
        :subtractDate="subtractDate"
        :addDate="addDate"
      />
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
    function updateDate(val) {
      console.log('부모 : ', val);
    }

    return {
      innerValue: ref(null),
      dateRange: ref({}),
      isDisable: ref(false),
      subtractDate: {
        months: 1,
      },
      addDate: {
        months: 1,
      },

      updateDate,
    };
  },
};
</script>
