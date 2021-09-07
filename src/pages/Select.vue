<template>
  <div class="q-pa-md" style="max-width: 297px">
    <div class="q-gutter-md">
      <s-select
        v-model="model"
        :options="options"
        hint="select"
      />
      <s-select
        v-model="searchModel"
        :options="filterOptions"
        use-input
        input-debounce="0"
        @filter="filterFn"
        @input-value="setModel"
        hint="select+search"
      />
      <s-select
        multiple
        v-model="searchAddModel"
        :options="filterOptions"
        use-input
        input-debounce="0"
        @filter="filterFn"
        @new-value="createValue"
        hint="select+search+add(multi)"
      />
      <s-select
        group
        v-model="groupModel"
        :options="groupOptions"
        hint="group"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SSelect from '../components/SSelect.vue';

const stringOptions = [
  'order_no', 'product_name', 'product_item_code', 'item_name', 'pay_method', 'pay_datetime',
];

export default {
  components: {
    SSelect,
  },
  setup() {
    const model = ref(null);
    const filterOptions = ref(stringOptions);

    return {
      text: ref(null),
      model: ref(null),
      searchModel: ref(null),
      searchAddModel: ref(null),
      groupModel: ref(null),
      options: [
        'A열', 'B열', 'C열', 'D열', 'E열', 'F열', 'G열', 'H열',
      ],
      groupOptions: [
        {
          group: 'Group 1',
          disable: true,
        },
        {
          label: 'Google',
          value: 'Google',
        },
        {
          label: 'Facebook',
          value: 'Facebook',
        },
        {
          label: 'Twitter',
          value: 'Twitter',
        },
        {
          group: 'Group 2',
          disable: true,
        },
        {
          label: 'Apple',
          value: 'Apple',
        },
        {
          label: 'Oracle',
          value: 'Oracle',
        },
      ],
      filterOptions,

      createValue(val, done) {
        if (val.length > 0) {
          if (!stringOptions.includes(val)) {
            stringOptions.push(val);
          }
          done(val, 'toggle');
        }
      },

      filterFn(val, update) {
        update(() => {
          if (val === '') {
            filterOptions.value = stringOptions;
          } else {
            const needle = val.toLowerCase();
            filterOptions.value = stringOptions.filter(
              v => v.toLowerCase().indexOf(needle) > -1,
            );
          }
        });
      },

      setModel(val) {
        model.value = val;
      },

    };
  },
};
</script>
