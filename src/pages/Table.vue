<template>
  <div class="q-pa-md">
    <s-table
      :columns="columns"
      :rows="rows"
      row-key="바코드번호"
      useCustom
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
    </s-table>

    <br/>

    <s-table
      :columns="columns"
      :rows="rows"
      row-key="바코드번호"
      :useSelect="true"
      selection="multiple"
      v-model:selected="selected"
    >
    </s-table>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import STable from "../components/STable.vue";
import { infoOutlineIcon } from '../assets/icons.js';

const columns = [
  {
    name: '바코드번호',
    label: '바코드번호',
    field: '바코드번호',
    align: 'center',
  },
  {
    name: '상품코드',
    label: '상품코드',
    field: '상품코드',
    align: 'center',
    format: (v) => (!v ? '-' : v),
  },
  {
    name: '공급처명',
    label: '공급처명',
    field: '공급처명',
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
    바코드번호: 'M87017K2C', 상품코드: 'M87017K2C', 공급처명: 'UPTOWNHOLIC', 공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)', 상품명: 'UPTOWNHOLIC Before She Broke Your', 옵션명: '베이지, 235', 발주수량: 2000, RFID발급할수량: 2000,
  },
  {
    바코드번호: 'M87017K1C', 상품코드: 'M87017K1C', 공급처명: 'UPTOWNHOLIC', 공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)', 상품명: 'UPTOWNHOLIC Before She Broke Your', 옵션명: '베이지, 230', 발주수량: 100, RFID발급할수량: 100,
  },
  {
    바코드번호: 'M86873K6C', 상품코드: 'M86873K6C', 공급처명: 'UPTOWNHOLIC', 공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)', 상품명: 'UPTOWNHOLIC Before She Broke Your', 옵션명: '브라운,M', 발주수량: 600, RFID발급할수량: 600,
  },
  {
    바코드번호: 'M86873K5C', 상품코드: 'M86873K5C', 공급처명: 'UPTOWNHOLIC', 공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)', 상품명: 'UPTOWNHOLIC Before She Broke Your', 옵션명: '브라운,S', 발주수량: 200, RFID발급할수량: 200,
  },
  {
    바코드번호: '28443420004', 상품코드: '28443420004', 공급처명: 'ZOOC(상설)', 공급처상품명: 'Z203MSD025', 상품명: '도트 프린트 스커트_Z203MSD025', 옵션명: 'DARK NAVY(DN1) ／ 66', 발주수량: 50, RFID발급할수량: 50,
  },
  {
    바코드번호: '28443420003', 상품코드: '28443420003', 공급처명: 'ZOOC(상설)', 공급처상품명: 'Z203MSD025', 상품명: '도트 프린트 스커트_Z203MSD025', 옵션명: 'DARK NAVY(DN1) ／ 55', 발주수량: 50, RFID발급할수량: 50,
  },
  {
    바코드번호: '28442920004', 상품코드: '28442920004', 공급처명: 'ZOOC(상설)', 공급처상품명: 'Z203MSD025', 상품명: '도트 프린트 스커트_Z203MSD025', 옵션명: 'BLACK(BK1) ／ 66', 발주수량: 50, RFID발급할수량: 50,
  },
];

export default {
  components: {
    STable,
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
    };
  },
  data() {
    return {
      infoOutlineIcon,
    };
  },
};
</script>
