<template>
  <q-btn
    class="s-button"
    no-caps
    no-wrap
    unelevated
    :ripple="false"
    color="indigo-6"
    :class="{
      'button-medium': size === 'md',
      'icon-with': $attrs.icon && $attrs.label,
      'icon-only': $attrs.icon && !$attrs.label,
    }"
  />
</template>

<script>
import { defineComponent } from "vue";
import { QBtn } from "quasar";

export default defineComponent({
  name: "SChip",
  components: { QBtn },
  props: {
    size: {
      type: String,
      default: "sm",
    },
  },
});
</script>

<style lang="sass">
.s-button
  &.q-btn
    min-width: 69px
    min-height: 32px
    padding: 5px 12px
    font-size: 14px
    font-weight: 400
    line-height: 22px
    &.icon-with
      min-width: 91px
      .q-icon
        font-size: 16px
      .on-left
        margin-right: 6px
    &.icon-only
      min-width: 32px
      padding: 8px
      .q-icon
        font-size: 16px

.s-button
  &.button-medium
    min-width: 107px
    min-height: 42px
    padding: 8px 24px
    font-size: 18px
    font-weight: 500
    line-height: 26px
    &.icon-with
      min-width: 135px
      padding: 8px 24px 8px 20px
      .q-icon
        font-size: 24px
      .on-left
        margin-right: 8px
    &.icon-only
      min-width: 42px
      padding: 9px
      .q-icon
        font-size: 24px
</style>
