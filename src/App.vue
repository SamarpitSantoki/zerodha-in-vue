<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppHeatmap from "./components/AppHeatmap.vue";
import AppSummary from "./components/AppSummary.vue";
import AppTable from "./components/AppTable.vue";
import { watch } from "vue";
import { state } from "./state";
import "./pl.css";

watch(
  () => state.clickedOnFO,
  () => {
    setTimeout(() => {
      state.changeTable();
      state.changeSummary();
    }, 1000);
  }
);
</script>
<template>
  <div id="app">
    <AppHeader />
    <div class="wrapper">
      <div class="page-content">
        <div class="page-container pnl">
          <h1>
            <img src="../public/bar-chart.svg" class="pnl-head-icon" />
            P&amp;L
          </h1>
          <hr class="header-hr" />
          <app-heatmap></app-heatmap>
          <app-summary v-if="state.showTable"></app-summary>
          <app-table v-if="state.showTable"></app-table>
          <!-- <div class="section text-center">
            <div
              main="Build a report"
              sub="Use the above form to generate a report"
              class="state-process-container"
            >
              <div class="state-process">
                <img src="../public/init.svg" />
                <h3 id="mainText">Build a report</h3>
                <p id="subText">Use the above form to generate a report</p>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <div class="footer-container">
          <div class="row text-grey">
            <div class="six columns nomargin-mobile">
              <a href="https://zerodha.com"
                ><img src="../public/zerodha-grey-logo.svg"
              /></a>
              <span class="text-light-grey">© 2022. All rights reserved.</span>
            </div>
            <div class="nomargin-mobile six columns text-right">
              <a
                target="_blank"
                href="https://support.zerodha.com"
                class="text-light-grey hide-on-mobile"
                >Support</a
              >
            </div>
          </div>
          <p class="text-light-grey hide-on-mobile">
            NSE &amp; BSE – SEBI Registration no.: INZ000031633 | MCX - SEBI
            Registration no.: INZ000038238 | CDSL - SEBI Registration no.:
            IN-DP-431-2019
          </p>
          <p class="text-light-grey hide-on-mobile">
            Disclaimer: The P&amp;L report/Holdings/Positions data is prepared
            based on the trades and information available with us, at the time
            of report generation. Zerodha Broking Ltd., does not make any
            warranty, express or implied, or assume any legal/consequential
            liability, or responsibility for the authenticity, and completeness
            of the data presented in this report/data. To double check your
            P&amp;L report/Holdings/Positions data, verify it with the
            Tradebook, Contract Notes and the Funds Statement which are
            available with you at all times.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
