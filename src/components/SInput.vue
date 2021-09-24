<template>
  <q-input
    class="s-input"
    :type="inputType"
    outlined
    placeholder="Type Something"
    dense
  >
    <template v-if="label !== undefined && !insideLabel" v-slot:before>
      <div class="input-label">{{ label }}</div>
    </template>
    <template v-if="label !== undefined && insideLabel" v-slot:prepend>
      <div class="input-addon">{{ label }}</div>
    </template>
    <template v-if="password" v-slot:append>
      <q-icon
        size="16px"
        :name="isVisible ? 'visibility' : 'visibility_off'"
        @click="isVisible = !isVisible"
      />
    </template>
  </q-input>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    label: String,
    insideLabel: Boolean,
    password: Boolean,
    type: String,
  },
  setup(props) {
    const isVisible = ref(false);
    const inputType = computed(() => {
      if (props.password) {
        return isVisible.value ? 'text' : 'password';
      }
      return props.type;
    });

    return {
      isVisible,
      inputType,
    };
  },
};
</script>

<style lang="scss">
.s-input {
  .q-field__prepend {
    border-right: 1px solid $grey-3;
    padding-right: 8px;
    margin-right: 10px;
  }
  .q-icon {
    padding-right: 4px;
  }
  .input-label {
    font-size: 14px;
    padding-right: 4px;
  }
  .input-addon {
    font-size: 14px;
  }
}
</style>
