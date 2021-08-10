<template>
  <div class="q-pa-lg flex flex-center">
    <s-pagination
      :max="8"
      :max-pages="10"
      boundary-numbers
      v-model="currentPage"
    />
  </div>
  <div class="q-pa-lg flex flex-center">
    <s-pagination
      :max="50"
      :max-pages="10"
      v-model="currentPage"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import SPagination from '../components/Pagination.vue'

export default {
  components: {
    SPagination
  },
  setup () {
    return {
      currentPage: ref(1)
    }
  }
}
</script>
