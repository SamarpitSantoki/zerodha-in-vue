<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppHeatmap from "./components/AppHeatmap.vue";
import AppSummary from "./components/AppSummary.vue";
import AppTable from "./components/AppTable.vue";
import { onMounted, reactive } from "vue";
import { watch } from "vue";
import { state } from "./state";
import { toggleState } from "./toggleState";
import { Charges } from "../data";
import "./pl.css";
const loading = reactive({
  loading: true,
  loading2: true,
  loading3: true,
});
onMounted(() => {
  document.title = "P&L / Console";
  setTimeout(() => {
    loading.loading = false;
  }, 300);
  setTimeout(() => {
    loading.loading3 = false;
  }, 600);
  setTimeout(() => {
    loading.loading2 = false;
  }, 900);
});
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
  <div>
    <head>
      <title>P&L / Console</title>
    </head>
    <div
      v-if="loading.loading"
      id="init_loader"
      class="loader"
      style="
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
        font-size: 14px;
        letter-spacing: 0;
        color: #444;
        line-height: 1.7em;
        font-weight: 400;
        font-family: Inter, sans-serif;
        text-align: center;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 62px;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99999;
        background: #fff;
        margin-left: 5px;
      "
    >
      <div
        class="spinner"
        style="
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
          font-size: 14px;
          letter-spacing: 0;
          color: #444;
          line-height: 1.7em;
          font-weight: 400;
          font-family: Inter, sans-serif;
          text-align: center;
          position: relative;
          top: 45vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        "
      >
        <img src="../public/logo.png" />
        <div class="su-loader">
          <span class="dot-spinner"><i></i><i></i><i></i><i></i></span>
        </div>
      </div>
    </div>
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
            <app-summary
              v-if="!state.FOLoading && !loading.loading2"
            ></app-summary>
            <app-table v-if="!state.FOLoading && !loading.loading2"></app-table>
            <div
              v-if="toggleState.toggle"
              class="section pnl-charges-breakdown"
            >
              <div class="modal-mask">
                <div class="modal-wrapper">
                  <div class="modal-container">
                    <div class="modal-body">
                      <span class="close-modal" @click="toggleState.show()"
                        ><img src="../public/close.svg" alt="x"
                      /></span>
                      <h1>Charges</h1>
                      <hr />
                      <br />
                      <div class="charges-container">
                        <label>Brokerage</label>
                        <p>{{ Charges.brokerage }}</p>
                      </div>
                      <div class="charges-container">
                        <label>Exchange Transaction Charges</label>
                        <p>{{ Charges.ExchangeTransactionCharge }}</p>
                      </div>
                      <div class="charges-container">
                        <label>Clearing Charges</label>
                        <p>{{ Charges.ClearingCharges }}</p>
                      </div>
                      <div class="charges-container">
                        <label>Central GST</label>
                        <p>{{ Charges.centralGST }}</p>
                      </div>
                      <div class="charges-container">
                        <label>State GST</label>
                        <p>{{ Charges.StateGST }}</p>
                      </div>
                      <div class="charges-container">
                        <label>Integrated GST</label>
                        <p>{{ Charges.IntegratedGST }}</p>
                      </div>
                      <div class="charges-container">
                        <label>Securities Transaction Tax</label>
                        <p>{{ Charges.SecuritiesTransactionTax }}</p>
                      </div>
                      <div class="charges-container">
                        <label>SEBI Turnover Fees</label>
                        <p>{{ Charges.SEBITurnoverFees }}</p>
                      </div>
                      <div class="charges-container">
                        <label>Stamp Duty</label>
                        <p>{{ Charges.StampDuty }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="state.FOLoading" class="section text-center">
              <div
                main="Building your report"
                sub="This could take several seconds. Please wait."
                loader="true"
                class="state-process-container"
              >
                <div class="state-process">
                  <img src="../public/jobber.svg" />
                  <h3>
                    <span id="mainText">Building your report</span>
                    <div class="su-loader">
                      <span class="dot-spinner"
                        ><i></i><i></i><i></i><i></i
                      ></span>
                    </div>
                  </h3>
                  <p id="subText" class="text-light-grey text-center">
                    This could take several seconds. Please wait.
                  </p>
                </div>
              </div>
            </div>
            <div v-if="loading.loading3" class="section text-center">
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
            </div>
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
                <span class="text-light-grey"
                  >© 2022. All rights reserved.</span
                >
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
              liability, or responsibility for the authenticity, and
              completeness of the data presented in this report/data. To double
              check your P&amp;L report/Holdings/Positions data, verify it with
              the Tradebook, Contract Notes and the Funds Statement which are
              available with you at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>