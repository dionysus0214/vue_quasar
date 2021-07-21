<template>
  <div class="q-pa-md q-gutter-sm">
    <s-button />
    <s-button
      outline
    />
    <s-button
      color="negative"
    /><br>
    <s-button
      size="md"
      icon="search"
    />
    <s-button
      outline
      color="negative"
      size="md"
    /><br>
    <s-button
      class="disable"
      disable
      label="Disabled"
    />
    <s-button
      class="kakao"
      label="KAKAO"
    />
  </div>
</template>

<script>
import SButton from '../components/Button.vue'

export default {
  components: { SButton }
}
</script>

<style scoped>
.disable {
  background: #EEEEEE !important;
  color: #888888 !important;
}
.kakao {
  background: #FFFF80 !important;
  color: #000000  !important;
  font-weight: bold;
}
</style>
