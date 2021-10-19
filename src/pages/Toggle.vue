<template>
  <div class="q-pa-md">
    <s-toggle v-model="toggleClick" />
    <s-button-toggle
      v-model="model"
      :options="options"
      :optionValue="options[0].value"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import SToggle from "../components/SToggle.vue";
import SButtonToggle from "../components/SButtonToggle.vue";

const item = [
  { label: "item01", value: "item01" },
  { label: "item02", value: "item02" },
  { label: "item03", value: "item03" },
  { label: "item04", value: "item04" },
];

export default {
  components: {
    SToggle,
    SButtonToggle,
  },
  setup() {
    return {
      toggleClick: ref(false),
      model: ref(""),
      options: ref(item),
    };
  },
};
</script>
