<template>
  <q-dialog>
    <q-card>
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="close-button">
            <q-btn icon="close" flat round dense v-close-popup />
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div v-if="withHeaderIcon" class="modal-icon q-mt-md">
          <q-img v-if="type === 'info'" src="~assets/icon_info_outline.svg" width="28px" height="28px" />
          <q-img v-else src="~assets/icon_warning_outline.svg" width="28px" height="28px" />
        </div>
        <div class="modal-title q-mt-sm">
          {{ title }}
        </div>
        <div class="modal-content q-mt-md">
          <slot name="content"></slot>
        </div>
        <div class="modal-button q-mt-md">
          <q-btn
            class="modal-button first"
            outline
            :color="type === 'info' ? 'secondary' : 'negative'"
            no-caps
            no-wrap
            dense
            unelevated
            style="padding: 5px 12px"
            :ripple="false">
            {{ buttonLabel }}
          </q-btn>
          <q-btn
            v-if="twoButtons"
            class="modal-button second"
            :color="type === 'info' ? 'secondary' : 'negative'"
            no-caps
            no-wrap
            dense
            unelevated
            style="padding: 5px 12px"
            :ripple="false"
          >
            {{ secondButtonLabel }}
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    withHeaderIcon: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
    buttonLabel: {
      type: String,
      default: '',
    },
    twoButtons: {
      type: Boolean,
      default: false,
    },
    secondButtonLabel: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="sass">
.close-button
  position: absolute
  top: 12px
  right: 12px

.modal-icon
  text-align: center
  margin-top: -20px

.modal-title
  font-size: 20px
  font-weight: bold
  text-align: center

.modal-content
  text-align: center
  margin: 24px

.modal-button
  text-align: center
  margin-bottom: 10px
  padding: 8px 24px !important
  line-height: 20px
  .first
    margin-right: 8px
  .first, .second
    height: 42px
    font-size: 18px
    font-weight: bold
</style>
