<template>
  <q-toolbar class="bg-primary text-white">
    <q-toolbar-title>{{ title }}</q-toolbar-title>
    <q-img
      src="~assets/icon_align_korean.svg"
      width="24px"
      height="24px"
      @click="textAlign"
    />
  </q-toolbar>

  <q-list bordered separator>
    <q-item>
      <q-item-section side>
        <s-checkbox v-model="check1" />
      </q-item-section>
      <q-item-section>
        <q-item-label>lorem ipsum</q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section side>
        <s-checkbox v-model="check2" />
      </q-item-section>
      <q-item-section>
        <q-item-label>dolor sit amet</q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section side>
        <s-checkbox v-model="check3" />
      </q-item-section>
      <q-item-section>
        <q-item-label>consectetur adipiscing</q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section side>
        <s-checkbox v-model="check4" />
      </q-item-section>
      <q-item-section>
        <q-item-label>vitae congu</q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section side>
        <s-checkbox v-model="check5" />
      </q-item-section>
      <q-item-section>
        <q-item-label>justo libero vel</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { ref } from 'vue';
import SCheckbox from './SCheckbox.vue';

export default {
  components: {
    SCheckbox,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      check1: ref(false),
      check2: ref(false),
      check3: ref(false),
      check4: ref(false),
      check5: ref(false),
    };
  },
  methods: {
    textAlign() {
      console.log('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.q-toolbar {
  min-height: 46px;
  .q-toolbar__title {
    font-size: 14px;
    font-weight: bold;
  }
  .q-img {
    cursor: pointer;
  }
}
</style>
