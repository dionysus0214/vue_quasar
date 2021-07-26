<template>
  <div class="q-pa-none rounded-borders-help">
    <q-expansion-item
      expand-icon-toggle
      expand-separator
      switch-toggle-side
      @show="isHidden = true"
      @hide="isHidden = false"
    >
      <template v-slot:header>
        <q-item-section class="help-header">Help</q-item-section>
        <q-item-section class="help-contents-title" v-show="isHidden">{{title}}</q-item-section>
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
export default {
  data () {
    return {
      isHidden: false
    }
  },
  props: {
    title: {
      default: ''
    }
  }
}
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
  .q-item__section--main + .q-item__section--main {
    margin-left: -660px;
  }
}

.help-header {
  color: $info;
  font-weight: bold;
}

.help-contents-title {
  font-weight: bold;
}

.help-contents-container {
  margin: -19px 0px 0px 110px;
  background: no-repeat url("../assets/help_outline.svg") right bottom;
}
</style>
