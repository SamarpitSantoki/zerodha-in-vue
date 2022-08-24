<script>
import Calendar from "@/Calendar.vue";
import { state } from "../state";

export default {
  components: { Calendar },
  data() {
    return {
      state,
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
            <option value="FO">Futures &amp; Options</option>
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
          <button type="button" class="btn-blue">
            <span class="icon icon-arrow-right"></span>
          </button>
        </div>
      </div>
    </form>
    <div class="heatmap-section">
      <div class="heatmap-container">
        <!---->
        <div
          id="calendar_container"
          style="background-color: rgb(255, 255, 255)"
        >
          <img id="logo_img" src="/static/images/zerodha-logo.svg" />
          <div id="calendar_year" style="position: relative; display: block">
            <svg
              width="990"
              class="calendar-heatmap"
              id="calendar_heatmap"
              height="130"
            >
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Sep 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="15"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Sep 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="15"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Sep 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="15"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Sep 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="15"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Sep 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Sep 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Sep 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Sep 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Sep 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Sep 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Sep 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Sep 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Sep 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Sep 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Sep 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Sep 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Sep 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Sep 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Sep 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Sep 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Sep 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Sep 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Sep 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Sep 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Sep 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Sep 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Sep 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Sep 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Sep 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Sep 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Oct 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="90"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Oct 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="90"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Oct 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Oct 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Oct 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Oct 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Oct 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(131, 224, 131)"
                date="Fri Oct 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Oct 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Oct 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Oct 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Oct 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Oct 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Oct 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Oct 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Oct 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Oct 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Oct 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Oct 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Oct 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Oct 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Oct 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Oct 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Oct 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Oct 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Oct 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Oct 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Oct 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Oct 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Oct 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Oct 31 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="165"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Nov 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="180"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Nov 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="180"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Nov 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="180"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Nov 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="180"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Nov 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="180"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Nov 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="180"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Nov 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(156, 231, 156)"
                date="Mon Nov 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Nov 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(112, 220, 112)"
                date="Wed Nov 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Nov 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Nov 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Nov 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Nov 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Nov 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Nov 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Nov 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Nov 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Nov 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Nov 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Nov 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(155, 231, 155)"
                date="Mon Nov 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Nov 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Nov 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Nov 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Nov 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Nov 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Nov 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="240"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Nov 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="240"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Nov 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="240"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Dec 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="255"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(157, 231, 157)"
                date="Thu Dec 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="255"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Dec 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="255"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Dec 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="255"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Dec 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Dec 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Dec 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Dec 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Dec 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Dec 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Dec 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Dec 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Dec 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Dec 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Dec 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Dec 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Dec 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Dec 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Dec 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Dec 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Dec 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Dec 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Dec 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Dec 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Dec 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Dec 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Dec 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Dec 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Dec 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Dec 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Dec 31 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jan 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="330"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jan 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jan 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jan 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jan 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jan 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jan 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jan 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jan 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jan 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jan 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jan 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jan 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jan 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jan 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jan 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jan 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jan 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jan 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jan 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jan 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jan 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jan 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jan 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jan 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jan 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jan 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jan 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jan 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jan 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="405"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jan 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="405"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Feb 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="420"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Feb 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="420"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Feb 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="420"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Feb 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="420"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Feb 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="420"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Feb 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Feb 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Feb 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Feb 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Feb 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Feb 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Feb 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Feb 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Feb 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Feb 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Feb 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Feb 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Feb 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Feb 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Feb 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Feb 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Feb 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Feb 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Feb 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Feb 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Feb 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Feb 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="480"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Feb 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="480"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Mar 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="495"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Mar 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="495"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Mar 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="495"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Mar 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="495"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Mar 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="495"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Mar 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Mar 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Mar 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Mar 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(125, 223, 125)"
                date="Thu Mar 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Mar 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Mar 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Mar 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Mar 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Mar 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Mar 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Mar 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Mar 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Mar 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Mar 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 120, 120)"
                date="Mon Mar 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(142, 227, 142)"
                date="Tue Mar 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 67, 67)"
                date="Wed Mar 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(154, 230, 154)"
                date="Thu Mar 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 108, 108)"
                date="Fri Mar 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Mar 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Mar 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(153, 230, 153)"
                date="Mon Mar 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(143, 227, 143)"
                date="Tue Mar 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(138, 226, 138)"
                date="Wed Mar 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(126, 223, 126)"
                date="Thu Mar 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(128, 224, 128)"
                date="Fri Apr 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="570"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Apr 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="570"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Apr 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 75, 75)"
                date="Mon Apr 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 126, 126)"
                date="Tue Apr 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 121, 121)"
                date="Wed Apr 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 66, 66)"
                date="Thu Apr 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(142, 227, 142)"
                date="Fri Apr 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Apr 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Apr 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(156, 231, 156)"
                date="Mon Apr 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 129, 129)"
                date="Tue Apr 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 72, 72)"
                date="Wed Apr 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Apr 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Apr 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Apr 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Apr 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(136, 226, 136)"
                date="Mon Apr 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 114, 114)"
                date="Tue Apr 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(153, 230, 153)"
                date="Wed Apr 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(151, 229, 151)"
                date="Thu Apr 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(149, 229, 149)"
                date="Fri Apr 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Apr 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Apr 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 107, 107)"
                date="Mon Apr 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 133, 133)"
                date="Tue Apr 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(134, 225, 134)"
                date="Wed Apr 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(134, 225, 134)"
                date="Thu Apr 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(135, 225, 135)"
                date="Fri Apr 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Apr 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun May 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 122, 122)"
                date="Mon May 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue May 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 67, 67)"
                date="Wed May 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 100, 100)"
                date="Thu May 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 118, 118)"
                date="Fri May 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat May 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun May 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 122, 122)"
                date="Mon May 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 130, 130)"
                date="Tue May 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(153, 230, 153)"
                date="Wed May 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 126, 126)"
                date="Thu May 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 93, 93)"
                date="Fri May 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat May 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun May 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 110, 110)"
                date="Mon May 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue May 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 114, 114)"
                date="Wed May 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(119, 221, 119)"
                date="Thu May 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri May 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat May 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun May 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(154, 230, 154)"
                date="Mon May 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 117, 117)"
                date="Tue May 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 121, 121)"
                date="Wed May 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(139, 226, 139)"
                date="Thu May 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 106, 106)"
                date="Fri May 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat May 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun May 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="720"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 119, 119)"
                date="Mon May 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="720"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(149, 229, 149)"
                date="Tue May 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="720"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(150, 229, 150)"
                date="Wed Jun 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="735"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(128, 224, 128)"
                date="Thu Jun 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="735"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(148, 229, 148)"
                date="Fri Jun 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="735"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jun 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="735"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jun 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(156, 231, 156)"
                date="Mon Jun 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(153, 230, 153)"
                date="Tue Jun 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(123, 222, 123)"
                date="Wed Jun 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 132, 132)"
                date="Thu Jun 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(151, 229, 151)"
                date="Fri Jun 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jun 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jun 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(150, 229, 150)"
                date="Mon Jun 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 127, 127)"
                date="Tue Jun 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 126, 126)"
                date="Wed Jun 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 67, 67)"
                date="Thu Jun 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(153, 230, 153)"
                date="Fri Jun 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jun 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jun 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(144, 228, 144)"
                date="Mon Jun 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 128, 128)"
                date="Tue Jun 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(139, 226, 139)"
                date="Wed Jun 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 82, 82)"
                date="Thu Jun 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 131, 131)"
                date="Fri Jun 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jun 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jun 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(147, 228, 147)"
                date="Mon Jun 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 111, 111)"
                date="Tue Jun 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(147, 228, 147)"
                date="Wed Jun 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(97, 216, 97)"
                date="Thu Jun 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(137, 226, 137)"
                date="Fri Jul 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="810"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jul 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="810"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jul 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(138, 226, 138)"
                date="Mon Jul 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(141, 227, 141)"
                date="Tue Jul 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 102, 102)"
                date="Wed Jul 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(143, 227, 143)"
                date="Thu Jul 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(146, 228, 146)"
                date="Fri Jul 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jul 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jul 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(143, 227, 143)"
                date="Mon Jul 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(140, 227, 140)"
                date="Tue Jul 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 13, 13)"
                date="Wed Jul 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 111, 111)"
                date="Thu Jul 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 0, 0)"
                date="Fri Jul 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jul 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jul 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(93, 215, 93)"
                date="Mon Jul 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 44, 44)"
                date="Tue Jul 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(149, 229, 149)"
                date="Wed Jul 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 84, 84)"
                date="Thu Jul 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 73, 73)"
                date="Fri Jul 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jul 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jul 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(147, 228, 147)"
                date="Mon Jul 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(128, 223, 128)"
                date="Tue Jul 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 124, 124)"
                date="Wed Jul 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(51, 204, 51)"
                date="Thu Jul 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(147, 228, 147)"
                date="Fri Jul 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jul 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jul 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="885"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(112, 219, 112)"
                date="Mon Aug 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="900"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 46, 46)"
                date="Tue Aug 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="900"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(150, 229, 150)"
                date="Wed Aug 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="900"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 3, 3)"
                date="Thu Aug 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="900"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 103, 103)"
                date="Fri Aug 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="900"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Aug 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="900"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Aug 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 107, 107)"
                date="Mon Aug 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Aug 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(134, 225, 134)"
                date="Wed Aug 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(104, 218, 104)"
                date="Thu Aug 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(124, 223, 124)"
                date="Fri Aug 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Aug 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Aug 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Aug 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(136, 226, 136)"
                date="Tue Aug 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(137, 226, 137)"
                date="Wed Aug 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(157, 231, 157)"
                date="Thu Aug 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(255, 0, 0)"
                date="Fri Aug 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Aug 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Aug 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(114, 220, 114)"
                date="Mon Aug 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Aug 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Aug 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Aug 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Aug 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Aug 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Aug 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="960"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Aug 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="960"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Aug 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="960"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Aug 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="960"
                y="61"
              ></rect>
              <g>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="855"
                  y="132"
                  fill="rgb(157, 231, 157)"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="870"
                  y="132"
                  fill="rgb(122, 222, 122)"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="885"
                  y="132"
                  fill="rgb(104, 217, 104)"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="900"
                  y="132"
                  fill="rgb(51, 204, 51)"
                ></rect>
                <text
                  class="calendar-heatmap-legend-text calendar-heatmap-legend-text-less"
                  x="800"
                  y="143"
                >
                  Min. profit
                </text>
                <text
                  class="calendar-heatmap-legend-text calendar-heatmap-legend-text-more"
                  x="917"
                  y="143"
                >
                  Max. profit
                </text>
              </g>
              <g>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="655"
                  y="132"
                  fill="rgb(255, 133, 133)"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="670"
                  y="132"
                  fill="rgb(255, 89, 89)"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="685"
                  y="132"
                  fill="rgb(255, 67, 67)"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="700"
                  y="132"
                  fill="rgb(255, 0, 0)"
                ></rect>
                <text
                  class="calendar-heatmap-legend-text calendar-heatmap-legend-text-less"
                  x="600"
                  y="143"
                >
                  Min. loss
                </text>
                <text
                  class="calendar-heatmap-legend-text calendar-heatmap-legend-text-more"
                  x="717"
                  y="143"
                >
                  Max. loss
                </text>
              </g>
              <text class="month-name" style="font-size: 10px" x="15" y="10">
                September
              </text>
              <text class="month-name" style="font-size: 10px" x="90" y="10">
                October
              </text>
              <text class="month-name" style="font-size: 10px" x="180" y="10">
                November
              </text>
              <text class="month-name" style="font-size: 10px" x="255" y="10">
                December
              </text>
              <text class="month-name" style="font-size: 10px" x="330" y="10">
                January
              </text>
              <text class="month-name" style="font-size: 10px" x="420" y="10">
                February
              </text>
              <text class="month-name" style="font-size: 10px" x="495" y="10">
                March
              </text>
              <text class="month-name" style="font-size: 10px" x="570" y="10">
                April
              </text>
              <text class="month-name" style="font-size: 10px" x="660" y="10">
                May
              </text>
              <text class="month-name" style="font-size: 10px" x="735" y="10">
                June
              </text>
              <text class="month-name" style="font-size: 10px" x="810" y="10">
                July
              </text>
              <text class="month-name" style="font-size: 10px" x="900" y="10">
                August
              </text>
              <text
                class="day-initial"
                transform="translate(5,40)"
                dy="2"
                style="font-size: 10px"
              >
                M
              </text>
              <text
                class="day-initial"
                transform="translate(5,70)"
                dy="2"
                style="font-size: 10px"
              >
                W
              </text>
              <text
                class="day-initial"
                transform="translate(5,100)"
                dy="2"
                style="font-size: 10px"
              >
                F
              </text>
            </svg>
          </div>
          <div id="calendar" style="display: none; position: relative">
            <svg
              width="990"
              class="calendar-heatmap"
              id="calendar_heatmap"
              height="130"
            >
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="15"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jul 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="15"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jul 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="15"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jul 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jul 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jul 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jul 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jul 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jul 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jul 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="30"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jul 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jul 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jul 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jul 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jul 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jul 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jul 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="45"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jul 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jul 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jul 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jul 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jul 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jul 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jul 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="60"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jul 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jul 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jul 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jul 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jul 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jul 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jul 31 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="75"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Aug 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Aug 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Aug 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Aug 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Aug 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Aug 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Aug 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="105"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Aug 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Aug 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Aug 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Aug 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Aug 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Aug 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Aug 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="120"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Aug 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Aug 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Aug 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Aug 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Aug 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Aug 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Aug 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="135"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Aug 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Aug 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Aug 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Aug 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Aug 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Aug 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Aug 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="150"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Aug 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="165"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Aug 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="165"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Aug 31 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="165"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Sep 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="180"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Sep 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="180"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Sep 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="180"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Sep 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="180"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Sep 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Sep 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Sep 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Sep 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Sep 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Sep 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Sep 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="195"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Sep 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Sep 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Sep 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Sep 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Sep 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Sep 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Sep 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="210"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Sep 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Sep 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Sep 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Sep 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Sep 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Sep 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Sep 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="225"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Sep 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="240"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Sep 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="240"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Sep 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="240"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Sep 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="240"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Sep 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="240"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Oct 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="255"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Oct 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="255"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Oct 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Oct 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Oct 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Oct 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Oct 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Oct 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Oct 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="270"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Oct 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Oct 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Oct 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Oct 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Oct 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Oct 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Oct 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="285"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Oct 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Oct 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Oct 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Oct 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Oct 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Oct 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Oct 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="300"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Oct 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Oct 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Oct 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Oct 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Oct 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Oct 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Oct 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="315"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Oct 31 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="330"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Nov 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Nov 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Nov 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Nov 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Nov 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Nov 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="345"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Nov 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Nov 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Nov 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Nov 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Nov 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Nov 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Nov 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="360"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Nov 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Nov 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Nov 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Nov 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Nov 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Nov 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Nov 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="375"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Nov 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Nov 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Nov 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Nov 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Nov 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Nov 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Nov 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="390"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Nov 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="405"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Nov 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="405"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Nov 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="405"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Dec 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="420"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Dec 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="420"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Dec 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="420"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Dec 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="420"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Dec 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Dec 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Dec 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Dec 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Dec 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Dec 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Dec 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="435"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Dec 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Dec 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Dec 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Dec 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Dec 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Dec 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Dec 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="450"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Dec 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Dec 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Dec 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Dec 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Dec 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Dec 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Dec 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="465"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Dec 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="480"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Dec 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="480"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Dec 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="480"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Dec 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="480"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Dec 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="480"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Dec 31 2021 00:00:00 GMT+0530 (India Standard Time)"
                x="480"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jan 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="495"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jan 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jan 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jan 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jan 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jan 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jan 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jan 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="510"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jan 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jan 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jan 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jan 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jan 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jan 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jan 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="525"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jan 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jan 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jan 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jan 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jan 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jan 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jan 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="540"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jan 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jan 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jan 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jan 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jan 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jan 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jan 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="555"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jan 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="570"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jan 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="570"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Feb 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Feb 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Feb 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Feb 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Feb 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="585"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Feb 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Feb 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Feb 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Feb 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Feb 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Feb 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Feb 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="600"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Feb 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Feb 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Feb 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Feb 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Feb 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Feb 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Feb 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="615"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Feb 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Feb 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Feb 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Feb 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Feb 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Feb 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Feb 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="630"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Feb 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="645"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Feb 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="645"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Mar 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Mar 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Mar 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Mar 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Mar 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="660"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Mar 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Mar 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Mar 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Mar 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Mar 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Mar 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Mar 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="675"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Mar 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Mar 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Mar 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Mar 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Mar 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Mar 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Mar 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="690"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Mar 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Mar 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Mar 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Mar 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Mar 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Mar 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Mar 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="705"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Mar 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="720"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Mar 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="720"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Mar 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="720"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Mar 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="720"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Mar 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="720"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Apr 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="735"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Apr 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="735"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Apr 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Apr 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Apr 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Apr 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Apr 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Apr 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Apr 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="750"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Apr 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Apr 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Apr 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Apr 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Apr 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Apr 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Apr 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="765"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Apr 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Apr 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Apr 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Apr 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Apr 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Apr 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Apr 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="780"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Apr 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Apr 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Apr 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Apr 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Apr 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Apr 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Apr 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="795"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun May 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon May 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue May 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed May 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu May 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri May 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat May 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="825"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun May 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon May 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue May 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed May 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu May 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri May 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat May 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="840"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun May 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon May 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue May 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed May 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu May 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri May 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat May 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="855"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun May 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon May 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue May 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed May 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu May 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri May 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat May 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="870"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun May 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="885"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon May 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="885"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue May 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="885"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jun 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="900"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jun 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="900"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jun 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="900"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jun 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="900"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jun 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jun 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jun 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jun 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jun 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="rgb(51, 204, 51)"
                date="Fri Jun 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jun 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="915"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jun 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jun 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jun 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jun 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jun 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jun 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jun 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="930"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jun 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jun 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jun 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jun 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jun 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="76"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Fri Jun 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="91"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sat Jun 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="945"
                y="106"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Sun Jun 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="960"
                y="16"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Mon Jun 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="960"
                y="31"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Tue Jun 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="960"
                y="46"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Wed Jun 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="960"
                y="61"
              ></rect>
              <rect
                class="day-cell"
                width="13"
                height="13"
                cursor="pointer"
                border-radius="2px"
                fill="#e1e1e1"
                date="Thu Jun 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                x="960"
                y="76"
              ></rect>
              <g>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="855"
                  y="132"
                  fill="rgb(157, 231, 157)"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="870"
                  y="132"
                  fill="rgb(122, 222, 122)"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="885"
                  y="132"
                  fill="rgb(104, 217, 104)"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="900"
                  y="132"
                  fill="rgb(51, 204, 51)"
                ></rect>
                <text
                  class="calendar-heatmap-legend-text calendar-heatmap-legend-text-less"
                  x="800"
                  y="143"
                >
                  Min. profit
                </text>
                <text
                  class="calendar-heatmap-legend-text calendar-heatmap-legend-text-more"
                  x="917"
                  y="143"
                >
                  Max. profit
                </text>
              </g>
              <g>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="655"
                  y="132"
                  fill="rgb(255, 0, 0)"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="670"
                  y="132"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="685"
                  y="132"
                ></rect>
                <rect
                  class="calendar-heatmap-legend"
                  width="13"
                  height="13"
                  x="700"
                  y="132"
                ></rect>
                <text
                  class="calendar-heatmap-legend-text calendar-heatmap-legend-text-less"
                  x="600"
                  y="143"
                >
                  Min. loss
                </text>
                <text
                  class="calendar-heatmap-legend-text calendar-heatmap-legend-text-more"
                  x="717"
                  y="143"
                >
                  Max. loss
                </text>
              </g>
              <text class="month-name" style="font-size: 10px" x="15" y="10">
                July
              </text>
              <text class="month-name" style="font-size: 10px" x="105" y="10">
                August
              </text>
              <text class="month-name" style="font-size: 10px" x="180" y="10">
                September
              </text>
              <text class="month-name" style="font-size: 10px" x="255" y="10">
                October
              </text>
              <text class="month-name" style="font-size: 10px" x="345" y="10">
                November
              </text>
              <text class="month-name" style="font-size: 10px" x="420" y="10">
                December
              </text>
              <text class="month-name" style="font-size: 10px" x="495" y="10">
                January
              </text>
              <text class="month-name" style="font-size: 10px" x="585" y="10">
                February
              </text>
              <text class="month-name" style="font-size: 10px" x="660" y="10">
                March
              </text>
              <text class="month-name" style="font-size: 10px" x="735" y="10">
                April
              </text>
              <text class="month-name" style="font-size: 10px" x="825" y="10">
                May
              </text>
              <text class="month-name" style="font-size: 10px" x="900" y="10">
                June
              </text>
              <text
                class="day-initial"
                transform="translate(5,40)"
                dy="2"
                style="font-size: 10px"
              >
                M
              </text>
              <text
                class="day-initial"
                transform="translate(5,70)"
                dy="2"
                style="font-size: 10px"
              >
                W
              </text>
              <text
                class="day-initial"
                transform="translate(5,100)"
                dy="2"
                style="font-size: 10px"
              >
                F
              </text>
            </svg>
          </div>
          <!---->
          <!---->
        </div>
        <div class="heatmap-count">
          <span
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
            class="date-fetched overview-button"
            data-balloon="View overview for fetched period"
            data-balloon-pos="up"
            ><label for="heatmap_fetched_radio"
              ><input
                id="heatmap_fetched_radio"
                type="radio"
                name="heatmap-overview"
                value="dateFetched"
              />
              <span id="date_fetched_label"
                ><strong>2022-06-10</strong></span
              ></label
            ></span
          >
          <p class="heatmap-date heatmap-date-label">Gross realised P&amp;L</p>
          <p class="heatmap-date">2022-03-25</p>
          <!---->
          <div
            class="heatmap-segment"
            data-balloon="View P&amp;L"
            data-balloon-pos="up"
            @click="increment"
          >
            <p>F&amp;O:</p>
            <span>-3800.00</span>
          </div>
          <!---->
          <!---->
          <div v-if="state.FOLoading" class="heatmap-segment loader-segment">
            <div class="su-loader">
              <span class="dot-spinner"><i></i><i></i><i></i><i></i></span>
            </div>
          </div>
          <!---->
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>
