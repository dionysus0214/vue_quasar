<template>
  <div class="q-pa-md q-gutter-sm">
    <s-button
      size="sm"
      label="Button"
    />
    <s-button
      size="sm"
      color="secondary"
      icon="search"
      label="Button"
    />
    <s-button
      size="sm"
      outline
      label="Button"
    />
    <s-button
      size="sm"
      color="negative"
      label="Button"
    />
    <s-button
      size="sm"
      icon="home"
    /><br>
    <s-button
      size="md"
      label="Button"
    />
    <s-button
      size="md"
      outline
      label="Button"
      icon="search"
    />
    <s-button
      size="md"
      outline
      color="negative"
      label="Button"
    />
    <s-button
      size="md"
      color="secondary"
      icon="reorder"
    /><br>
    <s-button
      class="kakao"
      label="로그인"
    />
    <s-button
      disable
      size="md"
      label="Disabled"
    /><br>
  </div>
</template>

<script>
import SButton from '../components/SButton.vue';

export default {
  components: {
    SButton,
  },
};
</script>

<style>
.kakao {
  background: #FFD400 !important;
  color: #000000  !important;
}
</style>
