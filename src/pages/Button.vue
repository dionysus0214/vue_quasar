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
      disable
      label="Disabled"
    />
    <s-button
      id="kakao"
      label="KAKAO"
      color="warning"
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
#kakao {
  background-color: yellow;
}
</style>
