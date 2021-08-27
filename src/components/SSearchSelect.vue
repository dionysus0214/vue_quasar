<template>
  <q-select
    outlined
    dense
    options-dense
    dropdown-icon="expand_more"
    v-model="model"
    use-input
    hide-selected
    fill-input
    input-debounce="0"
    :options="options"
    @filter="filterFn"
    @input-value="setModel"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
import { ref } from 'vue';

const stringOptions = [
  'asdf', 'asasagefd', 'fegdfasg', 'egdfegesv', 'zdfsegedd',
];

export default {
  setup() {
    const model = ref(null);
    const options = ref(stringOptions);

    return {
      model,
      options,

      filterFn(val, update) {
        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1);
        });
      },

      setModel(val) {
        model.value = val;
      },
    };
  },
};
</script>
