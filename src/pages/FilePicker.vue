<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 297px">
      <s-file-picker
        v-model="singleFile"
        placeholder="파일을 업로드하세요."
        @update:modelValue="updateModelValue"
      />
    </div>
    <div class="q-gutter-md q-my-md" style="max-width: 297px">
      <s-file-picker
        v-model="singleFile"
        placeholder="파일을 업로드하세요."
        disable
        @update:modelValue="updateModelValue"
      />
    </div>
    <s-button label="reset" color="indigo-6" @click="resetFile" />
  </div>
</template>

<script>
import { ref } from 'vue';
import SButton from '../components/SButton.vue';
import SFilePicker from '../components/SFilePicker.vue';

export default {
  components: {
    SButton,
    SFilePicker,
  },
  setup() {
    const singleFile = ref(null);
    // eslint-disable-next-line no-unused-vars
    function updateModelValue(file) {
      // pass
    }
    function resetFile() {
      singleFile.value = null;
    }
    return {
      singleFile,
      updateModelValue,
      resetFile,
    };
  },
};
</script>
