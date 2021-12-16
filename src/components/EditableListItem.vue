<template>
  <q-item class="editable-list-item q-pa-none">
    <q-item-section>
      <q-input v-model="model" />
    </q-item-section>
  </q-item>
</template>

<script>
import {
  ref, onMounted,
} from 'vue';
// import { useQuasar } from 'quasar';

/* eslint-disable */
export default {
  name: 'EditableListItem',
  props: {
    modelValue: {
      type: String,
      default: null,
      required: true,
    }
  },
  setup(props) {
    const model = ref(null);

    onMounted(() => {
      model.value = props.modelValue;
      console.log(model.value);
    });

    return {
      model,
    };
  },
};
</script>
