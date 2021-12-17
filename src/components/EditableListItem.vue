<template>
  <q-item class="editable-list-item q-pa-none">
    <q-item-section>
      <q-input ref="inputField" v-model="model" outlined :readonly="!editable" @click="$emit('clicked')" @blur="handleBlur" @change="handleFocusOut">
        <template v-slot:append v-if="!$props.default && $props.focused">
          <q-btn icon="edit" dense flat color="blue" @click="handleEditBtnClick" />
          <q-btn icon="delete" dense flat color="red" @click="$emit('delete')" />
        </template>
      </q-input>
    </q-item-section>
  </q-item>
</template>

<script>
import {
  ref, onMounted, watch, nextTick,
} from 'vue';
import { useQuasar } from 'quasar';

export default {
  name: 'EditableListItem',
  props: {
    modelValue: {
      type: String,
      default: null,
      required: true,
    },
    default: {
      type: Boolean,
      default: false,
    },
    focused: {
      type: Boolean,
      default: false,
    },
    new: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const model = ref(null);
    const editable = ref(false);
    const inputField = ref(null);

    onMounted(() => {
      model.value = props.modelValue;
      if (props.new) {
        editable.value = true;
        inputField.value.focus();
      }
    });

    watch(() => props.modelValue, (newValue) => {
      model.value = newValue;
    });

    function handleEditBtnClick() {
      if (editable.value) {
        editable.value = false;
        inputField.value.blur();
        if (props.new) {
          emit('create', model.value);
        } else {
          emit('update', model.value);
        }
        emit('update:modelValue', model.value);
      } else {
        editable.value = true;
        inputField.value.select();
      }
    }

    const $q = useQuasar();
    function handleFocusOut() {
      setTimeout(() => {
        if (editable.value) {
          $q.dialog({
            title: '양식 작성 취소',
            message: '계속 작성하시겠습니까?',
            cancel: true,
            persistent: true,
          }).onOk(() => {
            nextTick(() => {
              inputField.value.select();
            });
          }).onCancel(() => {
            editable.value = false;
            model.value = props.modelValue;
          });
        }
      }, 200);
    }

    function handleBlur() {
      console.log('handle blur');
      if (props.modelValue !== model.value) {
        handleFocusOut();
      }
    }

    return {
      model,
      editable,
      inputField,
      handleEditBtnClick,
      handleBlur,
      handleFocusOut,
    };
  },
};
</script>
