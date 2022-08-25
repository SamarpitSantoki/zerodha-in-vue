// store.js
import { reactive } from "vue";

export const state = reactive({
  showTable: false,
  showSummary: false,
  clickedOnFO: false,
  FOLoading: false,
  date: null,
  selectedDate: null,
  isDummy: true,
  changeSelectedDate(val) {
    this.selectedDate = val;
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
  },
  clickOnFO() {
    this.clickedOnFO = !this.clickedOnFO;
  },
});
