<template>
  <div class="rounded-borders-caution">
    <q-card flat>
      <q-card-section>
        <span class="caution-header">Caution</span>
        <span class="caution-contents-title">{{ title }}</span>
      </q-card-section>
      <q-card class="caution-contents-container">
        <q-card-section>
          <slot />
        </q-card-section>
      </q-card>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
@import '../css/quasar.variables.scss';

.rounded-borders-caution {
  border-style: solid;
  border-width: 2px;
  border-color: $negative;
  border-radius: 4px;
}

.caution-header {
  padding: 50px;
  color: $negative;
  font-weight: bold;
}

.caution-contents-title {
  margin: -16px;
  font-weight: bold;
}

.caution-contents-container {
  margin: -18px 0px 0px 110px;
  background: no-repeat url("../assets/caution_outline.svg") right bottom;
}
</style>
