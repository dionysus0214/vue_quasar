<template>
  <q-table :separator="separator" flat bordered hide-header hide-bottom>
    <template v-slot:body="props">
      <tr :props="props">
        <td key="label" :props="props">
          {{ props.row.label }}
          <span v-if="props.row.require">
            <slot name="isRequired"></slot>
          </span>
          <span v-if="props.row.option">
            <slot name="withToggle"></slot>
          </span>
        </td>
        <td key="value" :props="props">
          <slot :name="props.row.label"></slot>
        </td>
      </tr>
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

<style lang="sass" scoped>
@import '../css/quasar.variables.scss'

.q-table
  tbody
    td
      font-size: 14px
      &:before
        background: transparent !important
    td:first-child
      background: $grey-11
      font-weight: bold
</style>
