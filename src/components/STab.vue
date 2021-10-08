<template>
  <q-tab>
    {{ label }}
  </q-tab>
  <div class="space"></div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="sass">
@import "../css/quasar.variables.scss"

.space
  width: 4px
  height: 48px
  border-bottom: 1px solid $grey-8
</style>
