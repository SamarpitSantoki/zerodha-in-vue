<script>
import { TableData } from "../../data";
export default {
  data() {
    return {
      tableData: TableData,
    };
  },
};
</script>
<template>
  <div class="section table-section">
    <p class="paginate-info text-light-grey text-small">
      Showing page 1 (rows 1 - 2 out of 2)
    </p>
    <p class="last-updated text-small text-light-grey">
      <span class="icon icon-clock"></span> Last updated: 2022-08-08
    </p>
    <div class="fetch-data">
      <!---->
    </div>
    <div
      class="table-download text-small"
      data-balloon="Download complete results as Excel"
      data-balloon-pos="up"
    >
      <span class="icon icon-download"></span>
      Download
    </div>
    <div class="search-table">
      <span class="icon icon-search"></span>
      <input
        maxlength="15"
        type="text"
        placeholder="Search"
        class="filter-input"
      />
      <span class="clear clear-symbol icon icon-times"></span>
    </div>
    <div class="table-container">
      <table id="pnl_table" class="pnl-table">
        <thead>
          <tr>
            <td class="table-border text-left sorted">
              Symbol
              <span class="arrow arrow-show arrow asc"></span>
            </td>
            <td class="table-border">
              <div
                data-balloon="This field is not sortable for combined P&amp;L"
                data-balloon-pos="up"
              >
                <div class="icon icon-info"></div>
              </div>
              Qty.
            </td>
            <td>
              <div
                data-balloon="This field is not sortable for combined P&amp;L"
                data-balloon-pos="up"
              >
                <div class="icon icon-info"></div>
              </div>
              Buy avg.
            </td>
            <td class="table-border">
              <div
                data-balloon="This field is not sortable for combined P&amp;L"
                data-balloon-pos="up"
              >
                <div class="icon icon-info"></div>
              </div>
              Buy value
            </td>
            <td>
              <div
                data-balloon="This field is not sortable for combined P&amp;L"
                data-balloon-pos="up"
              >
                <div class="icon icon-info"></div>
              </div>
              Sell avg.
            </td>
            <td class="table-border">
              <div
                data-balloon="This field is not sortable for combined P&amp;L"
                data-balloon-pos="up"
              >
                <div class="icon icon-info"></div>
              </div>
              Sell value
            </td>
            <td class="">
              Net realised P&amp;L
              <span class="arrow asc"></span>
            </td>
            <td class="">
              Net unrealised P&amp;L
              <span class="arrow asc"></span>
            </td>
          </tr>
        </thead>
        <tbody>
          <!---->
          <!---->
          <tr v-for="position in tableData" :key="position.qty">
            <td class="table-border text-left symbol-class">
              {{ position.symbol }}
              <!---->
              <div class="new-tags">
                <!---->
                <!---->
              </div>
              <div id="context-menu-48" class="context-menu table">
                <div class="context-menu-button-wrap">
                  <span
                    class="context-menu-button"
                    data-balloon="Options"
                    data-balloon-pos="up"
                    ><span class="icon icon-ellipsis"></span
                  ></span>
                </div>
                <!---->
              </div>
            </td>
            <td class="table-border">{{ position.qty }}</td>
            <td>{{ position.buyAvg }}</td>
            <td class="table-border">{{ position.buyValue }}</td>
            <td>{{ position.sellAvg }}</td>
            <td class="table-border">{{ position.sellValue }}</td>
            <td v-if="parseFloat(position.netRealisedPL) > 0" class="pos">
              {{ position.netRealisedPL }}
              <span>{{ position.netRealisedPLChange }}%</span>
            </td>
            <td v-if="parseFloat(position.netRealisedPL) < 0" class="neg">
              {{ position.netRealisedPL }}
              <span>{{ position.netRealisedPLChange }}%</span>
            </td>
            <td class="text-light-grey">–</td>
          </tr>
          <!---->
          <!---->
        </tbody>
      </table>
      <!---->
      <!---->
    </div>
  </div>
</template>

<style></style>