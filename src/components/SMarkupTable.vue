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
        th {
          font-size: 14px;
        }
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
          font-weight: 700;
          border-bottom: 1px solid $grey-9;
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
