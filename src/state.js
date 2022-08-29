// store.js
import { reactive } from "vue";

export const state = reactive({
  firstLoading: true,
  showTable: false,
  showSummary: false,
  clickedOnFO: false,
  FOLoading: false,
  date: null,
  selectedDate: sessionStorage.getItem("selectedDate").split(",") ?? null,
  isDummy: sessionStorage.getItem("isDummy") ? false : true,

  changeSelectedDate(val) {
    this.selectedDate = val;
    console.log("changing date", val);
    sessionStorage.setItem("selectedDate", val);
  },
  changeDate(from, to) {
    this.date = {
      from: from,
      to: to,
    };
  },
  changeTable() {
    this.showTable = !this.showTable;
  },
  changeSummary() {
    this.showSummary = !this.showSummary;
  },
  changeFOLoading() {
    this.FOLoading = !this.FOLoading;
    this.isDummy = false;
    sessionStorage.setItem("isDummy", "false");
  },
  clickOnFO() {
    this.clickedOnFO = !this.clickedOnFO;
  },
  changeToggle() {
    this.showToggle = !this.showToggle;
  },
});
