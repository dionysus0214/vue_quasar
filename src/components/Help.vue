<template>
  <q-list bordered class="rounded-borders-help">
    <q-expansion-item
      expand-icon-toggle
      expand-separator
      switch-toggle-side
    >
      <template v-slot:header>
        <q-card-section class="help-header">Help</q-card-section>
      </template>
      <q-card>
        <q-card-section class="help-contents-title">
          {{title}}
        </q-card-section>
        <q-card-section class="help-contents-container">
          <slot />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
export default {
  props: {
    title: {
      default: ''
    }
  }
}
</script>

<style scoped>
.rounded-borders-help {
  border-style: solid;
  border-width: 2px;
  border-color: #00CD52;
  border-radius: 4px;
}

.help-header {
  color: #00CD52;
  font-weight: bold;
}

.help-contents-title {
  margin: -20px 0px 0px 132px;
  font-weight: bold;
}

.help-contents-container {
  margin: -35px 0px 0px 110px;
  background: no-repeat url("../assets/help_outline.svg") right bottom;
}
</style>
