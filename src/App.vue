
<script>
import Calendar from './Calendar.vue';
import "./pl.css"
export default {
  components: { Calendar },};
</script>
<template>
  <div id="app" class="nomargin">
    <div class="header">
      <div class="wrapper">
        <div class="header-right menu-closed">
          <a href="/dashboard" class="logo"
            ><img src="../public/logo.svg"
          /></a>
          <a href="#" class="toggle-mobile-menu"
            ><div id="nav-icon4"><span></span> <span></span> <span></span></div
          ></a>
          <div class="app-nav hide-on-mobile">
            <a href="/dashboard" class=""><span>Dashboard</span></a>
            <a href="" class="dropdown-label portfolio-label"
              ><span class="portfolio-id">Portfolio</span></a
            >
            <a href="" class="dropdown-label reports-label router-link-active"
              ><span class="reports-id">Reports</span></a
            >
            <a href="" class="dropdown-label funds-label"
              ><span class="funds-id">Funds</span></a
            >
            <a href="/account" class=""><span>Account</span></a>
          </div>
          <div class="right-nav hide-on-mobile">
            <div class="user-nav perspective">
              <a href="" class="dropdown-label user-id"
                ><div id="avatar-17" class="profile-avatar">
                  <div
                    class="avatar"
                    style="
                      width: 25px;
                      height: 25px;
                      border-radius: 50%;
                      text-align: center;
                      vertical-align: middle;
                      background-color: rgba(76, 175, 80, 0.1);
                      font-size: 9px;
                      font-weight: 300;
                      color: rgb(76, 175, 80);
                      line-height: 26px;
                    "
                  >
                    <span>SS</span>
                  </div>
                </div>
                <span id="userDetails" name="Samarpit">DYJ713</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="page-content">
        <div class="page-container pnl">
          <h1>
            <img src="../public/bar-chart.svg" class="pnl-head-icon" />
            P&amp;L
          </h1>
          <hr class="header-hr" />
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
                  <div class="filter-field">
                    <label class="su-input-label">Tags</label>
                    <div class="filter-box tagger">
                      <div class="filter-link">
                        <div
                          data-v-61d92e31=""
                          class="vue-tags-input main-input"
                        >
                          <div data-v-61d92e31="" class="ti-input">
                            <ul data-v-61d92e31="" class="ti-tags">
                              <li
                                data-v-61d92e31=""
                                class="ti-new-tag-input-wrapper"
                              >
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
                        </div>
                      </div>
                      <div class="filter-option-container main-input">
                        <div class="filter-option">
                          <div class="filters">
                            <a href="" class="manage-tags-link"
                              ><span class="icon icon-bookmark"></span> Manage
                              tags
                            </a>
                          </div>
                        </div>
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
                <div
                  id="calendar_container"
                  style="background-color: rgb(255, 255, 255)"
                >
                  <img id="logo_img" src="../public/zerodha-logo.svg" />
                  <div id="calendar_year" style="position: relative">
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                        fill="#e1e1e1"
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
                          fill="rgb(112, 220, 112)"
                        ></rect>
                        <rect
                          class="calendar-heatmap-legend"
                          width="13"
                          height="13"
                          x="870"
                          y="132"
                          fill="rgb(112, 220, 112)"
                        ></rect>
                        <rect
                          class="calendar-heatmap-legend"
                          width="13"
                          height="13"
                          x="885"
                          y="132"
                          fill="rgb(112, 220, 112)"
                        ></rect>
                        <rect
                          class="calendar-heatmap-legend"
                          width="13"
                          height="13"
                          x="900"
                          y="132"
                          fill="rgb(112, 220, 112)"
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
                          fill="rgb(255, 77, 77)"
                        ></rect>
                        <rect
                          class="calendar-heatmap-legend"
                          width="13"
                          height="13"
                          x="670"
                          y="132"
                          fill="rgb(255, 77, 77)"
                        ></rect>
                        <rect
                          class="calendar-heatmap-legend"
                          width="13"
                          height="13"
                          x="685"
                          y="132"
                          fill="rgb(255, 77, 77)"
                        ></rect>
                        <rect
                          class="calendar-heatmap-legend"
                          width="13"
                          height="13"
                          x="700"
                          y="132"
                          fill="rgb(255, 77, 77)"
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
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="15"
                        y="10"
                      >
                        September
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="90"
                        y="10"
                      >
                        October
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="180"
                        y="10"
                      >
                        November
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="255"
                        y="10"
                      >
                        December
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="330"
                        y="10"
                      >
                        January
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="420"
                        y="10"
                      >
                        February
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="495"
                        y="10"
                      >
                        March
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="570"
                        y="10"
                      >
                        April
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="660"
                        y="10"
                      >
                        May
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="735"
                        y="10"
                      >
                        June
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="810"
                        y="10"
                      >
                        July
                      </text>
                      <text
                        class="month-name"
                        style="font-size: 10px"
                        x="900"
                        y="10"
                      >
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
                  <div id="calendar"></div>
                </div>
                <div class="heatmap-count"><p class="heatmap-date"></p></div>
              </div>
            </div>
          </div>
          <div class="section text-center">
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
