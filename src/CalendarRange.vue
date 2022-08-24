<template>
  <div :style="{ display: 'flex' }">
    <div class="first-cal" :style="{ padding: '6px 12px', boxShadow: 'none' }">
      <div class="text-center">
        <strong>From</strong>
      </div>

      <calendar-panel
        :calendar="startCalendar"
        :get-classes="getClasses"
        :value="startValue"
        :disabled-date="disabledStartDate"
        @update:calendar="updateStartCalendar"
        @select="handleSelectStart"
      >
      </calendar-panel>
    </div>
    <div class="second-cal" :style="{ padding: '6px 12px' }">
      <div class="text-center"><strong>To</strong></div>
      <calendar-panel
        :calendar="endCalendar"
        :get-classes="getClasses"
        :value="endValue"
        :disabled-date="disabledEndDate"
        @update:calendar="updateEndCalendar"
        @select="handleSelectEnd"
      ></calendar-panel>
    </div>
  </div>
</template>

<script>
import { differenceInCalendarMonths } from "date-fns";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

const { CalendarPanel } = DatePicker;

function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

function isValidRangeDate(date) {
  return (
    Array.isArray(date) &&
    date.length === 2 &&
    date.every(isValidDate) &&
    date[0] <= date[1]
  );
}

export default {
  name: "CalendarRange",
  components: {
    CalendarPanel,
  },
  props: {
    value: {},
    defaultValue: {
      default() {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
      },
    },
  },
  data() {
    return {
      startCalendar: new Date(),
      endCalendar: new Date(),
      startValue: null,
      endValue: null,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        const [start, end] = isValidRangeDate(this.value)
          ? this.value
          : [null, null];
        this.startValue = start;
        this.endValue = end;
      },
    },
    startValue: {
      immediate: true,
      handler(val) {
        this.updateStartCalendar(isValidDate(val) ? val : this.defaultValue);
      },
    },
    endValue: {
      immediate: true,
      handler(val) {
        this.updateEndCalendar(isValidDate(val) ? val : this.defaultValue);
      },
    },
  },
  methods: {
    updateStartCalendar(value) {
      this.startCalendar = value;
      const diff = differenceInCalendarMonths(
        this.endCalendar,
        this.startCalendar
      );
      if (diff < 0) {
        this.endCalendar = value;
      }
    },
    updateEndCalendar(value) {
      this.endCalendar = value;
      const diff = differenceInCalendarMonths(
        this.endCalendar,
        this.startCalendar
      );
      if (diff < 0) {
        this.startCalendar = value;
      }
    },
    getClasses(cellDate, currentDates, classnames) {
      const classes = [];
      if (
        !/disabled|active|not-current-month/.test(classnames) &&
        this.startValue &&
        this.endValue &&
        cellDate.getTime() >= this.startValue.getTime() &&
        cellDate.getTime() <= this.endValue.getTime()
      ) {
        classes.push("in-range");
      }
      return classes;
    },
    disabledStartDate(date) {
      return this.endValue && this.endValue.getTime() < date.getTime();
    },
    disabledEndDate(date) {
      return this.startValue && this.startValue.getTime() > date.getTime();
    },
    handleSelectStart(date) {
      this.startValue = date;
      if (this.endValue) {
        this.$emit("select", [this.startValue, this.endValue], "range");
      }
    },
    handleSelectEnd(date) {
      this.endValue = date;
      if (this.startValue) {
        this.$emit("select", [this.startValue, this.endValue], "range");
      }
    },
  },
};
</script>
<style>
body
  > div.mx-datepicker-main.mx-datepicker-popup
  > div
  > div.mx-datepicker-body
  div.text-center {
  background-color: #0059c1;
  color: #fff;
  line-height: 1.8;
  border-radius: 2px;
}
td.cell.active {
  background-color: #0059c1 !important;
}
.first-cal {
  -webkit-text-size-adjust: 100%;
  --litepicker-container-months-color-bg: #fff;
  --litepicker-container-months-box-shadow-color: #ddd;
  --litepicker-footer-color-bg: #fafafa;
  --litepicker-footer-box-shadow-color: #ddd;
  --litepicker-tooltip-color-bg: #fff;
  --litepicker-month-header-color: #333;
  --litepicker-button-prev-month-color: #9e9e9e;
  --litepicker-button-next-month-color: #9e9e9e;
  --litepicker-button-prev-month-color-hover: #2196f3;
  --litepicker-button-next-month-color-hover: #2196f3;
  --litepicker-month-width: calc(var(--litepicker-day-width) * 7);
  --litepicker-month-weekday-color: #9e9e9e;
  --litepicker-month-week-number-color: #9e9e9e;
  --litepicker-day-color: #333;
  --litepicker-day-color-hover: #2196f3;
  --litepicker-is-in-range-color: #bbdefb;
  --litepicker-is-locked-color: #9e9e9e;
  --litepicker-is-start-color: #fff;
  --litepicker-is-end-color: #fff;
  --litepicker-button-cancel-color: #fff;
  --litepicker-button-cancel-color-bg: #9e9e9e;
  --litepicker-button-apply-color: #fff;
  --litepicker-button-apply-color-bg: #2196f3;
  --litepicker-button-reset-color: #909090;
  --litepicker-button-reset-color-hover: #2196f3;
  --litepicker-highlighted-day-color: #333;
  --litepicker-highlighted-day-color-bg: #ffeb3b;
  --litepicker-mobilefriendly-backdrop-color-bg: #000;
  --litepicker-is-today-color: #0059c1;
  --litepicker-is-start-color-bg: #0059c1;
  --litepicker-is-end-color-bg: #0059c1;
  --litepicker-day-width: 40px;
  letter-spacing: 0;
  box-sizing: border-box;
  float: left;
  padding: 6px 12px;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, sans-serif;
  background: #fff;
  color: #444;
  font-family: Inter, sans-serif;
  max-width: 100%;
  width: 50% !important;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 0px;
}
.mx-calendar-panel-date {
  padding: 0;
}
.mx-calendar-header {
  -webkit-text-size-adjust: 100%;
  --litepicker-container-months-color-bg: #fff;
  --litepicker-container-months-box-shadow-color: #ddd;
  --litepicker-footer-color-bg: #fafafa;
  --litepicker-footer-box-shadow-color: #ddd;
  --litepicker-tooltip-color-bg: #fff;
  --litepicker-month-header-color: #333;
  --litepicker-button-prev-month-color: #9e9e9e;
  --litepicker-button-next-month-color: #9e9e9e;
  --litepicker-button-prev-month-color-hover: #2196f3;
  --litepicker-button-next-month-color-hover: #2196f3;
  --litepicker-month-width: calc(var(--litepicker-day-width) * 7);
  --litepicker-month-weekday-color: #9e9e9e;
  --litepicker-month-week-number-color: #9e9e9e;
  --litepicker-day-color: #333;
  --litepicker-day-color-hover: #2196f3;
  --litepicker-is-in-range-color: #bbdefb;
  --litepicker-is-locked-color: #9e9e9e;
  --litepicker-is-start-color: #fff;
  --litepicker-is-end-color: #fff;
  --litepicker-button-cancel-color: #fff;
  --litepicker-button-cancel-color-bg: #9e9e9e;
  --litepicker-button-apply-color: #fff;
  --litepicker-button-apply-color-bg: #2196f3;
  --litepicker-button-reset-color: #909090;
  --litepicker-button-reset-color-hover: #2196f3;
  --litepicker-highlighted-day-color: #333;
  --litepicker-highlighted-day-color-bg: #ffeb3b;
  --litepicker-mobilefriendly-backdrop-color-bg: #000;
  --litepicker-is-today-color: #0059c1;
  --litepicker-is-start-color-bg: #0059c1;
  --litepicker-is-end-color-bg: #0059c1;
  --litepicker-day-width: 40px;
  letter-spacing: 0;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, sans-serif;
  color: #444;
  font-family: Inter, sans-serif;
  box-sizing: border-box;
  padding: 0 4px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  overflow: hidden;
}
</style>