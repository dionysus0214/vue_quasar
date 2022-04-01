<template>
  <div>
    <s-markup-table
      :separator="separator"
      header="top"
      class="q-ma-md"
      :noHover="true"
    >
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.name">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in rows" :key="i">
          <td class="text-center">{{ r.바코드번호 }}</td>
          <td class="text-center">{{ r.상품코드 }}</td>
          <td class="text-center">{{ r.공급처명 }}</td>
          <td class="text-left">{{ r.공급처상품명 }}</td>
          <td class="text-left">{{ r.상품명 }}</td>
          <td class="text-center">{{ r.바코드번호 }}</td>
          <td class="text-center">{{ r.발주수량 }}</td>
          <td class="text-center">{{ r.RFID발급할수량 }}</td>
        </tr>
      </tbody>
    </s-markup-table>

    <s-markup-table separator="horizontal" header="left" class="q-ma-md">
      <tbody>
        <tr v-for="col in leftTable" :key="col.name">
          <th>
            {{ col.label }}
          </th>
          <td v-for="row, idx in col.row" :key="idx">
            {{ row }}
          </td>
        </tr>
      </tbody>
    </s-markup-table>
    <s-markup-table separator="horizontal" header="left" class="q-ma-md">
      <tbody>
        <tr v-for="col in leftTable" :key="col.name">
          <th>
            {{ col.label }}
          </th>
          <td v-for="row, idx in col.row" :key="idx">
            {{ row }}
          </td>
          <th>
            {{ col.label }}
          </th>
          <td v-for="row, idx in col.row" :key="idx">
            {{ row }}
          </td>
        </tr>
      </tbody>
    </s-markup-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import SMarkupTable from '../components/SMarkupTable.vue';

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
    바코드번호: 'M87017K2C',
    상품코드: 'M87017K2C',
    공급처명: 'UPTOWNHOLIC',
    공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 235',
    발주수량: 2000,
    RFID발급할수량: 2000,
  },
  {
    바코드번호: 'M87017K1C',
    상품코드: 'M87017K1C',
    공급처명: 'UPTOWNHOLIC',
    공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '베이지, 230',
    발주수량: 100,
    RFID발급할수량: 100,
  },
  {
    바코드번호: 'M86873K6C',
    상품코드: 'M86873K6C',
    공급처명: 'UPTOWNHOLIC',
    공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '브라운,M',
    발주수량: 600,
    RFID발급할수량: 600,
  },
  {
    바코드번호: 'M86873K5C',
    상품코드: 'M86873K5C',
    공급처명: 'UPTOWNHOLIC',
    공급처상품명: '[소가죽] 베이 스웨이드 롱 부츠 (*2color)',
    상품명: 'UPTOWNHOLIC Before She Broke Your',
    옵션명: '브라운,S',
    발주수량: 200,
    RFID발급할수량: 200,
  },
  {
    바코드번호: '28443420004',
    상품코드: '28443420004',
    공급처명: 'ZOOC(상설)',
    공급처상품명: 'Z203MSD025',
    상품명: '도트 프린트 스커트_Z203MSD025',
    옵션명: 'DARK NAVY(DN1) ／ 66',
    발주수량: 50,
    RFID발급할수량: 50,
  },
  {
    바코드번호: '28443420003',
    상품코드: '28443420003',
    공급처명: 'ZOOC(상설)',
    공급처상품명: 'Z203MSD025',
    상품명: '도트 프린트 스커트_Z203MSD025',
    옵션명: 'DARK NAVY(DN1) ／ 55',
    발주수량: 50,
    RFID발급할수량: 50,
  },
  {
    바코드번호: '28442920004',
    상품코드: '28442920004',
    공급처명: 'ZOOC(상설)',
    공급처상품명: 'Z203MSD025',
    상품명: '도트 프린트 스커트_Z203MSD025',
    옵션명: 'BLACK(BK1) ／ 66',
    발주수량: 50,
    RFID발급할수량: 50,
  },
];

const leftTable = [
  {
    name: '바코드번호',
    label: '바코드번호',
    field: '바코드번호',
    align: 'center',
    row: [
      'M87017K2C',
      'M87017K1C',
      'M86873K6C',
      'M86873K5C',
      '28443420004',
      '28443420003',
      '28442920004',
    ],
  },
  {
    name: '상품코드',
    label: '상품코드',
    field: '상품코드',
    align: 'center',
    row: [
      'M87017K2C',
      'M87017K1C',
      'M86873K6C',
      'M86873K5C',
      '28443420004',
      '28443420003',
      '28442920004',
    ],
  },
];

export default {
  components: {
    SMarkupTable,
  },
  setup() {
    return {
      columns,
      rows,
      leftTable,

      separator: ref('cell'),
    };
  },
};
</script>
