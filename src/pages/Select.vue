<template>
  <div class="q-pa-md" style="max-width: 297px">
    <div class="q-gutter-md">
      <s-select
        v-model="model"
        :options="options"
      />
      <s-search-select

      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SSelect from '../components/SSelect.vue';
import SSearchSelect from '../components/SSearchSelect.vue';

export default {
  components: {
    SSelect,
    SSearchSelect,
  },
  setup() {
    return {
      model: ref(null),
      options: [
        'item1', 'item2', 'item3', 'item4', 'item5',
      ],
    };
  },
};
</script>
