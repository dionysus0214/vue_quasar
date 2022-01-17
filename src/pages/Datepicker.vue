<template>
  <div class="q-pa-md flex">
    <div class="q-gutter-sm q-ma-md">
      <q-btn label="click" @click="clickHandle" />
      <q-btn
        label="change"
        @click="dateText = '2021-01-01 ~ 2022-01-07'"
      />
      <q-btn
        label="cancel"
        @click="isDisable = false"
      />
      <s-date-picker
        short
        v-model="dateRange"
        v-model:dateText="today"
        :subtractDate="{ months: 1 }"
        @update:modelValue="updateDate"
      />
    </div>
    <div class="q-gutter-sm q-ma-md">
      <s-date-picker
        long
        v-model="dateRange"
        v-model:dateText="today"
        :subtractDate="{ months: 1 }"
        @update:modelValue="updateDate"
      />
    </div>
    <div class="q-gutter-sm q-ma-md">
      <s-date-picker
        long
        :isDisable="isDisable"
        v-model="dateRange"
        v-model:dateText="today"
        :subtractDate="{ months: 1 }"
        @update:modelValue="updateDate"
      />
    </div>
    <div class="q-gutter-sm q-ma-md">
      <s-date-picker
        :range="isRange"
        :subtractDate="{ months: 1 }"
        :addDate="{ months: 1 }"
        v-model="dateRange"
        v-model:dateText="dateText"
        @update:modelValue="updateDate"
        :isDisable="isDisable"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { date } from 'quasar';
import SDatePicker from "../components/SDatePicker.vue";

export default {
  components: {
    SDatePicker,
  },
  setup() {
    function updateDate(val) {
      console.log('부모 : ', val);
    }
    const today = date.formatDate(new Date(), 'YYYY-MM-DD');
    const dateRange = ref({ from: today, to: today });
    const dateText = ref(`${today} ~ ${today}`);
    const isDisable = ref(false);
    const isRange = ref(true);

    function clickHandle() {
      isDisable.value = true;
      isRange.value = false;
      dateText.value = '2021-01-01 ~ 2022-01-10';
    }
    return {
      dateRange,
      today,
      innerValue: ref(null),
      dateText,
      updateDate,
      clickHandle,
      isDisable,
      isRange,
    };
  },
};
</script>
