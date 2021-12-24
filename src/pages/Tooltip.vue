<template>
  <div class="flex justify-center q-mt-xl">
    <q-btn
      no-caps
      no-wrap
      dense
      unelevated
      outline
      label="hover me"
      color="indigo-4"
      :ripple="false"
      style="padding: 5px 12px; margin-top: 100px"
    >
      <s-tooltip anchor="top middle" self="center middle" :offset="[0, 50]">
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
