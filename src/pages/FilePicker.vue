<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 297px">
      <s-file-picker
        placeholder="파일을 업로드하세요."
        @update:modelValue="updateModelValue"
        ref="sFilePickerRef"
      />
      <s-button label="되랏" color="indigo-6" @click="resetFile" />
    </div>
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
    const sFilePickerRef = ref(null);
    function updateModelValue() {
      console.log('updateModelValue');
    }
    function resetFile() {
      sFilePickerRef.value.file = null;
    }
    return {
      sFilePickerRef,
      updateModelValue,
      resetFile,
    };
  },
};
</script>
