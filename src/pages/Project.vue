<template>
  <q-page>
    <div class="popup-page-content-container column q-col-gutter-md">
    </div>
  </q-page>
</template>

<script>
/* eslint-disable no-unused-vars */
import { ref, onBeforeMount, computed } from 'vue';
import { scroll } from 'quasar';
import { siteList, templateList, orderDataArray } from '../constants/data';

import SSelect from '../components/SSelect.vue';
import EditableListItem from '../components/EditableListItem.vue';

const TAP_VALUE_MAP = {
  auto: 0,
  manual: 1,
};

export default {
  components: {
    SSelect,
    EditableListItem,
  },
  setup() {
    return {
    };
  },
};
</script>

<style>
.detail-column {
  width: 500px;
}
.guide-column {
  width: 400px;
}
</style>
