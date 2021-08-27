<template>
  <div class="q-pa-none rounded-borders-help">
    <q-expansion-item
      expand-icon-toggle
      expand-separator
      switch-toggle-side
      v-model="isOpen"
    >
      <template v-slot:header>
        <q-item-section avatar class="help-header">Help</q-item-section>
        <q-item-section class="help-contents-title" v-show="isOpen">{{ title }}</q-item-section>
      </template>
      <q-card>
        <q-card-section class="help-contents-container">
          <slot />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      isOpen: ref(false),
    };
  },
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
@import '../css/quasar.variables.scss';

.rounded-borders-help {
  border-style: solid;
  border-width: 2px;
  border-color: $info;
  border-radius: 4px;
  .q-item {
    height: 54px;
    text-align: left;
  }
}

.help-header {
  color: $info;
  font-weight: bold;
  width: 78px;
}

.help-contents-title {
  font-weight: bold;
}

.help-contents-container {
  margin: -19px 0px 0px 110px;
  background: no-repeat url("../assets/help_outline.svg") right bottom;
}
</style>
