<template>
  <q-dialog persistent>
    <q-card>
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="close-button">
            <q-btn icon="close" flat round dense v-close-popup />
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="modal-icon q-mt-md">
          <q-img src="~assets/icon_warning_outline.svg" width="28px" height="28px" />
        </div>
        <div class="modal-title q-mt-sm">
          {{ title }}
        </div>
        <div class="modal-content q-mt-md">
          {{ content }}
        </div>
        <div class="modal-button q-mt-md">
          <s-button class="modal-button-first" label="Agree" color="negative" />
          <s-button outline label="Disagree" color="negative" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import SButton from './Button.vue'

export default {
  components: { SButton },
  props: {
    title: {
      default: ''
    },
    content: {
      default: ''
    }
  }
}
</script>
