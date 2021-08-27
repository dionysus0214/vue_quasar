<template>
  <div class="q-pa-md">
    <s-toggle
      v-model="check"
    />
    <s-button-toggle
      v-model="model"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import SToggle from '../components/SToggle.vue';
import SButtonToggle from '../components/SButtonToggle.vue';

export default {
  components: {
    SToggle,
    SButtonToggle,
  },
  setup() {
    return {
      check: ref(false),
      model: ref(''),
    };
  },
};
</script>
