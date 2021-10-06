<template>
  <div class="q-pa-md">
    <s-table :rows="rows" row-key="name">
      <template v-slot:판매처주문번호>
        <div style="width: 300px">
          <s-input v-model="text" />
        </div>
      </template>
      <template v-slot:협력사번호>
        <div style="width: 300px">
          <s-select v-model="model" :options="options" />
        </div>
      </template>
      <template v-slot:상세요구사항>
        <div class="inline" style="width: 300px">
          <s-select v-model="model" :options="options" />
        </div>
        <div class="grid" style="width: 300px">
          <s-select v-model="searchModel" :options="options" />
        </div>
      </template>
      <template v-slot:배송비선착불지정>
        <div class="row q-mb-sm">
          <div class="inline" style="width: 300px">
            <s-select v-model="model" :options="options" />
          </div>
          <div class="inline" style="width: 300px">
            <s-select v-model="model" :options="options" />
          </div>
        </div>
        <div class="grid" style="width: 300px">
          <s-select v-model="searchModel" :options="options" />
        </div>
      </template>
      <template v-slot:withToggle>
        <q-img src="~assets/icon_info_outline.svg" width="20px" height="20px">
          <s-tooltip>
            <div class="q-mb-xs text-center">
              반드시 [고객 결제일자] 또는 [주문일자]로 설정하시고,
            </div>
            <div class="q-mb-xs text-center">없는 경우 비워두세요.</div>
          </s-tooltip>
        </q-img>
      </template>
      <template v-slot:isRequired>
        <span style="color: red">＊</span>
      </template>
    </s-table>
  </div>
</template>

<script>
import { ref } from "vue";
import STable from "../components/STable.vue";
import SInput from "../components/SInput.vue";
import SSelect from "../components/SSelect.vue";
import STooltip from "../components/STooltip.vue";

const columns = [
  {
    name: "label",
    required: true,
    label: "사이트이름",
    align: "left",
    field: (row) => row.label,
    format: (val) => `${val}`,
  },
  {
    name: "value",
    label: "사방넷",
    align: "left",
    field: "content",
  },
];

const rows = [
  {
    label: "판매처주문번호",
    value: "",
    require: false,
  },
  {
    label: "협력사번호",
    value: "",
    require: true,
  },
  {
    label: "상세요구사항",
    value: "",
    require: false,
  },
  {
    label: "배송비선착불지정",
    value: "",
    require: true,
  },
  {
    label: "0원시상품판매가적용",
    value: "",
    require: false,
    option: true,
  },
];

export default {
  components: {
    STable,
    SInput,
    SSelect,
    STooltip,
  },
  setup() {
    return {
      columns,
      rows,
      text: ref(null),
      model: ref(null),
      searchModel: ref(null),
      options: ["A열", "B열", "C열", "D열", "E열", "F열", "G열", "H열"],
    };
  },
};
</script>

<style lang="sass">
.inline
  float: left
  margin-right: 4px
  .word
    color: red

.assignDeliveryCharge
  vertical-align: middle
  text-align: center

.infoText
  font-weight: 100
  font-size: 12px
  .example
    color: #00CD52
</style>
