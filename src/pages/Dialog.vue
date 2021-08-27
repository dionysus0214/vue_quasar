<template>
  <div class="q-pa-md q-gutter-sm">
    <s-button
      size="md"
      label="Info"
      @click="confirm = true"
    />
    <s-confirm
      type="info"
      v-model="confirm"
      title="Infomation"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo nisi nec sem congue vulputate. Fusce ultrices ommodo nisi metus elit, at molestie quam dignissim nec."
    />
    <s-button
      size="md"
      label="Warning"
      color="negative"
      @click="warning = true"
    />
    <s-confirm
      type="warning"
      v-model="warning"
      title="Warning"
      content="Donec finibus, sapien sit amet gravida porttitor, enim tortor pulvinar quam, pharetra tincidunt eros libero consequat est. Donec sit amet malesuada ipsum, nec eros. Phasellus sodales ac felis ac mattis."
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import SButton from '../components/SButton.vue';
import SConfirm from '../components/SConfirm.vue';

export default {
  components: {
    SConfirm,
    SButton,
  },
  setup() {
    return {
      confirm: ref(false),
      warning: ref(false),
    };
  },
};
</script>
