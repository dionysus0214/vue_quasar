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
            // javascript의 비동기 처리 특성때문에 DOM을 탐색하거나 수정하는 로직이 있을 경우, DOM이 갱신되기 전에 DOM을 탐색해서 undefined나 null 에러가 발생할 수 있음
            // nextTick()은 DOM에 모든 변경사항이 완전히 반영된 후 사용자 정의 로직을 실행할 수 있도록 함
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
