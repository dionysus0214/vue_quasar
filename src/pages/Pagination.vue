<template>
  <div class="q-pa-lg flex flex-center">
    <s-pagination
      :max="8"
      :max-pages="10"
      boundary-numbers
    />
  </div>
  <div class="q-pa-lg flex flex-center">
    <s-pagination
      :max="50"
      :max-pages="10"
    />
  </div>
</template>

<script>
import SPagination from '../components/Pagination.vue'

export default {
  components: { SPagination }
}
</script>
