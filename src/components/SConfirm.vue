<template>
  <q-dialog>
    <q-card class="s-confirm">
      <q-card-actions class="modal-close-button">
        <q-btn :icon="closeIcon" flat round dense v-close-popup color="grey-6" :ripple="false"
        @click="$emit('handleClose')"
        />
      </q-card-actions>
      <q-card-section class="modal-title">
        <div v-if="withHeaderIcon" class="flex items-center justify-center modal-icon">
          <q-icon v-if="type === 'info'" :name="infoOutlineIcon" size="32px" color="positive" />
          <q-icon v-else :name="warningOutlineIcon" size="32px" color="negative" />
        </div>
        {{ title }}
      </q-card-section>
      <q-card-section class="modal-content">
        <slot name="content"></slot>
      </q-card-section>
      <q-card-actions class="modal-buttons" align="center" :vertical="btnVertical" :class="btnVertical ? 'btn-vertical' : 'no-vertical'">
        <q-btn
          class="modal-button first"
          no-caps
          no-wrap
          dense
          unelevated
          :ripple="false"
          :color="firstBtnColor"
          :outline="firstBtnOutLine"
          @click="$emit('handleFirst')"
        >
          {{ buttonLabel }}
        </q-btn>
        <q-btn
          v-if="twoButtons"
          class="modal-button second"
          no-caps
          no-wrap
          dense
          unelevated
          :ripple="false"
          :color="secondBtnColor"
          :outline="secondBtnOutLine"
          @click="$emit('handleSecond')"
          >
          {{ secondButtonLabel }}
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { infoOutlineIcon, warningOutlineIcon, closeIcon } from '../assets/icons.js';

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
    firstBtnColor: {
      type: String,
      default: '',
    },
    secondBtnColor: {
      type: String,
      default: '',
    },
    firstBtnOutLine: {
      type: Boolean,
      default: false,
    },
    secondBtnOutLine: {
      type: Boolean,
      default: false,
    },
    btnVertical: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      infoOutlineIcon,
      warningOutlineIcon,
      closeIcon,
    };
  },
};
</script>

<style lang="sass">
.close-button
  position: absolute
  top: 10px
  right: 10px

.modal-icon
  text-align: center
  margin-top: -10px

.modal-title
  margin-top: 20px
  font-size: 20px
  font-weight: bold
  text-align: center

.modal-content
  text-align: center
  margin: 20px

.modal-button
  text-align: center
  margin-bottom: 10px
  .first
    margin-right: 8px
</style>
