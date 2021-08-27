<template>
  <div class="row q-pa-md">
    <div class="col-3">
      <s-list
        title="Available Items"
      />
    </div>
    <div class="col-1 transfer-button">
      <div>
        <s-button
          outline
          icon="ti-angle-double-right"
          @click="moveToRightAll"
        />
      </div>
      <div>
        <s-button
          outline
          icon="ti-angle-right"
          @click="moveToRight"
        />
      </div>
      <div>
        <s-button
          outline
          icon="ti-angle-left"
          @click="moveToLeft"
        />
      </div>
      <div>
        <s-button
          outline
          icon="ti-angle-double-left"
          @click="moveToLeftAll"
        />
      </div>
    </div>
    <div class="col-3">
      <s-list
        title="Selected Items"
      />
    </div>
  </div>
</template>

<script>
import SList from '../components/SList.vue';
import SButton from '../components/SButton.vue';

export default {
  components: {
    SList,
    SButton,
  },
  methods: {
    moveToRightAll() {
      console.log('right all');
    },
    moveToRight() {
      console.log('right');
    },
    moveToLeft() {
      console.log('left');
    },
    moveToLeftAll() {
      console.log('left all');
    },
  },
};
</script>

<style lang="scss">
.transfer-button {
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  div {
    margin-bottom: 4px;
  }
}
</style>
