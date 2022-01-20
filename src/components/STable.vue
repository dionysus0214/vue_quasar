<template>
  <q-table
    flat
    bordered
    hide-pagination
    hide-selected-banner
    class="s-table"
    :class="{ 's-select-table': useSelect }"
  >
    <template v-slot:no-data>
      <slot name="noData">
        <div class="full-width text-center">
          데이터 조회가 필요합니다.
        </div>
      </slot>
    </template>

    <template v-slot:header="props">
      <slot name="header">
        <tr>
          <th v-for="col in props.cols" :key="col.name">
            {{ col.label }}
          </th>
        </tr>
      </slot>
    </template>
  </q-table>
</template>

<script>
export default ({
  name: 'STable',
  props: {
    useSelect: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
    };
  },
});
</script>

<style lang="scss">
.s-table {
  border-radius: 8px !important;
  border: 1px solid $grey-9;
  .q-table__middle {
    .q-table {
      thead {
        background: $th-bg;
        min-height: 0;
        tr {
          height: 46px;
          th {
            padding: 0 24px;
            font-size: 14px;
            font-weight: 500;
            word-break: keep-all;
            white-space: nowrap;
          }
        }
      }
      tbody {
        tr {
          min-height: 0px;
          height: 46px;
          td {
            height: 46px;
            padding: 0 24px;
            font-size: 14px;
          }
          &:hover {
            background-color: $grey-11;
          }
        }
      }
    }
  }
  .q-table__bottom {
    min-height: 0;
    padding: 0;
    border: none;
    &--nodata {
      height: 240px;
      color: $grey-6;
      font-size: 14px;
      line-height: 22px;
      display: block;
      padding-top: 80px;
    }
  }
}
.s-select-table {
  .q-table__middle {
    .q-table {
      thead {
        tr {
          th {
            &:first-of-type {
              padding: 0 16px;
            }
          }
        }
      }
      tbody {
        tr {
          td {
            &:first-of-type {
              padding: 0 16px;
            }
            &:after {
              background: none;
            }
          }
        }
      }
    }
  }
  .q-checkbox {
    &__inner {
      min-width: 0;
      width: 32px;
      height: 32px;
      .q-checkbox__bg {
        border: 1px solid $grey-8;
        width: 16px;
        height: 16px;
        padding: 0 2.5px;
        background: white;
        top: 25%;
        left: 25%;
        .q-checkbox__svg {
          width: 11.43px !important;
          margin: auto;
        }
      }
      &--indet, &--truthy {
        color: $positive !important;
        .q-checkbox__bg {
          border: none;
          background: $positive;
        }
      }
    }
  }
}
</style>
