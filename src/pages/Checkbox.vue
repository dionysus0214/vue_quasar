<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <s-checkbox v-model="item1" label="item1" />
      <s-checkbox v-model="item2" label="item2" />
      <s-checkbox v-model="item3" label="item3" />
      <s-checkbox v-model="item4" label="item4" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SCheckbox from '../components/SCheckbox.vue';

export default {
  components: {
    SCheckbox,
  },
  setup() {
    return {
      item1: ref(false),
      item2: ref(false),
      item3: ref(false),
      item4: ref(false),
    };
  },
};
</script>
