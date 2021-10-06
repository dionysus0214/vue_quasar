<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <s-tabs
        v-model="tab"
      >
        <s-tab name="tab1" label="Lorem ipsum" />
        <s-tab name="tab2" label="Maecenas tempor" />
        <s-tab name="tab3" label="Integer augue veli" />
        <s-tab name="tab4" label="Morbi a felis" />
      </s-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      tab: ref(''),
    };
  },
};
</script>
