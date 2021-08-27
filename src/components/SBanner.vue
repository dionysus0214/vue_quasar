<template>
  <q-banner inline-actions>
    <template v-slot>
      <div class="image-wrap">
        <img
          src="~assets/banner_image.png"
          style="width: 1025px; height: 108px;"
        >
      </div>
    </template>
    <template v-slot:action>
      <s-button
        class="banner-button"
        flat
        color="white"
        label="자세히 알아보기"
      />
    </template>
  </q-banner>
</template>

<script>
import SButton from './SButton.vue';

export default {
  components: {
    SButton,
  },
};
</script>

<style lang="scss">
.image-wrap {
  width: 105%;
  text-align: center;
  margin: 0px auto;
  height: 108px;
  background-color: #1465C9;
  img {
    width: 100%;
    object-fit: cover;
  }
}

.banner-button {
  font-weight: bold;
  margin-top: 60px;
  margin-right: 60%;
}

.q-focusable:focus .q-focus-helper,
.q-hoverable:hover .q-focus-helper {
  background: inherit !important;
}
</style>
