<template>
  <q-list bordered class="rounded-borders">
    <q-expansion-item
      header-style="color: #00CD52; font-weight: bold"
      expand-icon-toggle
      expand-separator
      switch-toggle-side
    >
      <template v-slot:header>
        <q-item-section avatar>Help</q-item-section>
        <q-item-section class="text-black">
          {{title}}
        </q-item-section>
      </template>
      <q-card class="help-contents-container">
        <q-card-section>
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

<style lang="scss">
.help-contents-container {
  margin-left: 160px;
}
</style>
