<template>
  <div class="pagination row">
    <div class="icons-container" v-if="paginationInfo.startPage !== 1">
      <q-btn
        flat
        dense
        round
        :ripple="false"
        unelevated
        type="button"
        align="center"
        class="bg-transparent first-btn"
        text-color="grey-4"
        :icon="paginationFirstIcon"
        @click="updateModelValue('goFirst')"
      />
      <q-btn
        flat
        dense
        round
        :ripple="false"
        unelevated
        type="button"
        align="center"
        class="left-btn"
        text-color="grey-4"
        :icon="paginationLeftIcon"
        @click="updateModelValue('goLeft')"
      />
    </div>
    <div class="pagination-container">
      <q-btn
        v-for="(p, i) in 10"
        :key="i"
        v-show="paginationInfo.startPage + i <= paginationInfo.lastPage"
        flat
        dense
        rounded
        no-wrap
        unelevated
        :ripple="false"
        :label="paginationInfo.startPage + i"
        text-color="grey-4"
        type="button"
        align="center"
        @click="updateModelValue(paginationInfo.startPage + i)"
        class="pagination-btn"
        :class="{
          'pagination-active-btn':
            paginationInfo.startPage + i === paginationInfo.currentPage,
        }"
      />
    </div>
    <div
      class="icons-container"
      v-if="paginationInfo.lastPage - paginationInfo.startPage > 10"
    >
      <q-btn
        flat
        dense
        round
        :ripple="false"
        unelevated
        type="button"
        align="center"
        class="right-btn"
        text-color="grey-4"
        :icon="paginationRightIcon"
        @click="updateModelValue('goRight')"
      />
      <q-btn
        flat
        dense
        round
        :ripple="false"
        unelevated
        type="button"
        align="center"
        class="last-btn"
        text-color="grey-4"
        :icon="paginationLastIcon"
        @click="updateModelValue('goLast')"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import {
  paginationLeftIcon,
  paginationRightIcon,
  paginationLastIcon,
  paginationFirstIcon,
} from '../assets/icons.js';

export default ({
  name: 'SPagination',
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
    lastPage: {
      type: Number,
      default: 1,
      required: true,
    },
    rowPerPage: {
      type: Number,
      default: 5,
    },
  },
  setup(props, { emit }) {
    const paginationInfo = ref({
      lastPage: props.lastPage,
      currentPage: props.modelValue,
      rowPerPage: props.rowPerPage,
      startPage: Math.floor((props.modelValue - 1) / 10) * 10 + 1,
    });

    function updateModelValue(val) {
      if (val === 'goFirst') {
        paginationInfo.value.startPage = 1;
        paginationInfo.value.currentPage = 1;
      } else if (val === 'goLeft' && paginationInfo.value.startPage - 10 > 0) {
        paginationInfo.value.startPage -= 10;
        paginationInfo.value.currentPage = paginationInfo.value.startPage + 9;
      } else if (
        val === 'goRight'
        && paginationInfo.value.startPage + 10 < paginationInfo.value.lastPage
      ) {
        paginationInfo.value.startPage += 10;
        paginationInfo.value.currentPage = paginationInfo.value.startPage;
      } else if (val === 'goLast') {
        if (paginationInfo.value.lastPage % 10 !== 0) {
          paginationInfo.value.startPage = Math.floor(paginationInfo.value.lastPage / 10) * 10 + 1;
        } else {
          paginationInfo.value.startPage = (Math.floor(paginationInfo.value.lastPage / 10) - 1) * 10 + 1;
        }
        paginationInfo.value.currentPage = paginationInfo.value.lastPage;
      } else {
        paginationInfo.value.currentPage = val;
      }
      emit('update:modelValue', paginationInfo.value.currentPage);
    }

    watch(
      () => props.modelValue,
      (newVal) => {
        paginationInfo.value.currentPage = newVal;
        paginationInfo.value.startPage = Math.floor((newVal - 1) / 10) * 10 + 1;
      },
    );

    watch(
      () => props.lastPage,
      (newVal) => {
        paginationInfo.value.lastPage = newVal;
      },
    );

    return {
      paginationRightIcon,
      paginationLeftIcon,
      paginationLastIcon,
      paginationFirstIcon,

      paginationInfo,

      updateModelValue,
    };
  },
});
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  .q-btn {
    min-height: 28px;
    height: 28px;
    margin: 0 4px;
    background: none !important;
    justify-content: center;
    &:hover {
      &:before {
        border: 1px solid $indigo-7;
      }
      .q-focus-helper {
        opacity: 0 !important;
        &:before,
        &:after {
          opacity: 0 !important;
        }
      }
      .q-btn__content {
        .q-icon {
          color: $indigo-7;
        }
        > span {
          color: $indigo-7;
        }
      }
    }
  }
  .icons-container {
    .q-btn {
      min-width: 28px;
      width: 28px;
      &__content {
        .q-icon {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
  .pagination-container {
    .q-btn {
      min-width: 28px;
      width: fit-content;
      padding: 0;
      &__content {
        padding: 2px 10px 4px;
        > span {
          height: 22px;
          line-height: 22px;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
    .pagination-active-btn {
      &:before {
        background: $indigo-7 !important;
      }
      .q-btn__content {
        > span {
          color: white !important;
        }
      }
    }
  }
  .q-btn.disabled {
    &:hover {
      &:before {
        border: none;
      }
      .q-btn__content {
        .q-icon {
          color: $grey-6;
        }
        > span {
          color: $grey-6;
        }
      }
    }
  }
}
</style>
