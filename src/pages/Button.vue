<template>
  <div class="q-pa-md q-gutter-sm">
    <s-button
      class="button-small"
      label="Button"
    />
    <s-button
      class="button-small-icon"
      icon="search"
      label="Button"
    />
    <s-button
      class="button-small"
      outline
      label="Button"
    />
    <s-button
      class="button-small"
      color="negative"
      label="Button"
    />
    <s-button
      class="button-small-icon-only"
      outline
      color="negative"
      icon="exit_to_app"
    /><br>
    <s-button
      class="button-medium"
      label="Button"
    />
    <s-button
      class="button-medium-icon"
      outline
      color="dark"
      label="Button"
      icon="search"
    />
    <s-button
      class="button-medium"
      outline
      color="negative"
      label="Button"
    /><br>
    <s-button
      class="button-small disable"
      disable
      label="Disabled"
    />
    <s-button
      class="button-small kakao"
      label="KAKAO"
    />
  </div>
</template>

<script>
import SButton from '../components/Button.vue'

export default {
  components: {
    SButton
  }
}
</script>

<style lang="scss">
.q-btn--dense .on-left {
  margin-right: 2px;
}

.button-small {
  width: 69px;
  height: 32px;
  font-size: 14px;
  line-height: 22px;
}

.button-small-icon {
  width: 91px;
  height: 32px;
  font-size: 14px;
}

.button-small-icon-only {
  width: 32px;
  height: 32px;
}

.button-medium {
  width: 107px;
  height: 42px;
  font-size: 18px;
}

.button-medium-icon {
  width: 135px;
  height: 42px;
  font-size: 18px;
}

.disable {
  background: #EEEEEE !important;
  color: #888888 !important;
}

.kakao {
  background: #FFFF80 !important;
  color: #000000  !important;
}
</style>
