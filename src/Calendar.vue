<template>
  <div class="mx-datepicker">
    <date-picker range v-model="value" :lang="lang">
      <template v-slot:header="{ emit }">
        <button class="mx-btn mx-btn-text" @click="emit(new Date())">
          last 7 days
        </button>
        <button class="mx-btn mx-btn-text" @click="emit(new Date())">
          last 30 days
        </button>
      </template>
      <template v-slot:content="slotProps">
        <calendar-range :value="slotProps.value" @select="slotProps.emit">
        </calendar-range>
      </template>
    </date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import CalendarRange from "./CalendarRange";
import en from "vue2-datepicker/locale/en";
import { state } from "./state";
import "vue2-datepicker/index.css";
import { DateTime } from "luxon";
const defaultLang = {
  days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  yearFormat: "YYYY",
  monthFormat: "MMMM",
};
en.defaultLang = defaultLang;
DatePicker.locale("en");
export default {
  name: "CalendarMain",
  components: {
    DatePicker,
    CalendarRange,
  },
  data() {
    return {
      lang: {
        // the locale of formatting and parsing function
        formatLocale: {
          // MMMM
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          // MMM
          monthsShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          // dddd
          weekdays: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          // ddd
          weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          // dd
          weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          // first day of week
          firstDayOfWeek: 0,
          // first week contains January 1st.
          firstWeekContainsDate: 1,
        },
      },
      value: state.selectedDate ?? [new Date(2022, 3, 1), new Date(2022, 8, 4)],
    };
  },
  watch: {
    value(val) {
      let from = new DateTime(val[0]).toFormat("yyyy-MM-dd");
      let to = new DateTime(val[1]).toFormat("yyyy-MM-dd");
      state.changeSelectedDate(val);
      state.changeDate(from, to);
    },
  },
};
</script>
<style>
.mx-datepicker-popup {
  letter-spacing: 0;
  font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    sans-serif;
  color: #444;
  font-family: Inter, sans-serif;
  box-sizing: border-box;
  position: absolute;
  margin-bottom: 1px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  z-index: 1000;
  margin-top: -2px;
  width: 550px !important;
  left: -352px;
  top: -85px;
}

.mx-datepicker-header {
  letter-spacing: 0;
  font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    sans-serif;
  color: #444;
  font-family: Inter, sans-serif;
  box-sizing: border-box;
  text-align: left;
  padding: 0 12px;
  line-height: 34px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.mx-datepicker-body {
  letter-spacing: 0;
  font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    sans-serif;
  color: #444;
  font-family: Inter, sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  width: 550px !important;
}
.mx-calendar-header {
  padding: 0 4px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  overflow: hidden;
}
.mx-btn.mx-btn-text {
  font: inherit;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  box-sizing: border-box;
  background: none;
  outline: none;
  border: 0;
  color: #48576a;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  cursor: pointer;
  padding-right: 0 !important;
  font-size: 13px;
  font-weight: 400;
  height: 38px;
  line-height: 1;
  margin-right: 0 !important;
  width: auto !important;
  padding-left: 0;
}
.mx-calendar-content {
  letter-spacing: 0;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, sans-serif;
  color: #444;
  font-family: Inter, sans-serif;
  box-sizing: border-box;
  height: 290px !important;
  width: 250px !important;
}
.mx-calendar-header-label {
  gap: 4px;
  display: flex;
  justify-content: center;
}
.mx-btn.mx-btn-text.mx-btn-current-month,
.mx-btn.mx-btn-text.mx-btn-current-year {
  letter-spacing: 0;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, sans-serif;
  font-family: Inter, sans-serif;
  line-height: 34px;
  text-align: center;
  background-color: transparent;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  color: #444;
}
body
  > div.mx-datepicker-main.mx-datepicker-popup
  > div
  > div.mx-datepicker-body
  > div
  > div.first-cal
  > div.mx-calendar.mx-calendar-panel-date
  > div.mx-calendar-content
  > table
  > thead
  > tr {
  letter-spacing: 0;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, sans-serif;
  color: #666;
  font-weight: bold !important;
  font-family: Inter, sans-serif;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;
  text-align: right;
  box-sizing: border-box;
}
body
  > div.mx-datepicker-main.mx-datepicker-popup
  > div
  > div.mx-datepicker-body
  > div
  > div.first-cal
  > div.mx-calendar.mx-calendar-panel-date
  > div.mx-calendar-content
  > table
  > thead
  > tr
  > th {
  font-weight: bold;
}
.mx-datepicker-header .mx-btn.mx-btn-text:first-child:after {
  content: "|";
  margin: 0 9px;
  color: #48576a;
}
.mx-icon-double-left {
  letter-spacing: 0;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, sans-serif;
  font-family: Inter, sans-serif;
  text-align: center;
  background-color: transparent;
  box-sizing: border-box;
  padding: 0 6px;
  font-size: 20px;
  line-height: 30px;
  float: left;
  cursor: pointer;
  text-decoration: none;
  color: #444;
}
.mx-datepicker-header .mx-btn.mx-btn-text {
  padding: 0;
}
</style>