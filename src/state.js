// store.js
import { reactive } from "vue";

export const state = reactive({
  showTable: false,
  showSummary: false,
  clickedOnFO: false,
  FOLoading: false,
  changeTable() {
    this.showTable = !this.showTable;
  },
  changeSummary() {
    this.showSummary = !this.showSummary;
  },
  changeFOLoading() {
    this.FOLoading = !this.FOLoading;
  },
  clickOnFO() {
    this.clickedOnFO = !this.clickedOnFO;
  },
});
