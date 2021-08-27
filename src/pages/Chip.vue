<template>
  <div class="q-pa-md q-gutter-md">
    <s-chip
      v-model="text1"
    >
      select item1
    </s-chip>
    <s-chip
      v-model="text2"
    >
      <q-icon name="person" />
      select item2
    </s-chip>
  </div>
</template>

<script>
import { ref } from 'vue';
import SChip from '../components/SChip.vue';

export default {
  components: {
    SChip,
  },
  setup() {
    return {
      text1: ref(true),
      text2: ref(true),
    };
  },
};
</script>
