<template>
  <div class="q-pa-md" style="max-width: 297px">
    <div class="q-gutter-md">
      <s-select
        v-model="model"
        :options="options"
        hint="select"
        disable
      />
      <s-select
        v-model="searchModel"
        :options="filterOptions"
        use-input
        input-debounce="0"
        @filter="filterFn"
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
      <s-select
        label="카테고리"
        v-model="model"
        :options="options"
        hint="label"
      />
      <s-select
        checkbox
        multiple
        v-model="emptyValue"
        hint="empty option"
      />
      <s-select-checkbox
        checkbox
        v-model="checkboxModel"
        :options="checkboxOptions"
        hint="include Checkbox"
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
    const filterOptions = ref(stringOptions);

    return {
      text: ref(null),
      model: ref('A열'),
      searchModel: ref(null),
      searchAddModel: ref(null),
      groupModel: ref(null),
      checkboxModel: ref(null),
      emptyValue: ref(null),
      options: [
        'A열', 'B열', 'C열', 'D열', 'E열', 'F열', 'G열', 'H열',
      ],
      groupOptions: [
        {
          group: '그룹1',
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
          disable: true,
        },
        {
          label: 'Oracle',
          value: 'Oracle',
        },
      ],
      checkboxOptions: [
        {
          label: 'order_no',
          value: 'order_no',
          checked: true,
        },
        {
          label: 'product_name',
          value: 'product_name',
          checked: false,
        },
        {
          label: 'product_code',
          value: 'product_code',
          checked: false,
        },
        {
          label: 'price',
          value: 'price',
          checked: false,
          disable: true,
        },
      ],
      filterOptions,

      createValue(val, done) {
        if (val.length > 0) {
          if (!stringOptions.includes(val)) {
            stringOptions.push(val);
          }
          done(val);
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
    };
  },
};
</script>
