<template>
  <q-tabs
    v-model="tab"
    align="left"
    class="tabs text-grey"
    active-color="positive"
    indicator-color="transparent"
    no-caps
  >
    <q-tab class="tab" name="tab01" label="tab01" />
    <q-tab class="tab" name="tab02" label="tab02" />
    <q-tab class="tab" name="tab03" label="tab03" />
    <q-tab class="tab" name="tab04" label="tab04" />
    <q-tab class="tab" name="tab05" label="tab05" />
  </q-tabs>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('tab01')
    }
  }
}
</script>

<style>
.tab {
  border: 1px solid #CCCCCC;
  border-radius: 2px;
  margin-right: 4px;
}

.tab:active {
  border: 1px solid #0075FF;
  border-bottom: transparent;
}
</style>
