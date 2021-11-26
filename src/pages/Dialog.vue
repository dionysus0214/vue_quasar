<template>
  <div class="q-pa-md q-gutter-sm">
    <s-button
      size="md"
      label="Info"
      color="indigo-6"
      @click="confirm = true"
    />
    <s-confirm
      type="info"
      v-model="confirm"
      title="Infomation"
      buttonLabel="Agree"
    >
      <template v-slot:content>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo nisi nec sem congue vulputate. Fusce ultrices ommodo nisi metus elit, at molestie quam dignissim nec.</div>
      </template>
    </s-confirm>
    <s-button
      size="md"
      label="Warning"
      color="negative"
      @click="warning = true"
    />
    <s-confirm
      persistent
      type="warning"
      withHeaderIcon
      v-model="warning"
      title="Warning"
      twoButtons
      buttonLabel="Agree"
      secondButtonLabel="Disagree"
    >
      <template v-slot:content>
        <div>Donec finibus, sapien sit amet gravida porttitor, enim tortor pulvinar quam, pharetra tincidunt eros libero consequat est. Donec sit amet malesuada ipsum, nec eros. Phasellus sodales ac felis ac mattis.</div>
      </template>
    </s-confirm>
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
