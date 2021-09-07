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
    <template v-if="group" v-slot:option="scope">
      <q-item v-if="scope.opt.group"
        v-bind="scope.itemProps"
        v-on="scope.itemEvents"
      >
        <q-item-section>
          <q-item-label header>
            {{ scope.opt.group }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="!scope.opt.group"
        v-bind="scope.itemProps"
        v-on="scope.itemEvents"
      >
        <q-item-section>
          <q-item-label v-html="scope.opt.label" />
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
export default {
  props: {
    group: Boolean,
  },
};
</script>

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
