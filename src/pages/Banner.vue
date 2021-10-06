<template>
  <div class="q-pa-md q-gutter-sm">
    <s-banner>
      <template v-slot>
        <div class="image-wrap">
          <img
            src="~assets/banner_image.png"
            style="width: 1025px; height: 108px;"
          >
        </div>
      </template>
      <template v-slot:button>
        <div>
          <q-btn
            class="banner-button"
            flat
            color="white"
            no-caps
            no-wrap
            dense
            unelevated
            :ripple="false"
            label="자세히 알아보기"
          />
        </div>
      </template>
    </s-banner>
  </div>
</template>

<script>
import SBanner from '../components/SBanner.vue';

export default {
  components: {
    SBanner,
  },
};
</script>

<style lang="sass">
.image-wrap
  width: 107%
  text-align: center
  margin: 0px auto
  height: 108px
  background-color: #1465C9
  img
    width: 100%
    object-fit: cover

.banner-button
  font-weight: bold
  margin-top: 60px

.q-focus-helper,
.q-focus-helper:after
  background: inherit !important
</style>
