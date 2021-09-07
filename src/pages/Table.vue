<template>
  <div class="q-pa-md">
    <s-table
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:상점코드>
        <div style="width: 300px">
          <s-input v-model="text" />
        </div>
      </template>
      <template v-slot:협력사번호>
        <div style="width: 300px">
          <s-select
            v-model="model"
            :options="options"
          />
        </div>
      </template>
      <template v-slot:판매처상품코드>
        <div class="grid" style="width: 300px">
          <s-input v-model="text" />
        </div>
        <div class="grid" style="width: 300px">
          <s-select
            v-model="searchModel"
            :options="filterOptions"
            use-input
            input-debounce="0"
            @filter="filterFn"
            @input-value="setModel"
          />
        </div>
      </template>
      <template v-slot:상세요구사항>
        <div class="grid" style="width: 300px">
          <s-select
            v-model="model"
            :options="options"
          />
        </div>
        <div class="grid" style="width: 300px">
          <s-select
            v-model="searchModel"
            :options="filterOptions"
            use-input
            input-debounce="0"
            @filter="filterFn"
            @input-value="setModel"
          />
        </div>
      </template>
    </s-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import STable from '../components/STable.vue';
import SInput from '../components/SInput.vue';
import SSelect from '../components/SSelect.vue';

const stringOptions = [
  'order_no', 'product_name', 'product_item_code', 'item_name', 'pay_method', 'pay_datetime',
];

const columns = [
  {
    name: 'name',
    required: true,
    label: '사이트이름',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
  },
  {
    name: 'content',
    label: '사방넷',
    align: 'left',
    field: 'content',
  },
];

const rows = [
  {
    name: '판매처주문번호',
    content: 'A열',
  },
  {
    name: '상점코드',
    content: 'D열',
  },
  {
    name: '협력사번호',
    content: 'E열',
  },
  {
    name: '판매처상품코드',
    content: 'B열',
  },
  {
    name: '상세요구사항',
    content: 'H열',
  },
];

export default {
  components: {
    STable,
    SInput,
    SSelect,
  },
  setup() {
    const model = ref(null);
    const filterOptions = ref(stringOptions);

    return {
      columns,
      rows,
      text: ref(null),
      model: ref(null),
      searchModel: ref(null),
      options: [
        'A열', 'B열', 'C열', 'D열', 'E열', 'F열', 'G열', 'H열',
      ],
      filterOptions,

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

<style>
.grid {
  float: left;
  margin-right: 4px;
}
</style>
