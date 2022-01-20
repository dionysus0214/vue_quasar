<template>
  <div class="bg-grey-10">
    <div class="q-pa-lg flex flex-center">
      <s-pagination :max="10" :max-pages="10" v-model="currentPage" />
    </div>
    <div class="q-pa-lg flex flex-center">
      <s-pagination :max="1006" :max-pages="10" v-model="currentPage" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SPagination from '../components/SPagination.vue';

export default {
  components: {
    SPagination,
  },
  setup() {
    return {
      currentPage: ref(5),
    };
  },
};
</script>
