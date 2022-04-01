<template>
  <q-markup-table
    flat
    bordered
    :separator="separator"
    class="s-markup-table"
    :class="{
      'header-left': header === 'left',
      'header-top': header === 'top',
      'tr-no-hover': noHover,
    }"
  >
    <slot></slot>
  </q-markup-table>
</template>

<script>
export default ({
  name: 'SMarkupTable',
  props: {
    separator: {
      type: String,
      default: 'Horizontal',
    },
    header: {
      type: String,
      default: 'top',
    },
    noHover: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.s-markup-table {
  border-radius: 8px !important;
  border: 1px solid $grey-9;
  .q-table {
    thead {
      min-height: 0;
      tr {
        height: $table-tr-height;
        th {
          padding: $table-th-padding;
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
        height: $table-tr-height;
        th {
          font-size: $default-font;
        }
        td {
          height: $table-tr-height;
          padding: $table-td-padding;
          font-size: $default-font;
        }
        &:hover {
          background-color: $grey-11;
        }
      }
    }
  }
}
.s-markup-table.header-top {
  .q-table {
    thead {
      background: $th-bg;
    }
  }
}
.s-markup-table.header-left {
  .q-table {
    tbody {
      tr {
        th {
          background: $th-bg;
          font-weight: $font-weight-lg;
          border-bottom: 1px solid $grey-9;
          &:not(:first-of-type) {
            border-left: 1px solid $grey-9;
          }
        }
        th:not(:first-of-type) {
          border-left: 1px solid $grey-9;
        }
        &:last-of-type {
          th {
            border-bottom: none;
          }
        }
      }
    }
  }
}
.s-markup-table.tr-no-hover {
  tbody {
    tr:hover {
      background-color: transparent;
      td:before {
        background-color: transparent;
      }
    }
  }
}
</style>
