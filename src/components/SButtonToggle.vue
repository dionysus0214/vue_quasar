<template>
  <div>
    <q-btn-toggle
      class="s-btn-toggle"
      no-caps
      unelevated
      color="white"
      text-color="grey-3"
      toggle-color="positive"
      padding="8px 24px"
      v-model="innerValue"
      :options="[
        { label: 'apple', value: 'apple' },
        { label: 'banana', value: 'banana' },
        { label: 'cherry', value: 'cherry' },
        { label: 'grape', value: 'grape' },
      ]"
      @update:model-value="handleUpdate"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      innerValue: ref("apple"),
    };
  },
  methods: {
    handleUpdate() {
      this.$emit("update:model-value", this.innerValue);
    },
  },
};
</script>

<style lang="scss">
@import "../css/quasar.variables.scss";

.s-btn-toggle {
  .q-btn {
    color: $grey-8;
    border: 1px solid $grey-8;
  }
  .q-btn:nth-child(2n) {
    border-left: transparent;
    border-right: transparent;
  }
  .q-btn:first-child {
    border-left: 1px solid $grey-8;
  }
  .q-btn:last-child {
    border-right: 1px solid $grey-8;
  }
}
</style>
