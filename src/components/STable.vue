<template>
  <q-table :separator="separator" flat bordered hide-bottom>
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="label" :props="props">
          {{ props.row.label }}
        </q-td>
        <q-td key="value" :props="props">
          <slot :name="props.row.label"></slot>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      separator: ref("cell"),
    };
  },
};
</script>

<style lang="scss">
@import "../css/quasar.variables.scss";

.q-table {
  thead {
    th:first-child {
      background: $grey-2;
    }
  }
  th {
    font-size: 14px;
    font-weight: bold;
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
