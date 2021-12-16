<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 297px">
      <s-file-picker
        v-model="singleFile"
        placeholder="파일을 업로드하세요."
        @update:modelValue="updateModelValue"
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
    const singleFile = ref(null);
    function updateModelValue(file) {
      console.log('updateModelValue', file);
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
