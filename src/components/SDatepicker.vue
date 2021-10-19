<template>
  <q-input
    dense
    outlined
    :class="{
      short: short,
      long: long,
      range: range,
    }"
    class="no-padding"
    :mask="!range ? 'date' : ''"
    :placeholder="!range ? 'yyyy/mm/dd' : ''"
    :readonly="range"
    :modelValue="range ? inputDate : innerValue"
  >
    <template v-slot:prepend>
      <div v-if="!range">
        <q-icon name="event" class="cursor-pointer">
          <q-menu
            v-model="calendarOpen"
            fit
            class="date-picker-wrapper"
            :offset="[12, 12]"
          >
            <q-date
              color="positive"
              v-model="innerValue"
              minimal
              no-unset
              @update:modelValue="handleUpdate"
            />
          </q-menu>
        </q-icon>
      </div>
      <div v-if="range">
        <q-icon name="event" class="cursor-pointer">
          <q-menu
            v-model="calendarOpen"
            fit
            class="date-picker-wrapper"
            :offset="[12, 12]"
          >
            <q-date
              v-model="dateRange"
              minimal
              range
              square
              color="positive"
              class="no-padding"
              :options="optionsFn"
              @update:modelValue="dateUpdate"
            />
          </q-menu>
        </q-icon>
      </div>
    </template>
  </q-input>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    short: Boolean,
    long: Boolean,
    range: Boolean,
    showDate: Boolean,
    modelValue: Object,
  },
  setup(_, { emit }) {
    const calendarOpen = ref(true);
    function getDateStr(myDate) {
      const year = myDate.getFullYear();
      let month = myDate.getMonth() + 1;
      let day = myDate.getDate();
      month = month < 10 ? `0${String(month)}` : month;
      day = day < 10 ? `0${String(day)}` : day;
      return `${year}/${month}/${day}`;
    }
    const today = getDateStr(new Date());
    function monthAgo() {
      const newDate = new Date();
      const monthOfYear = newDate.getMonth();
      newDate.setMonth(monthOfYear - 3);
      return getDateStr(newDate);
    }
    const dateRange = ref({ from: "", to: "" });
    const inputDate = ref(null);

    function dateUpdate() {
      if (typeof dateRange.value === "string") {
        dateRange.value = {
          from: dateRange.value.replaceAll("/", "-"),
          to: dateRange.value.replaceAll("/", "-"),
        };
        inputDate.value = `${dateRange.value.from} ~ ${dateRange.value.to}`;
        calendarOpen.value = false;
      } else {
        dateRange.value.from = dateRange.value.from.replaceAll("/", "-");
        dateRange.value.to = dateRange.value.to.replaceAll("/", "-");
        inputDate.value = `${dateRange.value.from} ~ ${dateRange.value.to}`;
        calendarOpen.value = false;
      }
      emit("update:modelValue", dateRange.value);
    }
    const innerValue = ref(null);
    function handleUpdate() {
      emit("update:modelValue", innerValue.value);
      calendarOpen.value = false;
    }
    return {
      calendarOpen,
      dateRange,
      inputDate,
      dateUpdate,
      handleUpdate,
      innerValue,
      optionsFn(date) {
        return date >= monthAgo() && date <= today;
      },
    };
  },
};
</script>

<style lang="sass">
@import '../css/quasar.variables.scss'

.short
  width: 146px

.long
  width: 200px
  .q-field__control-container
    .q-field__native
      text-align: center

.range
  width: 252px

.range, .long, .short
  border-radius: 2px !important
  border: 1px solid $grey-6
  height: 32px !important
  .q-field__inner
    .q-field__control
      padding: 5px 12px !important
      height: 100%
      .q-field__marginal
        color: $grey-5
      .q-field__prepend
        height: 100%
        padding-right: 12px
        div
          height: 100%
          display: contents
      .q-field__control-container
        height: 100%
        .q-field__native
          padding: 0
          -webkit-appearance: initial
          line-height: 20px
        .q-field__label
          top: 0px
          color: black
      &::before
        border: none

.date-picker-wrapper.q-menu
  width: 290px
  height: 288px
  min-width: 0 !important
  min-height: 0 !important
  .q-date
    height: 288px
    &__main
      .q-date__content
        .q-date__view
          min-height: 0 !important
          .q-date__navigation
            div
              height: 32px
            .relative-position
              div
                .q-btn--dense
                  padding: 0 !important
</style>
