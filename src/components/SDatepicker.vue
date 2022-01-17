<template>
  <q-input
    dense
    outlined
    :class="{
      's-date-picker-short': short,
      's-date-picker-long': long,
      's-date-picker-range': range,
      'text-grey-6 bg-grey-11': $props.isDisable,
    }"
    readonly
    class="q-pa-none s-date-picker"
    :placeholder="$props.dateText"
    v-model="inputDate"
    :disable="$props.isDisable"
  >
    <template v-slot:prepend>
      <div v-if="!range">
        <q-btn
          :icon="dateRangeIcon"
          dense
          :ripple="false"
          flat
          class="q-pa-none"
        >
          <q-menu
            v-model="calendarOpen"
            fit
            class="date-picker-wrapper"
            :offset="[12, 12]"
          >
            <q-date
              v-model="dateValue"
              color="positive"
              minimal
              no-unset
              @update:modelValue="dateUpdate"
            />
          </q-menu>
        </q-btn>
      </div>
      <div v-else>
        <q-btn
          :icon="dateRangeIcon"
          dense
          :ripple="false"
          flat
          class="q-pa-none"
          @click="clickDateIcon"
        >
          <q-menu
            v-model="calendarOpen"
            fit
            class="date-picker-wrapper"
            :offset="[12, 12]"
          >
            <q-date
              v-model="dateValue"
              minimal
              range
              square
              color="positive"
              class="q-pa-none"
              :options="optionsFn"
              @range-start="getRangeStartDay"
              @update:modelValue="dateUpdate"
            />
          </q-menu>
        </q-btn>
      </div>
    </template>
  </q-input>
</template>

<script>
import { ref, watch } from "vue";
import { date } from 'quasar';
import { dateRangeIcon } from '../assets/icons.js';

export default {
  props: {
    short: Boolean,
    long: Boolean,
    range: Boolean,
    isDisable: Boolean,
    modelValue: {
      type: [String, Object],
    },
    dateText: String,
    subtractDate: {
      years: Number,
      months: Number,
      days: Number,
    },
    addDate: {
      years: Number,
      months: Number,
      days: Number,
    },
  },
  setup(props, { emit }) {
    const calendarOpen = ref(false);
    const inputDate = ref(props.dateText);
    watch(
      () => props.dateText,
      (val) => {
        inputDate.value = val;
      },
    );

    const dateValue = ref(props.modelValue);
    function dateUpdate() {
      if (props.range) {
        if (typeof dateValue.value === 'string') {
          dateValue.value = {
            from: dateValue.value.replaceAll('/', '-'),
            to: dateValue.value.replaceAll('/', '-'),
          };
        } else {
          dateValue.value.from = dateValue.value.from.replaceAll('/', '-');
          dateValue.value.to = dateValue.value.to.replaceAll('/', '-');
        }
        inputDate.value = `${dateValue.value.from} ~ ${dateValue.value.to}`;
      } else {
        dateValue.value = dateValue.value.replaceAll('/', '-');
        inputDate.value = dateValue.value;
      }
      calendarOpen.value = false;
      emit('update:modelValue', dateValue.value);
    }

    watch(
      () => props.isDisable,
      (val) => {
        calendarOpen.value = !val;
        inputDate.value = val ? null : inputDate.value;
      },
    );

    const today = date.formatDate(new Date(), 'YYYY/MM/DD');
    const startDate = ref(null);
    function getRangeStartDay(from) {
      startDate.value = from;
    }
    function optionsFn(day) {
      const clickDate = startDate.value
        ? `${startDate.value.year}/${startDate.value.month}/${startDate.value.day}`
        : '';
      if (clickDate) {
        let dateAgo = date.subtractFromDate(clickDate, props.subtractDate);
        dateAgo = date.addToDate(dateAgo, { days: 1 });
        const dateLater = date.addToDate(clickDate, props.addDate);
        const agoformatted = date.formatDate(dateAgo, 'YYYY/MM/DD');
        const laterformatted = date.formatDate(dateLater, 'YYYY/MM/DD');
        const todayDiff = startDate.value
          ? date.getDateDiff(clickDate, today)
          : null;
        const laterDiff = startDate.value
          ? date.getDateDiff(clickDate, laterformatted)
          : null;
        if (todayDiff > laterDiff) {
          return agoformatted <= day && day <= today;
        }
        if (todayDiff < laterDiff) {
          return agoformatted <= day && day < laterformatted;
        }
      }
      return day <= today;
    }

    function clickDateIcon() {
      dateValue.value = {};
      startDate.value = {};
    }

    return {
      calendarOpen,
      dateValue,
      inputDate,
      dateUpdate,
      getRangeStartDay,
      optionsFn,

      clickDateIcon,
      dateRangeIcon,
    };
  },
};
</script>

<style lang="scss">
.s-date-picker {
  .q-field__inner {
    .q-field__control {
      padding: 4px 12px !important;
      &:before {
        border-style: solid;
      }
      .q-field__prepend {
        height: auto;
        padding-right: 12px;
        > div {
          min-height: 0;
          height: 100%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          .q-btn {
            width: 24px;
            height: 24px;
            min-height: 24px;
          }
        }
      }
      &-container {
        height: auto;
        .q-field__native {
          height: 22px;
          line-height: 22px;
          padding: 0 !important;
          font: {
            size: 14px;
            weight: 400;
          }
          input::placeholder {
            color: $grey-2;
          }
        }
      }
    }
  }
}
.q-field--disabled.s-date-picker {
  color: $grey-6 !important;
  .q-field__inner {
    color: $grey-6 !important;
    .q-field__control {
      color: $grey-6 !important;
      opacity: 1 !important;
      &:before {
        border: 1px solid $grey-8;
      }
      .q-field__prepend {
        opacity: 1 !important;
      }
      &-container {
        opacity: 1 !important;
        .q-field__native {
          color: $grey-6 !important;
        }
      }
    }
  }
  &.q-field--float {
    color: $grey-6 !important;
    opacity: 0.9 !important;
  }
}
.s-date-picker-short {
  width: 146px;
}
.s-date-picker-long {
  width: 200px;
  .q-field__inner {
    .q-field__control {
      .q-field__prepend {
        padding: 0;
      }
      &-container {
        .q-field__native {
          text-align: center;
        }
      }
    }
  }
}
.s-date-picker-range {
  width: 252px;
  .q-field__inner {
    .q-field__control {
      .q-field__prepend {
        padding: 0;
      }
      &-container {
        .q-field__native {
          text-align: center;
        }
      }
    }
  }
}
.date-picker-wrapper.q-menu {
  width: 290px;
  height: 288px;
  min-width: 0 !important;
  min-height: 0 !important;
  .q-date {
    height: 288px;
    &__main {
      .q-date__content {
        .q-date__view {
          min-height: 0 !important;
          .q-date__navigation {
            div {
              height: 32px;
            }
            .relative-position {
              div {
                .q-btn--dense {
                  padding: 0 !important;
                }
              }
            }
          }
          .q-date__calendar-days-container {
            .q-date__calendar-days {
              .q-date__calendar-item {
                .q-btn {
                  padding: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
