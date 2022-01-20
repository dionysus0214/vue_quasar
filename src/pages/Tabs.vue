<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <s-tabs v-model="tab">
        <s-tab name="tab1" label="tab1" />
        <s-tab name="tab2" label="tab2" />
        <s-tab name="tab3" label="tab3" />
        <s-tab name="tab4" label="tab4" />
      </s-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="tab1">tab1</q-tab-panel>
        <q-tab-panel name="tab2">tab2</q-tab-panel>
        <q-tab-panel name="tab3">tab3</q-tab-panel>
        <q-tab-panel name="tab4">tab4</q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import STab from "../components/STab.vue";
import STabs from "../components/STabs.vue";

export default {
  components: {
    STab,
    STabs,
  },
  setup() {
    const tab = ref('tab1');
    function updateModelValue(val) {
      // tab.value = val;
      console.log(val);
    }
    return {
      tab,
      updateModelValue,
    };
  },
};
</script>
