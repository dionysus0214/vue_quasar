<template>
  <div class="q-pa-md">
    <s-table
      :rows="rows"
      row-key="name"
    >
      <template v-slot:판매처주문번호>
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
      <template v-slot:상세요구사항>
        <div class="inline" style="width: 300px">
          <s-select
            v-model="model"
            :options="options"
          />
        </div>
        <div class="inline" style="width: 300px">
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
      <template v-slot:배송비선착불지정>
        <div class="row q-mb-sm">
          <div class="inline" style="width: 300px">
            <s-select
              v-model="model"
              :options="options"
            />
          </div>
          <div class="inline" style="width: 300px">
            <s-select
              v-model="model"
              :options="options"
            />
          </div>
        </div>
        <q-separator></q-separator>
        <div class="text-center q-py-sm" style="font-size: 12px">
          <q-img
            src="~assets/icon_info_outline.svg"
            width="20px"
            height="20px"
          />
          <span class="infoText">
            여러 개 조건 입력 시, 콤마 기준으로 입력.
            <span class="infoText example">
              예) 무료, 선불
            </span>
          </span>
        </div>
        <q-separator></q-separator>
        <div>
          <div class="row q-pa-sm bg-grey-1">
            <div style="font-weight: bold">선불 조건 설정</div>
            <q-space />
            <s-toggle />
          </div>
          <div class="row q-col-gutter-x-md q-my-sm">
            <s-input disable placeholder="무료배송" />
            <div class="q-pt-xs">문구 포함시</div>
          </div>
          <div class="row q-pa-sm bg-grey-1">
            <div style="font-weight: bold">착불 조건 설정</div>
            <q-space />
            <s-toggle />
          </div>
          <div class="row q-col-gutter-x-md q-mt-sm">
            <s-input disable placeholder="착불" />
            <div class="q-pt-xs">문구 포함시</div>
          </div>
        </div>
      </template>
      <template v-slot:0원시상품판매가적용>
        <div class="inline">
          <s-radio v-model="useful" val="no" label="사용 안 함" />
        </div>
        <div class="inline">
          <s-radio v-model="useful" val="yes" label="사용함" />
        </div>
      </template>
      <template v-slot:withToggle>
        <q-img
          src="~assets/icon_info_outline.svg"
          width="20px"
          height="20px"
        >
          <s-tooltip>
            <div class="q-mb-xs text-center">반드시 [고객 결제일자] 또는 [주문일자]로 설정하시고,</div>
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
import { ref } from 'vue';
import STable from '../components/STable.vue';
import SInput from '../components/SInput.vue';
import SSelect from '../components/SSelect.vue';
import STooltip from '../components/STooltip.vue';

const stringOptions = [
  'order_no', 'product_name', 'product_item_code', 'item_name', 'pay_method', 'pay_datetime',
];

const rows = [
  {
    label: '판매처주문번호',
    value: '',
    require: false,
  },
  {
    label: '협력사번호',
    value: '',
    require: true,
  },
  {
    label: '상세요구사항',
    value: '',
    require: false,
  },
  {
    label: '배송비선착불지정',
    value: '',
    require: true,
  },
  {
    label: '0원시상품판매가적용',
    value: '',
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
    const model = ref(null);
    const filterOptions = ref(stringOptions);

    return {
      rows,
      text: ref(null),
      model: ref(null),
      searchModel: ref(null),
      useful: ref('no'),
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
