<template>
  <div class="tooltip">
    <s-button
      label="tooltip test"
    />
    <div class="tooltip-content">
      {{ content }}
    </div>
  </div>
</template>

<script>
import SButton from '../components/Button.vue'

export default {
  components: {
    SButton
  },
  props: {
    content: String
  }
}
</script>

<style lang="scss">
@import '../css/quasar.variables.scss';
.tooltip {
  position: relative;
  display: inline-block;
  margin: 20px;
}

.tooltip-content {
  visibility: hidden;
  width: 250px;
  height: 100px;
  position: relative;
  top: 20px;
  left: -70px;
  background: $blue-1;
  color: white;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 4px;
  text-align: center;
  z-index: 1000;
}

.tooltip-content::after {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-bottom-color: $blue-1;
  margin-left: -20px;
  margin-top: -20px;
}

.tooltip:hover .tooltip-content {
  visibility: visible;
}
</style>
