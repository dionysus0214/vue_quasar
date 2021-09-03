<template>
  <q-select
    outlined
    dense
    options-dense
    dropdown-icon="expand_more"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style lang="scss">
// @import '../css/quasar.variables.scss';

// body.desktop {
//   .q-focusable:focus, .q-manual-focusable--focused, .q-hoverable:hover {
//     > .q-focus-helper {
//       background: $positive;
//       color: white;
//       opacity: 1;
//     }
//   }
//   .q-focusable:focus, .q-manual-focusable--focused {
//     > .q-focus-helper {
//       opacity: 1;
//     }
//   }
// }
</style>
