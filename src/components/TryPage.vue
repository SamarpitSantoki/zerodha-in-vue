<template>
  <div class="calendar-heatmap"></div>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted } from "vue";
import { DateTime } from "luxon";
import {CalendarDates} from '../../data'
onMounted(() => {
  let skipCol = -13;
  console.log(d3);
  var width = 900,
    height = 130,
    cellSize = 13,
    week_days = ["", "M", "", "W", "", "F", ""],
    month = [
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
    ];

  var day = d3.timeFormat("%w"),
    week = d3.timeFormat("%U"),
    format = d3.timeFormat("%Y%m%d")
  
  
  let startDate = CalendarDates.startDate
  let endDate = CalendarDates.endDate
  let startWeek = week(new Date(startDate.year,startDate.month,1))


  let monthPosition = [40, 140, 215, 280, 360, 435, 505, 590, 670, 740, 845, 935];

  var svg = d3
    .select(".calendar-heatmap")
    .selectAll("svg")
    .data(d3.range(2021, 2022))
    .enter()
    .append("svg")
    .attr("width", "1200")
    .attr("height", "145")
    .attr("data-height", "0.5678")
    .attr("viewBox", "0 0 1200 145")
    .attr("class", "RdYlGn")
    .append("g")
    .attr(
      "transform",
      "translate(13,15)"
    );

  

  for (var i = 0; i < 7; i++) {
    svg
      .append("text")
      .attr('class','day-initial')
      .attr("transform", "translate(-8," + (cellSize+1) * (i + 1) + ")")
      .text(function () {
        return week_days[i];
      });
  }

   svg
    .selectAll(".day")
    .data(function (d) {
      const i = d
      
      return d3.timeDays(new Date(startDate.year, startDate.month, 1), new Date(endDate.year, endDate.month, 1));
    })
    .enter()
    .append("rect")
    .attr("date",function(d){return d})
    .attr("class", "day")
    .attr("style",{background:'transparent'})
    .attr("width", cellSize)
    .attr("height", cellSize)
    .attr("x", function (d, ) {
      
      const da = DateTime.fromJSDate(new Date(d));
      if (da.c.day === 1) {
        skipCol += cellSize+2
        ;
      }
      // if(da.c.month === )
      if(da.c.month > startDate.month)
      return (week(d)-startWeek) * (cellSize + 2) + skipCol ;
      else 
      return (parseInt(week(d))+52-startWeek) * (cellSize + 2) + skipCol ;
    })
    .attr("y", function (d) {
      return day(d) * (cellSize + 2);
    })
    .attr("fill", "#fff")
    .attr("data-value", function (d) {
      return d;
    })
    .datum(format);

  var legend = svg
    .selectAll(".legend")
    .data(month)
    .enter()
    .append("g")
    .attr("class", "legend");
  //   .attr("transform", function(d, i) { console.log('check',d);return "translate(" + (parseFloat(monthPosition[i])+38 ) + ",0)"; });

  legend
    .append("text")
    // .attr("class", function (d, i) {
    //   return month[i];
    // })
    .attr("class", 'month-name')
    .style("text-anchor", "end")
    .style('font-size','10px')
    .attr("x", function (d, i) {
      return monthPosition[i];
    })
    .attr("y", 0)
    .attr("dy", "-.55em")
    .text(function (d, i) {
      return month[i];
    });

  svg
    .selectAll(".month")
    .data(function (d) {
      return d3.timeMonths(new Date(d, 0, 1), new Date(d, 2, 1));
    })
    .enter()
    .append("path")
    .attr("class", "month")
    .attr("id", function (d, i) {
      return month[i];
    })
    .attr("d", monthPath);

  

  function monthPath(t0) {
    var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = +day(t0),
      w0 = +week(t0),
      d1 = +day(t1),
      w1 = +week(t1);
    return (
      "M" +
      (w0 + 1) * cellSize +
      "," +
      d0 * cellSize +
      "H" +
      w0 * cellSize +
      "V" +
      7 * cellSize +
      "H" +
      w1 * cellSize +
      "V" +
      (d1 + 1) * cellSize +
      "H" +
      (w1 + 1) * cellSize +
      "V" +
      0 +
      "H" +
      (w0 + 1) * cellSize +
      "Z"
    );
  }
});
</script>

<style>
.calender-map {
  font: 10px sans-serif;
  shape-rendering: crispEdges;
}
.day {
  /* stroke: #666; */
  fill: #e1e1e1;
}
.day:hover{
  stroke: #555;
  stroke-width: 1px;
  cursor: pointer;
}
.month {
  fill: none;
}
.RdYlGn .q0-11 {
  fill: rgb(165, 0, 38);
}
.RdYlGn .q1- {
  fill: rgb(215, 48, 39);
}
.RdYlGn .q2-11 {
  fill: rgb(244, 109, 67);
}
.RdYlGn .q3-11 {
  fill: rgb(253, 174, 97);
}
.RdYlGn .q4-11 {
  fill: rgb(254, 224, 139);
}
.RdYlGn .q5-11 {
  fill: rgb(255, 255, 191);
}
.RdYlGn .q6-11 {
  fill: rgb(217, 239, 139);
}
.RdYlGn .q7-11 {
  fill: rgb(166, 217, 106);
}
.RdYlGn .q8-11 {
  fill: rgb(102, 189, 99);
}
.RdYlGn .q9-11 {
  fill: rgb(26, 152, 80);
}
.RdYlGn .q10-11 {
  fill: rgb(0, 104, 55);
}
</style>
