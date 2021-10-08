<template>
  <div class="container">
    <label class="switch" for="checkbox">
      <input type="checkbox" id="checkbox" />
      <div class="slider round" @click="isChecked"></div>
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    isChecked() {
      this.$emit(
        "update:modelValue",
        // eslint-disable-next-line comma-dangle
        (this.$attrs.modelValue = !this.$attrs.modelValue)
      );
    },
  },
};
</script>

<style lang="scss">
@import "../css/quasar.variables.scss";

.container {
  margin: 0 auto;
}

.switch {
  display: inline-block;
  width: 42px;
  height: 24px;
  position: relative;
}

.switch input {
  display: none;
}

.slider {
  background-color: $grey-8;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  transition: 0.4s;
}

.slider:before {
  background-color: white;
  content: "";
  width: 20px;
  height: 20px;
  bottom: 2px;
  left: 2px;
  position: absolute;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: $positive;
}

input:checked + .slider:before {
  transform: translateX(18px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
