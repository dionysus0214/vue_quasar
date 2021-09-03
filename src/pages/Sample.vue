<template>
  <div class="q-pa-md">
    <q-markup-table :separator="separator" flat bordered >
      <thead>
        <tr>
          <th class="text-left">사이트이름</th>
          <th class="text-left">AK몰</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">판매처주문번호</td>
          <td class="text-left">
            <div style="width: 300px">
              <s-select
                v-model="model"
                :options="options"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td class="text-left">SEQ번호</td>
          <td class="text-left">
            <div style="width: 300px">
              <s-select
                v-model="searchModel"
                :options="filterOptions"
                use-input
                input-debounce="0"
                @filter="filterFn"
                @input-value="setModel"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td class="text-left">판매처상품명</td>
          <td class="text-left">
            <div style="width: 300px">
              <s-select
                multiple
                v-model="searchAddModel"
                :options="filterOptions"
                use-input
                input-debounce="0"
                @filter="filterFn"
                @new-value="createValue"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>

  <div class="q-pa-md">
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-left">사이트이름</th>
          <th class="text-left">CJ몰</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">공급가</td>
          <td class="text-left">
            <div style="width: 300px">
              <s-input
                v-model="text"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td class="text-left">선후불구분</td>
          <td class="text-left">
            <div style="width: 300px">
              <s-input
                label="선불문자열"
                insideLabel
                v-model="text"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td class="text-left">선불처리금액</td>
          <td class="text-left">
            <div style="width: 300px">
              <s-input
                v-model="text"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import SInput from '../components/SInput.vue';
import SSelect from '../components/SSelect.vue';

const stringOptions = [
  'apple', 'banana', 'cherry', 'grape', 'melon', 'peach', 'strawberry',
];

export default {
  components: {
    SInput,
    SSelect,
  },
  setup() {
    const model = ref(null);
    const filterOptions = ref(stringOptions);

    return {
      separator: ref('cell'),
      text: ref(null),
      model: ref(null),
      searchModel: ref(null),
      searchAddModel: ref(null),
      options: [
        'A열', 'B열', 'C열', 'D열', 'E열', 'F열', 'G열', 'H열',
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

<style lang="scss">
@import '../css/quasar.variables.scss';

.q-table {
  thead {
    th:first-child {
      background: $grey-2;
    }
  }
  th {
    font-size: 14px;
  }
  tbody {
    td {
      font-size: 14px;
      &:before {
        background: transparent !important;
      }
    }
    td:first-child {
      width: 250px;
      background: $grey-2;
    }
  }
}
</style>
