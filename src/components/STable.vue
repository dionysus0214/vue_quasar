<template>
  <q-table
    flat
    bordered
    hide-pagination
    hide-selected-banner
    class="s-table"
    :class="{ 's-select-table': useSelect, 'resizable-table': resizable, 'sticky-header': stickyHeader }"
    :table-class="{ 'resizable-table': resizable }"
  >
    <template v-slot:no-data>
      <slot name="noData">
        <div class="full-width text-center">데이터 조회가 필요합니다.</div>
      </slot>
    </template>
    <template v-slot:loading>
      <q-inner-loading showing color="positive" size="72px" />
    </template>
    <template v-for="(index, name) in $slots" :key="index" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </q-table>
</template>

<script>
import { onMounted } from 'vue';

function createDiv() {
  const div = document.createElement('div');
  div.style.top = '12px';
  div.style.right = 0;
  div.style.width = '4px';
  div.style.position = 'absolute';
  div.style.cursor = 'col-resize';
  div.style.backgroundColor = 'none';
  div.style.border = '1px solid #CCCCCC';
  div.style.borderTop = 'none';
  div.style.borderBottom = 'none';
  div.style.zIndex = 2;
  div.style.userSelect = 'none';
  div.style.height = '22px';
  return div;
}
function setListeners(div) {
  let curCol;
  let pageX;
  let curColWidth;
  div.addEventListener('mousedown', (e) => {
    curCol = e.target.parentElement;
    pageX = e.pageX;
    curColWidth = curCol.offsetWidth;
  });

  document.addEventListener('mousemove', (e) => {
    if (curCol) {
      const diffX = e.pageX - pageX;
      curCol.style.minWidth = `${curColWidth + diffX}px`;
      curCol.style.width = `${curColWidth + diffX}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    curCol = undefined;
    pageX = undefined;
    curColWidth = undefined;
  });
}
function addResizable() {
  const tableElement = document
    .getElementsByClassName('resizable-table')[0]
    .getElementsByTagName('table')[0];
  const firstRow = tableElement.getElementsByTagName('tr')[0];
  const cols = firstRow ? firstRow.children : [];
  for (let i = 0; i < cols.length; i += 1) {
    const div = createDiv();
    cols[i].appendChild(div);
    cols[i].style.position = 'sticky';
    setListeners(div);
  }
}

export default ({
  name: 'STable',
  props: {
    useSelect: {
      type: Boolean,
      default: false,
    },
    resizable: {
      type: Boolean,
      default: false,
    },
    stickyHeader: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    onMounted(() => {
      if (props.resizable) {
        addResizable();
      }
    });
    return {};
  },
});
</script>

<style lang="scss">
@import "../css/extends.scss";

.s-table {
  border-radius: 8px !important;
  border: 1px solid $grey-9;
  .q-table__middle {
    .q-table {
      overflow: auto;
      thead {
        background: $th-bg;
        min-height: 0;
        tr {
          height: 46px;
          th {
            padding: 12px 24px;
            font-size: $default-font;
            font-weight: $font-weight-md;
            word-break: keep-all;
            white-space: nowrap;
          }
        }
      }
      tbody {
        tr {
          min-height: 0px;
          td {
            padding: 0 16px;
            font-size: $default-font;
            word-break: keep-all;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
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
      font-size: $default-font;
      line-height: $default-line-height;
      display: block;
      padding-top: 80px;
    }
  }
}
.s-select-table {
  margin-bottom: $pagination-size;
  .q-table__middle {
    .q-table {
      thead {
        tr {
          th {
            &:first-of-type {
              padding: 0 12px 0 24px;
              > .q-checkbox {
                @extend %checkbox;
              }
            }
          }
        }
      }
      tbody {
        tr {
          td {
            &:first-of-type {
              padding: 0 12px 0 24px;
              > .q-checkbox {
                @extend %checkbox;
              }
            }
            &:after {
              background: none;
            }
          }
        }
      }
    }
  }
}
.resizable-table {
  .q-table__middle {
    .q-table {
      thead {
        tr {
          th:first-of-type {
            > div:last-of-type {
              display: none;
            }
          }
          th:last-of-type {
            > div {
              display: none;
            }
          }
        }
      }
    }
  }
}
.sticky-header {
  .q-table__middle {
    .q-table {
      thead {
        tr {
          th {
            background: $th-bg;
            position: sticky;
            top: 0;
            z-index: 100;
          }
        }
      }
    }
  }
}
</style>
