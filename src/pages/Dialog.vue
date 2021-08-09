<template>
  <div class="q-pa-md q-gutter-sm">
    <s-button
      class="button-small"
      label="Info"
      @click="confirm = true"
    />
    <s-confirm-info
      v-model="confirm"
      title="Infomation"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo nisi nec sem congue vulputate. Fusce ultrices metus elit, at molestie quam dignissim nec."
    />

    <s-button
      class="button-small"
      label="Warning"
      color="negative"
      @click="warning = true"
    />
    <s-confirm-warning
      v-model="warning"
      title="Warning"
      content="Donec finibus, sapien sit amet gravida porttitor, enim tortor pulvinar quam, pharetra tincidunt eros libero consequat est. Donec sit amet malesuada ipsum, nec consectetur eros. Phasellus sodales ac felis ac mattis."
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import SButton from '../components/Button.vue'
import SConfirmInfo from '../components/ConfirmInfo.vue'
import SConfirmWarning from '../components/ConfirmWarning.vue'

export default {
  components: {
    SConfirmInfo,
    SConfirmWarning,
    SButton
  },
  setup () {
    return {
      confirm: ref(false),
      warning: ref(false)
    }
  }
}
</script>

<style lang="scss">
.button-small {
  width: 69px;
  height: 32px;
  font-size: 14px;
  line-height: 22px;
}
</style>
