<template>
  <q-table
    flat
    bordered
    hide-pagination
    hide-selected-banner
    class="s-table"
    :class="{ 's-select-table': useSelect }"
    :table-class="{ 'resizable-table': resizable }"
  >
    <template v-slot:no-data>
      <slot name="noData">
        <div class="full-width text-center">
          데이터 조회가 필요합니다.
        </div>
      </slot>
    </template>
    <template
      v-for="(index, name) in $slots"
      :key="index"
      v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </q-table>
</template>

<script>
import { onMounted } from 'vue';

export default ({
  name: 'STable',
  props: {
    useSelect: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    function createDiv(height) {
      const div = document.createElement('div');
      div.style.top = 0;
      div.style.right = 0;
      div.style.width = '1px';
      div.style.position = 'absolute';
      div.style.cursor = 'col-resize';
      div.style.backgroundColor = '#dddddd';
      div.style.zIndex = 2;
      div.style.userSelect = 'none';
      div.style.height = `${height}px`;
      return div;
    }

    function setListeners(div) {
      let curCol;
      let nxtCol;
      let pageX;
      let curColWidth;
      let nxtColWidth;
      div.addEventListener('mousedown', (e) => {
        curCol = e.target.parentElement;
        nxtCol = curCol.nextElementSibling;
        pageX = e.pageX;
        curColWidth = curCol.offsetWidth;
        if (nxtCol) {
          nxtColWidth = nxtCol.offsetWidth;
        }
      });

      document.addEventListener('mousemove', (e) => {
        if (curCol) {
          const diffX = e.pageX - pageX;

          if (nxtCol) {
            nxtCol.style.width = `${nxtColWidth - diffX}px`;
          }
          curCol.style.width = `${curColWidth + diffX}px`;
        }
      });

      document.addEventListener('mouseup', () => {
        curCol = undefined;
        nxtCol = undefined;
        pageX = undefined;
        nxtColWidth = undefined;
        curColWidth = undefined;
      });
    }

    function addResizable() {
      const tableElement = document.getElementsByClassName('resizable-table')[0].getElementsByTagName('table')[0];
      const firstRow = tableElement.getElementsByTagName('tr')[0];
      const cols = firstRow ? firstRow.children : [];
      console.log(cols);
      for (let i = 0; i < cols.length; i += 1) {
        const div = createDiv(tableElement.offsetHeight);
        cols[i].appendChild(div);
        cols[i].style.position = 'relative';
        setListeners(div);
      }
    }

    onMounted(() => {
      if (props.resizable) {
        addResizable();
      }
    });
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
