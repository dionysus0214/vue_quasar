<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <s-datepicker
        short
        v-model="date"
      />
      <s-datepicker
        long
        v-model="date"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SDatepicker from '../components/SDatePicker.vue';

export default {
  components: {
    SDatepicker,
  },
  setup() {
    return {
      date: ref(''),
    };
  },
};
</script>
