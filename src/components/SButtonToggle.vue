<template>
  <q-btn-toggle
    class="s-btn-toggle"
    no-caps
    unelevated
    color="white"
    text-color="grey-3"
    toggle-color="positive"
    padding="8px 24px"
    v-model="innerValue"
    @update:modelValue="handleUpdate"
  />
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    optionValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      option: this.options,
      innerValue: ref(this.optionValue),
    };
  },
  methods: {
    handleUpdate() {
      this.$emit("update:modelValue", this.innerValue);
    },
  },
};
</script>

<style lang="sass">
@import '../css/quasar.variables.scss'

.s-btn-toggle
  .q-btn
    color: $grey-5
    border: 1px solid $grey-8
    height: 38px
    &__content
      line-height: 20px
  .q-btn:nth-child(2n)
    border-left: transparent
    border-right: transparent
  .q-btn:first-child
    border-left: 1px solid $grey-8
  .q-btn:last-child
    border-right: 1px solid $grey-8
</style>
