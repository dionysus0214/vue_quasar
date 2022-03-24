<template>
  <q-breadcrumbs gutter="sm">
    <q-breadcrumbs-el v-for="(label, i) in labels" :key="i">
      {{ label }}
    </q-breadcrumbs-el>
  </q-breadcrumbs>
</template>

<script>
export default {
  props: {
    labels: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="sass">
.q-breadcrumbs--last
  font-weight: bold!important
</style>
