<template>
  <div class="q-pa-md q-gutter-sm">
    <s-button
      size="md"
      label="Info"
      color="indigo-6"
      @click="dialog = true"
    />
    <s-dialog
      type="warning"
      withHeaderIcon
      v-model="dialog"
      title="Infomation"
      buttonLabel="Agree"
      firstBtnColor="negative"
    >
      <template v-slot:content>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo nisi nec sem congue vulputate. Fusce ultrices ommodo nisi metus elit, at molestie quam dignissim nec.</div>
      </template>
    </s-dialog>
    <s-button
      size="md"
      label="Warning"
      color="negative"
      @click="warning = true"
    />
    <s-dialog
      persistent
      type="info"
      withHeaderIcon
      v-model="warning"
      title="기본양식 수정"
      twoButtons
      buttonLabel="수정"
      secondButtonLabel="취소"
      firstBtnOutLine
      firstBtnColor="indigo-6"
      secondBtnColor="secondary"
      secondBtnOutLine
      btnVertical
    >
      <template v-slot:content>
        <div>Donec finibus, sapien sit amet gravida porttitor, enim tortor pulvinar quam, pharetra tincidunt eros libero consequat est. Donec sit amet malesuada ipsum, nec eros. Phasellus sodales ac felis ac mattis.</div>
      </template>
    </s-dialog>
  </div>
</template>

<script>
import { ref } from 'vue';
import SButton from '../components/SButton.vue';
import SDialog from '../components/SDialog.vue';

export default {
  components: {
    SDialog,
    SButton,
  },
  setup() {
    return {
      dialog: ref(false),
      warning: ref(false),
    };
  },
};
</script>
