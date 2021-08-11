<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <s-tabs
        v-model="tab"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import STabs from '../components/Tabs.vue'

export default {
  components: {
    STabs
  },
  setup () {
    return {
      tab: ref('tab01')
    }
  }
}
</script>
