<template>
  <s-transfer />
</template>

<script>
import { ref } from "vue";
import STransfer from "../components/STransfer.vue";

export default {
  components: {
    STransfer,
  },
  setup() {
    return {
      singleFile: ref(null),
    };
  },
};
</script>
