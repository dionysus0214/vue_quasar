<template>
  <q-input
    outlined
    dense
    mask="date"
    :rules="['date']"
    placeholder="yyyy/mm/dd"
    :class="{
      'short': style='short',
      'long': style='long',
    }"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            color="positive"
            v-model="innerValue"
            minimal
            no-unset
            @update:model-value="handleUpdate"
          >
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  data() {
    return {
      innerValue: null,
    };
  },
  props: {
    short: {
      type: String,
      dafault: '',
    },
    long: {
      type: String,
      dafault: '',
    },
  },
  methods: {
    handleUpdate() {
      this.$emit('update:model-value', this.innerValue);
      this.$refs.qDateProxy.hide();
    },
  },
};
</script>

<style lang="scss">
.short {
  width: 146px;
  .q-field__prepend {
    margin-right: 6px;
  }
}

.long {
  width: 200px;
  .q-field__prepend {
    margin-right: 24px;
  }
}
</style>
