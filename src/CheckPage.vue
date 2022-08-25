<script setup>
/* eslint-disable */
import { onMounted } from "vue";
import * as d3 from "d3";
import { DateTime } from "luxon";
const getWeekNumOfMonthOfDate = (d) => {
  const firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
  return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
};
async function drawHeatMap() {
  let data = [];
  const MONTHS = [
    "January",
    "Febuary",
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
  ];
  const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //make a loop to add 100 days data to data array

  for (let i = 1, weekCurr = 0; i < 32; i++) {
    const date = DateTime.utc(2022, 9, i);

    console.log(typeof date.daysInMonth);

    const day = date.day;
    const month = date.month;
    const weekDay = date.weekday;
    const weekOfYear = date.weekNumber;
    if (weekDay === 7) {
      weekCurr++;
    }
    data.push({
      DATEID: date.toISODate(), //date of that day (YYYYMMDD)
      DB_DATE: date.toISODate(), //date of that day (YYYY-MM-DD)
      DAY: day, // day of the month, from 1 to 31
      DAY_NAME_SHORT: WEEK[weekDay === 7 ? 0 : weekDay], //Name of the day
      WEEKDAYNO: weekDay, // day number in that week(0 for Sunday 6 for Saturday)
      WEEKNO: weekOfYear, //week no of the year (1 to 54 or 0 to 53)
      WEEK_OF_MONTH: weekCurr, //week no of the month(0 to 6)
      MONTHID: date.year.toString() + date.month.toString(), // month id (YYYYMM)
      M_NAME: date.monthLong, // Month
      YEARID: date.year, //year id
      ORDER_ID: "3", //one KPI you can have any other KPI
      TOTAL_AMOUNT: "504", //another optional KPI
      RECIEVED_AMOUNT: "500", //optional KPI
      DISCOUNT: "4", //optional
      ORDER_DATE: "04-04-2021", //KPI date
      BAL_FLAG: "1", // this flag will decide cell color
    });
    if (i + 1 > parseInt(date.daysInMonth)) {
      break;
    }
  }
  for (let i = 1, weekCurr = 0; i < 32; i++) {
    const date = DateTime.utc(2022, 10, i);
    const day = date.day;
    const month = date.month;
    const weekDay = date.weekday;
    const weekOfYear = date.weekNumber;
    if (weekDay === 7) {
      weekCurr++;
    }
    data.push({
      DATEID: date.toISODate(), //date of that day (YYYYMMDD)
      DB_DATE: date.toISODate(), //date of that day (YYYY-MM-DD)
      DAY: day, // day of the month, from 1 to 31
      DAY_NAME_SHORT: WEEK[weekDay === 7 ? 0 : weekDay], //Name of the day
      WEEKDAYNO: weekDay, // day number in that week(0 for Sunday 6 for Saturday)
      WEEKNO: weekOfYear, //week no of the year (1 to 54 or 0 to 53)
      WEEK_OF_MONTH: weekCurr, //week no of the month(0 to 6)
      MONTHID: date.year.toString() + date.month.toString(), // month id (YYYYMM)
      M_NAME: date.monthLong, // Month
      YEARID: date.year, //year id
      ORDER_ID: "3", //one KPI you can have any other KPI
      TOTAL_AMOUNT: "504", //another optional KPI
      RECIEVED_AMOUNT: "500", //optional KPI
      DISCOUNT: "4", //optional
      ORDER_DATE: "04-04-2021", //KPI date
      BAL_FLAG: "1", // this flag will decide cell color
    });
    if (i + 1 > parseInt(date.daysInMonth)) {
      break;
    }
  }
  for (let i = 1, weekCurr = 0; i < 31; i++) {
    const date = DateTime.utc(2022, 11, i);
    const day = date.day;
    const month = date.month;
    const weekDay = date.weekday;
    const weekOfYear = date.weekNumber;
    if (weekDay === 7) {
      weekCurr++;
    }
    data.push({
      DATEID: date.toISODate(), //date of that day (YYYYMMDD)
      DB_DATE: date.toISODate(), //date of that day (YYYY-MM-DD)
      DAY: day, // day of the month, from 1 to 31
      DAY_NAME_SHORT: WEEK[weekDay === 7 ? 0 : weekDay], //Name of the day
      WEEKDAYNO: weekDay, // day number in that week(0 for Sunday 6 for Saturday)
      WEEKNO: weekOfYear, //week no of the year (1 to 54 or 0 to 53)
      WEEK_OF_MONTH: weekCurr, //week no of the month(0 to 6)
      MONTHID: date.year.toString() + date.month.toString(), // month id (YYYYMM)
      M_NAME: date.monthLong, // Month
      YEARID: date.year, //year id
      ORDER_ID: "3", //one KPI you can have any other KPI
      TOTAL_AMOUNT: "504", //another optional KPI
      RECIEVED_AMOUNT: "500", //optional KPI
      DISCOUNT: "4", //optional
      ORDER_DATE: "04-04-2021", //KPI date
      BAL_FLAG: "1", // this flag will decide cell color
    });
    if (i + 1 > parseInt(date.daysInMonth)) {
      break;
    }
  }

  const dataset = data;
  // dataset grouping at different levels

  var months = d3.groups(dataset, (d) => d.MONTHID);
  var months_name = d3.groups(dataset, (d) => d.M_NAME);
  var week = ["", "M", "", "W", "", "F"];
  //   var week = ["M", "", "W", "", "F", "", ""];
  var legends = ["Balance Pending", "No Order Recieved", "Order Recieved"];

  var box = 13; //cell size - ideal is 12 to 25

  //Dimensions
  var dim = {
    width: 12 * 80 + 60,
    height: box * 7 + 80,
    margin: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    },
  };

  dim.ctrWidth = dim.width - dim.margin.left - dim.margin.right;
  dim.ctrHeight = dim.height - dim.margin.top - dim.margin.bottom;

  // Accessor Functions:
  var balanceFlagAccessor = (d) => d.BAL_FLAG;
  var dayNameAccessor = (d) => d.DAY_NAME_SHORT;
  var orderAmountAccessor = (d) => d.TOTAL_AMOUNT;
  var balanceAmountAccessor = (d) =>
    d.TOTAL_AMOUNT - d.DISCOUNT - d.RECIEVED_AMOUNT;
  var dateAccessor = (d) => d.DB_DATE;
  var weekDayNoAccessor = (d) => d.WEEKDAYNO;
  var weekOfMonthAccessor = (d) => d.WEEK_OF_MONTH;

  // colorScale
  var colorScale = d3
    .scaleQuantize()
    .domain([-1, 1])
    .range(["#c4405e", "#dfe1e4", "#40c463"]);

  //Parent SVG
  var svg = d3
    .select("#orderHeatMap")
    .append("svg")
    .attr("width", dim.width)
    .attr("height", dim.height)
    .classed("svg-area", true);

  //container
  var ctr = svg
    .append("g")
    .attr("transform", `translate(${dim.margin.left},${dim.margin.top})`);

  //Heat Maps Container
  var heatMapCtr = ctr.append("g").attr("transform", `translate(50,30)`);

  // Week Labels
  var weekGroup = ctr
    .append("g")
    .attr("transform", `translate(0,${dim.margin.top + 50})`)
    .selectAll("text")
    .data(week)
    .join("text")
    .style("font-size", `13px`)
    .text((d) => d)
    .attr("y", (d, i) => box * (i % 6))
    .attr("x", 0);
  // loop to render heatmaps

  for (let j = 0; j < months.length; j++) {
    // Month Labels
    heatMapCtr
      .append("g")
      .attr("transform", `translate(${j * (box * 6 + 20)},10)`)
      .append("text")
      .attr("x", 0)
      .classed("heatMapMonths-labels", true)
      .text(months_name[j][0]);

    // Monthly Heatmap
    heatMapCtr
      .append("g")
      .attr("transform", `translate(${j * (box * 6 + 20)},20)`)
      .selectAll("rect")
      .data(months[j][1])
      .join("rect")
      .attr("width", box)
      .attr("height", box)
      .attr("y", (d, i) => (box + 1) * (weekDayNoAccessor(d) % 7))
      .attr("x", (d, i) => (box + 1) * weekOfMonthAccessor(d))
      .attr("fill", (d) => colorScale(balanceFlagAccessor(d)))
      .on("mouseenter", function () {
        d3.select(this).attr("stroke", "black").attr("stroke-width", 2);
      })
      .on("mouseleave", function () {
        d3.select(this).attr("stroke", "black").attr("stroke-width", 0);
      })
      .append("text")
      .append("title")
      .text(
        (d) =>
          "Date : " +
          dateAccessor(d) +
          ", Day : " +
          dayNameAccessor(d) +
          ", Sale : " +
          orderAmountAccessor(d) +
          ", Balance : " +
          balanceAmountAccessor(d)
      );
  }

  // Legends
  var legend = ctr.append("g").attr("transform", `translate(0,10)`);

  legend
    .selectAll("rect")
    .data(legends)
    .join("rect")
    .attr("width", box)
    .attr("height", box)
    .attr("x", (d, i) => 140 * (i % 3))
    .attr("y", -11)
    .attr("fill", (d, i) => colorScale(i - 1));

  legend
    .selectAll("text")
    .data(legends)
    .join("text")
    .attr("x", (d, i) => 140 * (i % 3) + box + 2)
    .attr("y", 0)
    .text((d) => d)
    .style("font-size", "13px");
}
onMounted(() => {
  drawHeatMap();
});
</script>
<template>
  <div id="app">
    <div
      id="orderHeatMap"
      style="overflow-x: scroll; width: 80%; margin: 0 auto; width: 100vw"
    >
      <center>
        <h4 style="font-family: Arial, Helvetica, sans-serif; color: grey">
          Order Month Calendar
        </h4>
      </center>
    </div>
  </div>
</template>
<style scoped>
.svg-area {
  background-color: rgb(255, 255, 255) !important;
  border: 1px solid rgb(226, 226, 226);
  font-family: Arial, Helvetica, sans-serif;
  color: #272727 !important;
}
.heatMapMonths-labels {
  /* text-anchor: middle; */
  font-size: 312px;
}
</style>
