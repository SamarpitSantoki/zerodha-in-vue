<script>
import { reactive } from "vue";
import Calendar from "@/Calendar.vue";
import { state } from "../state";
import { DateTime } from "luxon";
import DummyHeatmap from "./DummyHeatmap.vue";
import RealHeatmap from "./RealHeatmap.vue";
const currDate = DateTime.now().toFormat("yyyy-MM-dd");
const loading = reactive({
  loading: true,
});
setTimeout(() => {
  loading.loading = false;
}, 700);
export default {
  components: { Calendar, DummyHeatmap, RealHeatmap },
  data() {
    return {
      loading,
      state,
      currDate,
      Green1: "rgb(51, 204, 51)",
      Green2: "rgb(104, 217, 104)",
      Green3: "rgb(122, 222, 122)",
      Green4: "rgb(157, 231, 157)",
      Red1: "rgb(255, 0, 0)",
      Red2: "rgb(255, 67, 67)",
      Red3: "rgb(255, 89, 89)",
      Red4: "rgb(255, 133, 133)",
      Grey: "#e1e1e1",
    };
  },

  methods: {
    increment() {
      console.log("click");
      state.changeFOLoading();
      state.clickOnFO();
      setTimeout(() => {
        state.changeFOLoading();
      }, 1000);
    },
  },
};
</script>

<template>
  <div class="section input-heatmap-section">
    <form>
      <div class="inputcontainer row">
        <div class="two columns su-input-group su-static-label">
          <label class="su-input-label">Segment</label>
          <select>
            <option value="" disabled="disabled">Select segment</option>
            <option value="EQ">Equity</option>
            <option value="FO" selected>Futures &amp; Options</option>
            <option value="CDS">Currency</option>
            <option value="COM">Commodity</option>
            <option value="MF">Mutual funds</option>
          </select>
        </div>
        <div class="two columns su-input-group su-static-label">
          <label class="su-input-label">P&amp;L</label>
          <select>
            <option value="" disabled="disabled">Select view</option>
            <option value="combined">Combined</option>
            <option value="realized">Realised P&amp;L</option>
            <option value="unrealized">Unrealised P&amp;L</option>
          </select>
        </div>
        <div class="two columns">
          <div class="su-input-group su-static-label">
            <label class="su-input-label">Symbol</label>
            <div class="">
              <input
                type="text"
                placeholder="eg: RELIANCE, INFY"
                autocorrect="off"
                maxlength="25"
                step="1"
                noerror="true"
                staticlabel="true"
                animate="true"
                label="Symbol"
                rules=""
                class=""
              />
            </div>
          </div>
        </div>
        <div class="two-half columns su-input-group su-static-label">
          <label class="su-input-label">Date range</label>
          <calendar></calendar>
        </div>
        <div
          class="two-half columns filter-component su-input-group su-static-label"
        >
          <!---->
          <div class="filter-field">
            <label class="su-input-label">Tags</label>
            <div class="filter-box tagger">
              <div class="filter-link">
                <div
                  data-v-61d92e31=""
                  class="vue-tags-input ti-focus main-input"
                >
                  <div data-v-61d92e31="" class="ti-input">
                    <ul data-v-61d92e31="" class="ti-tags">
                      <li data-v-61d92e31="" class="ti-new-tag-input-wrapper">
                        <input
                          data-v-61d92e31=""
                          placeholder="Filter by tags"
                          maxlength="20"
                          type="text"
                          size="1"
                          class="ti-new-tag-input ti-valid"
                        />
                      </li>
                    </ul>
                  </div>
                  <!---->
                </div>
                <!---->
              </div>
            </div>
          </div>
        </div>
        <div class="one columns">
          <label>&nbsp;</label><br />

          <button
            v-if="!state.FOLoading"
            @click="increment"
            type="button"
            class="btn-blue"
          >
            <span class="icon icon-arrow-right"></span>
          </button>
          <div
            v-if="state.FOLoading"
            class="lock-img-container"
            data-balloon="Please wait while your report is being built"
            data-balloon-pos="up"
          >
            <img src="../../public/lock.svg" class="lock-class" />
            <div class="su-loader">
              <span class="dot-spinner"><i></i><i></i><i></i><i></i></span>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="heatmap-section">
      <div class="heatmap-container">
        <!---->
        <DummyHeatmap v-if="state.isDummy " />
        <RealHeatmap v-if="!state.isDummy " />
        <!-- <div v-if="!state.FOLoading" class="heatmap-count">
          <span
            v-if="!loading.loading"
            class="overview-button"
            data-balloon="View last 1 year's overview"
            data-balloon-pos="up"
            ><label for="heatmap_overview_radio"
              ><input
                id="heatmap_overview_radio"
                type="radio"
                name="heatmap-overview"
                value="year"
              />
              <span>Year overview</span></label
            ></span
          >
          <span
            v-if="!loading.loading"
            class="date-fetched overview-button"
            data-balloon="View overview for fetched period"
            data-balloon-pos="up"
            ><label for="heatmap_fetched_radio"
              ><input
                id="heatmap_fetched_radio"
                type="radio"
                name="heatmap-overview"
                checked
              />
              <span v-if="!state.date" id="date_fetched_label"
                ><strong>{{ state.date ?? currDate }}</strong></span
              >

              <span v-if="state.date" id="date_fetched_label"
                ><strong>{{ state.date.from }}</strong> to
                <strong>{{ state.date.to }}</strong></span
              >
            </label></span
          >
          <p v-if="!loading.loading" class="heatmap-date heatmap-date-label">
            Gross realised P&amp;L
          </p>
          <p v-if="!loading.loading" class="heatmap-date">2022-03-25</p>
          <div
            v-if="!loading.loading"
            class="heatmap-segment"
            data-balloon="View P&amp;L"
            data-balloon-pos="up"
            @click="increment"
          >
            <p>F&amp;O:</p>
            <span>-3800.00</span>
          </div>
          <div v-if="state.FOLoading" class="heatmap-segment loader-segment">
            <div class="su-loader">
              <span class="dot-spinner"><i></i><i></i><i></i><i></i></span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>