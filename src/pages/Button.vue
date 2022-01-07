<template>
  <div class="q-pa-md q-gutter-sm">
    <s-button
      size="sm"
      label="Button"
      noHover
      color="indigo-6"
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
      color="grey-4"
      label="Button"
    />
    <s-button
      size="sm"
      icon="home"
      noHover
    /><br>
    <s-button
      size="md"
      label="Button"
      color="indigo-6"
    />
    <s-button
      size="md"
      outline
      color="indigo-6"
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
    <s-button-group noHover>
      <s-button
        outline
        label="Button1"
        disable
      />
      <s-button
        label="Button2"
        color="indigo-6"
      />
      <s-button
        outline
        label="Button3"
      />
    </s-button-group>
  </div>
</template>

<script>
import SButton from "../components/SButton.vue";
import SButtonGroup from "../components/SButtonGroup.vue";

export default {
  components: {
    SButton,
    SButtonGroup,
  },
};
</script>

<style>
.kakao {
  background: #ffd400 !important;
  color: #000000 !important;
}
</style>
