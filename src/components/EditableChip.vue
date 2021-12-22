<template>
  <input
    v-show="editable"
    ref="inputField"
    v-model="model"
    @click.stop
    @keyup="handleKeyUp"
    @change="$emit('update:modelValue', model)"
    style="border: none;"
  />
  <q-chip
    v-show="!editable"
    removable
    clickable
    @click="toggleEditMode"
    @remove="$emit('remove')"
  >
    <span>{{ model }}</span>
  </q-chip>
</template>

<script>
import { ref } from 'vue';
import ModelBindable from '../mixins/ModelBindable';

export default {
  name: 'EditableChip',
  mixins: [ModelBindable],
  emits: ['editable', 'remove'],
  setup(props, { emit }) {
    const inputField = ref(null);
    const editable = ref(false);
    function toggleEditMode() {
      if (editable.value) {
        // pass
      } else {
        emit('editable');
        setTimeout(() => {
          inputField.value.focus();
        }, 200);
      }
      editable.value = !editable.value;
    }

    function handleKeyUp(evt) {
      console.log(evt);
      console.log(inputField.value.value);
      const container = document.createElement('span');
      container.innerText = inputField.value.value;
      container.style = 'position:absolute;top:0;lef:0;color:transparant;';
      document.body.appendChild(container);
      inputField.value.style = `width:${container.getBoundingClientRect().width + 12}px`;
      document.body.removeChild(container);
    }

    return {
      editable,
      inputField,
      toggleEditMode,
      handleKeyUp,

    };
  },
};
</script>
