<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <s-radio v-model="item" val="item1" label="item1" disable />
      <s-radio v-model="item" val="item2" label="item2" />
      <s-radio v-model="item" val="item3" label="item3" />
      <s-radio v-model="item" val="item4" label="item4" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SRadio from '../components/SRadio.vue';

export default {
  components: {
    SRadio,
  },
  setup() {
    return {
      item: ref('item1'),
    };
  },
};
</script>
