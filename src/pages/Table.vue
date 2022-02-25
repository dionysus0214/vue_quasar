<template>
  <div class="q-pa-md">
    <s-table
      :columns="columns"
      :rows="rows"
      row-key="barcode_no"
      useCustom
      resizable
      dynamicSlotName="RFID발급할수량"
    >
      <template v-slot:noData>
        <div class="full-width text-center">
          파일을 업로드하세요.
        </div>
      </template>
      <template v-slot:header>
        <tr>
          <th v-for="col in columns" :key="col.name">
            {{ col.label }}
          </th>
        </tr>
      </template>
      <template v-slot:body-cell-product_code="props">
        <q-td>
          <q-chip>{{ props.row.barcode_no }}</q-chip>
        </q-td>
      </template>
    </s-table>

    <br/>

    <s-table
      :columns="columns"
      :rows="rows"
      row-key="barcode_no"
      :useSelect="true"
      selection="multiple"
      v-model:selected="selected"
    >
    </s-table>

    <br/>

    <s-markup-table
      :separator="separator"
      header="top"
      class="q-ma-md">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.name">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in rows" :key="i">
          <td class="text-center">{{ r.barcode_no }}</td>
          <td class="text-center">{{ r.product_code }}</td>
          <td class="text-center">{{ r.supplier_name }}</td>
          <td class="text-left">{{ r.공급처상품명 }}</td>
          <td class="text-left">{{ r.상품명 }}</td>
          <td class="text-center">{{ r.바코드번호 }}</td>
          <td class="text-center">{{ r.발주수량 }}</td>
          <td class="text-center">{{ r.RFID발급할수량 }}</td>
        </tr>
      </tbody>
    </s-markup-table>

    <br/>

    <s-markup-table
      :separator="separator"
      header="left"
      class="q-ma-md">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.name">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in rows" :key="i">
          <td class="text-center">{{ r.barcode_no }}</td>
          <td class="text-center">{{ r.product_code }}</td>
          <td class="text-center">{{ r.supplier_name }}</td>
          <td class="text-left">{{ r.공급처상품명 }}</td>
          <td class="text-left">{{ r.상품명 }}</td>
          <td class="text-center">{{ r.바코드번호 }}</td>
          <td class="text-center">{{ r.발주수량 }}</td>
          <td class="text-center">{{ r.RFID발급할수량 }}</td>
        </tr>
      </tbody>
    </s-markup-table>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import STable from "../components/STable.vue";
import SMarkupTable from "../components/SMarkupTable.vue";

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
    name: '공급처상품명',
    label: '공급처상품명',
    field: '공급처상품명',
    align: 'center',
    format: (v) => (!v ? '-' : v),

  },
  {
    name: '상품명', label: '상품명', field: '상품명', align: 'center', format: (v) => (!v ? '-' : v),
  },
  {
    name: '옵션명', label: '옵션명', field: '옵션명', align: 'center', format: (v) => (!v ? '-' : v),
  },
  {
    name: '발주수량', label: '발주수량', field: '발주수량', align: 'center',
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
    barcode_no: 'M87017K2C', product_code: 'M87017K2C', supplier_name: 'UPTOWNHOLIC', 공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)', 상품명: 'UPTOWNHOLIC Before She Broke Your', 옵션명: '베이지, 235', 발주수량: 2000, RFID발급할수량: 2000,
  },
  {
    barcode_no: 'M87017K1C', product_code: 'M87017K1C', supplier_name: 'UPTOWNHOLIC', 공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)', 상품명: 'UPTOWNHOLIC Before She Broke Your', 옵션명: '베이지, 230', 발주수량: 100, RFID발급할수량: 100,
  },
  {
    barcode_no: 'M86873K6C', product_code: 'M86873K6C', supplier_name: 'UPTOWNHOLIC', 공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)', 상품명: 'UPTOWNHOLIC Before She Broke Your', 옵션명: '브라운,M', 발주수량: 600, RFID발급할수량: 600,
  },
  {
    barcode_no: 'M86873K5C', product_code: 'M86873K5C', supplier_name: 'UPTOWNHOLIC', 공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)', 상품명: 'UPTOWNHOLIC Before She Broke Your', 옵션명: '브라운,S', 발주수량: 200, RFID발급할수량: 200,
  },
  {
    barcode_no: '28443420004', product_code: '28443420004', supplier_name: 'ZOOC(상설)', 공급처상품명: 'Z203MSD025', 상품명: '도트 프린트 스커트_Z203MSD025', 옵션명: 'DARK NAVY(DN1) ／ 66', 발주수량: 50, RFID발급할수량: 50,
  },
  {
    barcode_no: '28443420003', product_code: '28443420003', supplier_name: 'ZOOC(상설)', 공급처상품명: 'Z203MSD025', 상품명: '도트 프린트 스커트_Z203MSD025', 옵션명: 'DARK NAVY(DN1) ／ 55', 발주수량: 50, RFID발급할수량: 50,
  },
  {
    barcode_no: '28442920004', product_code: '28442920004', supplier_name: 'ZOOC(상설)', 공급처상품명: 'Z203MSD025', 상품명: '도트 프린트 스커트_Z203MSD025', 옵션명: 'BLACK(BK1) ／ 66', 발주수량: 50, RFID발급할수량: 50,
  },
];

export default {
  components: {
    STable,
    SMarkupTable,
  },
  setup() {
    const selected = ref([]);

    watch(selected,
      (newVal) => {
        console.log(newVal);
      });

    return {
      columns,
      rows,
      selected,
      separator: ref('cell'),
    };
  },
};
</script>
