<template>
  <q-select
    v-model="model"
    @update:modelValue="$emit('update:modelValue', model)"
    @new-value="handleNewItem"
    hide-dropdown-icon
    :use-input="!editable"
    multiple
    outlined>
    <template v-slot:selected-item="scope">
      <select v-if="Object.keys(OPERATORS).includes(model[scope.index])" @click.stop>
        <option v-for="( label, option ) in OPERATORS" :value="option" :key="option" :selected="model[scope.index] === option">{{label}}</option>
      </select>
      <editable-chip
        v-else
        v-model="model[scope.index]"
        @editable="editable = true"
        @remove="scope.removeAtIndex(scope.index)"></editable-chip>
      <select v-if="scope.index === (model.length - 1)" disabled></select>
    </template>
  </q-select>
</template>

<script>
import { ref, getCurrentInstance } from 'vue';
import ModelBindable from '../mixins/ModelBindable';
import EditableChip from './EditableChip.vue';

const OPERATORS = {
  '|': '대체하기',
  '@': '이어붙이기',
};

export default {
  name: 'EditableChipInput',
  mixins: [ModelBindable],
  components: { EditableChip },
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const vm = getCurrentInstance();
    function handleNewItem(newItem, doneFn) {
      if (vm.ctx.model.length) {
        vm.ctx.model.push('|');
      }
      doneFn(newItem, 'add');
      console.log(vm.ctx.model);
    }
    return {
      OPERATORS,
      handleNewItem,
      editable: ref(false),
    };
  },
};
</script>
