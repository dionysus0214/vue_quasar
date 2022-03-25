<template>
  <div class="flex justify-center q-mt-xl">
    <s-tooltip
      :boxAnchor="'bottom middle'"
      :boxSelf="'top middle'"
      :boxOffset="[15, 15]"
      :arrowAnchor="'bottom middle'"
      :arrowSelf="'center middle'"
      :arrowStyle="'bottom'"
      :icon="'navigation'"
      :arrowOffset="[10, 10]"
      noHover
      v-model="toolOpen"
      @click="toolOpen = !toolOpen"
    >
      <div class="text-center">이것은 툴팁입니다.</div>
      <div class="text-center">마우스를 대면 나타납니다.</div>
    </s-tooltip>
  </div>
  <div class="flex justify-center q-mt-xl">
    <s-tooltip
      :boxAnchor="'top middle'"
      :boxSelf="'bottom middle'"
      :boxOffset="[15, 15]"
      :arrowAnchor="'top middle'"
      :arrowSelf="'center middle'"
      :arrowStyle="'top'"
      :arrowOffset="[10, 10]"
      label="Hover Me"
      noHover
    >
      <div class="text-center">이것은 툴팁입니다.</div>
      <div class="text-center">마우스를 대면 나타납니다.</div>
    </s-tooltip>
  </div>
  <div class="flex justify-center q-mt-xl">
    <s-tooltip
      :boxAnchor="'center start'"
      :boxSelf="'center right'"
      :boxOffset="[15, 15]"
      :arrowAnchor="'center left'"
      :arrowSelf="'center middle'"
      :arrowStyle="'left'"
      :arrowOffset="[10, 10]"
      :icon="'shopping_cart'"
      noHover
    >
      <div class="text-center">이것은 툴팁입니다.</div>
      <div class="text-center">마우스를 대면 나타납니다.</div>
    </s-tooltip>
  </div>
  <div class="flex justify-center q-mt-xl">
    <s-tooltip
      :boxAnchor="'center end'"
      :boxSelf="'center start'"
      :boxOffset="[15, 15]"
      :arrowAnchor="'center right'"
      :arrowSelf="'center middle'"
      :arrowStyle="'right'"
      :arrowOffset="[10, 10]"
      :icon="'shopping_cart'"
      noHover
    >
      <div class="text-center">이것은 툴팁입니다.</div>
      <div class="text-center">마우스를 대면 나타납니다.</div>
    </s-tooltip>
  </div>
</template>

<script>
import { ref } from 'vue';
import STooltip from '../components/STooltip.vue';

export default {
  components: {
    STooltip,
  },
  setup() {
    return {
      toolOpen: ref(false),
    };
  },
};
</script>
