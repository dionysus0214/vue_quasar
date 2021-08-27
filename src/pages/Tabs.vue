<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-tabs
        align="left"
        class="tabs text-grey"
        active-color="positive"
        indicator-color="transparent"
        no-caps
        v-model="tab"
      >
        <s-tab name="tab1" label="Lorem ipsum" />
        <div class="space"></div>
        <s-tab name="tab2" label="Maecenas tempor" />
        <div class="space"></div>
        <s-tab name="tab3" label="Integer augue veli" />
        <div class="space"></div>
        <s-tab name="tab4" label="Morbi a felis" />
      </q-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import STab from '../components/STab.vue';

export default {
  components: {
    STab,
  },
  setup() {
    return {
      tab: ref('tab1'),
    };
  },
};
</script>

<style lang="scss">
.space {
  width: 4px;
  height: 48px;
  border-bottom: 1px solid $grey-3;
}
</style>
