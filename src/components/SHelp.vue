<template>
  <q-btn
    flat
    :ripple="false"
    class="s-help-btn bg-info"
    text-color="white"
    no-caps
    dense
    rounded
    :label="label"
    icon="help_outline"
  >
    <q-popup-proxy :offset="[0, 8]">
      <q-card class="s-help-contents" dense>
        <q-card-actions class="s-help-header">
          <q-icon
            name="help_outline"
            color="info"
            size="24px"
            class="s-help-icon"
          />
          <div class="s-help-title">{{ title }}</div>
          <q-icon
            v-close-popup
            flat
            :ripple="false"
            dense
            name="close"
            right
            class="s-help-close"
            size="19px"
          />
        </q-card-actions>
        <q-card-section class="s-help-list">
          <slot />
        </q-card-section>
      </q-card>
    </q-popup-proxy>
  </q-btn>
</template>

<script>
export default {
  props: {
    title: String,
    label: String,
  },
};
</script>

<style lang="sass" scoped>
.s-help-btn
  width: 92px
  height: 32px
.s-help-contents
  min-width: 535px
  min-height: 190px
  padding: 20px 32px
.s-help-header
  padding: 0
  margin-bottom: 18px
  .s-help-icon
    margin-right: 12px
  .s-help-title
    width: 428px
    font:
      weight: 700
      size: 20px
  .s-help-close
    margin-left: 0
    position: absolute
    top: 10px
    right: 10px
    cursor: pointer
.s-help-list
  width: 471px
  height: 150px
  padding: 0
  font-size: 14px
  line-height: 25px
</style>
