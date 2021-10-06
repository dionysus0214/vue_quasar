<template>
  <div class="q-pa-md">
    <s-breadcrumbs
      :labels="labels"
    />
  </div>
</template>

<script>
import SBreadcrumbs from '../components/SBreadcrumbs.vue';

const labels = ['Home', '재고 관리', '재고 상품 관리', '재고 등록'];

export default {
  components: {
    SBreadcrumbs,
  },
  setup() {
    return {
      labels,
    };
  },
};
</script>
