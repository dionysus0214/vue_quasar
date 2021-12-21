export default {
  props: {
    modelValue: {
      type: [Object, Array, String],
      required: true,
    },
  },
  data() {
    return {
      model: null,
    };
  },
  mounted() {
    this.model = this.modelValue;
  },
  watch: {
    modelValue(newValue) {
      this.model = newValue;
    },
  },
};
