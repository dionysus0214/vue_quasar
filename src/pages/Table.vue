<template>
  <div class="q-pa-md">
    <s-table
      :columns="columns"
      :rows="rows"
      row-key="barcode_no"
      :useSelect="true"
      selection="multiple"
      v-model:selected="selected"
      v-model:pagination="paginationObj"
      resizable
      :loading="loading"
    >
      <template v-slot:noData>
        <div class="full-width text-center">파일을 업로드하세요.</div>
      </template>
      <template v-slot:body-cell-product_code="props">
        <q-td>
          <q-chip>{{ props.row.barcode_no }}</q-chip>
        </q-td>
      </template>
      <template v-slot:body-cell-상품명="props">
        <q-td style="max-width: 200px">
          {{ props.value }}
        </q-td>
      </template>
    </s-table>
    <s-pagination
      v-if="rows.length"
      v-model="paginationObj.page"
      :lastPage="paginationObj.lastPage"
      @update:modelValue="updateModelValue"
    />
    <br />
  </div>
</template>

<script>
import { ref } from 'vue';
import STable from "../components/STable.vue";
import SPagination from "../components/SPagination.vue";

const columns = [
  {
    name: 'barcode_no',
    label: '바코드번호',
    field: (row) => `${row.barcode_no}-aa`,
    align: 'center',
  },
  {
    name: 'product_code',
    label: '상품코드',
    field: 'product_code',
    align: 'center',
    format: (v) => (!v ? '-' : v),
  },
  {
    name: 'supplier_name',
    label: '공급처명',
    field: 'supplier_name',
    align: 'center',
    format: (v) => (!v ? '-' : v),
  },
  {
    name: '상품명',
    label: '상품명',
    field: '상품명',
    align: 'center',
    format: (v) => (!v ? '-' : v),
  },
  {
    name: '옵션명',
    label: '옵션명',
    field: '옵션명',
    align: 'center',
    format: (v) => (!v ? '-' : v),
  },
  {
    name: '발주수량',
    label: '발주수량',
    field: '발주수량',
    align: 'center',
  },
  {
    name: 'RFID발급할수량',
    label: 'RFID 발급할 수량',
    field: 'RFID발급할수량',
    align: 'center',
  },
];

const rows = [
  {
    barcode_no: 'M87017K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Yourzzzzzzzzzzzzzz',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M87017K1C',
    product_code: 'M87017K1C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 230',
    발주수량: 100,
    RFID발급할수량: 100,
  },
  {
    barcode_no: 'M86873K6C',
    product_code: 'M86873K6C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '브라운,M',
    발주수량: 600,
    RFID발급할수량: 600,
  },
  {
    barcode_no: 'M86873K5C',
    product_code: 'M86873K5C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '브라운,S',
    발주수량: 200,
    RFID발급할수량: 200,
  },
  {
    barcode_no: '28443420004',
    product_code: '28443420004',
    supplier_name: 'ZOOC(상설)',
    상품명: '도트 프린트 스커트_Z203MSD025',
    옵션명: 'DARK NAVY(DN1) ／ 66',
    발주수량: 50,
    RFID발급할수량: 50,
  },
  {
    barcode_no: '28443420003',
    product_code: '28443420003',
    supplier_name: 'ZOOC(상설)',
    상품명: '도트 프린트 스커트_Z203MSD025',
    옵션명: 'DARK NAVY(DN1) ／ 55',
    발주수량: 50,
    RFID발급할수량: 50,
  },
  {
    barcode_no: '28442920004',
    product_code: '28442920004',
    supplier_name: 'ZOOC(상설)',
    상품명: '도트 프린트 스커트_Z203MSD025',
    옵션명: 'BLACK(BK1) ／ 66',
    발주수량: 50,
    RFID발급할수량: 50,
  },
  {
    barcode_no: 'M87017K2Cwe',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M8701werf7K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M8701dfg7K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M8701wertgh7K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M8703dfg417K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M8701df23g7K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M870we1437K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M870123r67K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M8706717K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M878462017K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M87023417K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M87017K2C',
    product_code: 'M87017K2C',
    supplier_name: 'UPTOWNHOLIC',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
];

export default {
  components: {
    STable,
    SPagination,
  },
  setup() {
    const selected = ref([]);
    const paginationObj = ref({
      page: 1,
      rowsPerPage: 50,
      lastPage: Math.ceil(rows.length / 5),
    });

    function updateModelValue(current) {
      paginationObj.value.currentPage = current;
    }
    const loading = ref(false);
    return {
      columns,
      rows,
      loading,

      selected,
      paginationObj,
      updateModelValue,
    };
  },
};
</script>
