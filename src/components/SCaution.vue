<template>
  <q-card class="s-caution" flat>
    <span class="s-caution-title">{{ title }}</span>
    <q-card-section class="s-caution-contents">
      <slot />
    </q-card-section>
    <q-card-section class="s-caution-icon"></q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="sass">
@import '../css/quasar.variables.scss'

.s-caution
  max-height: 186px
  max-width: 100%
  min-width: 1000px
  padding: 10px 0
  background-color: rgba(252, 230, 230, 0.55)
  color: $red-6
  font:
    size: 20px
    weight: 700
  border:
    left: 8px solid $red-6
    radius: 4px 0px 0px 4px
  .s-caution-title
    text-indent: 60px
    display: block
    margin-top: 8px
  .s-caution-contents
    max-width: 1423px
    min-width: 803px
    height: 250px
    margin-top: -12px
    margin-left: 32px
    color: black
    font:
      weight: 400
      size: 14px
  .s-caution-icon
    width: 216px
    height: 186px
    position: absolute
    padding: 0
    right: 0
    bottom: -4px
    background: no-repeat url("../assets/caution_outline.svg") 28px -28px / cover
</style>
