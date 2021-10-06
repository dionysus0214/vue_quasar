<template>
  <div class="q-pa-md">
    <q-btn
      no-caps
      no-wrap
      dense
      unelevated
      outline
      style="padding: 5px 12px"
      color="blue-2"
      :ripple="false"
      label="hover me"
    >
      <s-tooltip>
        <div class="q-mb-xs text-center">이것은 툴팁입니다.</div>
        <div class="q-mb-xs text-center">마우스를 대면 나타납니다.</div>
      </s-tooltip>
    </q-btn>
  </div>
</template>

<script>
import STooltip from '../components/STooltip.vue';

export default {
  components: {
    STooltip,
  },
};
</script>
