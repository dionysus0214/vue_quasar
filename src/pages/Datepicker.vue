<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <s-datepicker
        style="width: 146px"
      />
      <s-datepicker
        style="width: 200px"
      />
    </div>
  </div>
</template>

<script>
import SDatepicker from '../components/Datepicker.vue'

export default {
  components: { SDatepicker }
}
</script>
-
<style lang="scss">
// .q-field--dense .q-field__before, .q-field--dense .q-field__prepend {
//   padding-right: 40px;
// }
</style>
