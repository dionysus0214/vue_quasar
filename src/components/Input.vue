<template>
  <q-input
    outlined
    placeholder="Type Something"
    dense
    class="s-input"
  >
    <template v-if="label !== undefined && !insideLabel" v-slot:before>
      <div class="input-label">{{label}}</div>
    </template>
    <template v-if="label !== undefined && insideLabel" v-slot:prepend>
      <div class="input-addon">{{label}}</div>
    </template>
  </q-input>
</template>

<script>
export default {
  props: {
    label: String,
    insideLabel: Boolean
  }
}
</script>

<style lang="scss">
.s-input {
  .q-field__prepend {
    border-right: 1px solid #cccccc;
    padding-right: 10px;
    margin-right: 10px;
  }
  .input-addon {
    font-size: 14px;
  }
  .input-label {
    font-size: 14px;
    padding-right: 4px;
  }
}
</style>
