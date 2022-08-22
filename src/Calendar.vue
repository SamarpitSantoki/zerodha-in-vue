<template>
  <div id="app">
    <date-picker range v-model="value">
      <template v-slot:content="slotProps">
        <calendar-range
          :value="slotProps.value"
          @select="slotProps.emit"
        ></calendar-range>
      </template>
    </date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import CalendarRange from "./CalendarRange";
import "vue2-datepicker/index.css";

export default {
  name: "CalendarMain",
  components: {
    DatePicker,
    CalendarRange,
  },
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style>

</style>
