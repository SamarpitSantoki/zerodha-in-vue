<template>
  <div class="section pnl-summary-section hide-on-mobile">
    <!---->
    <!---->
    <div class="combined pnl-summary">
      <div class="row">
        <div class="seven columns border-right">
          <div class="row">
            <div class="four columns">
              <label>Realised P&amp;L</label>
              <h1
                :class="
                  pnlSummary.realisedPL[0] == '+'
                    ? 'pos'
                    : pnlSummary.realisedPL[0] == '-'
                    ? 'neg'
                    : ''
                "
                :data-balloon="pnlSummary.realisedPLTooltip"
                data-balloon-pos="up"
              >
                <span class="inherit"> {{ pnlSummary.realisedPL }} </span>
              </h1>
            </div>
            <div class="four columns">
              <label>Charges &amp; taxes</label>
              <div class="inline">
                <h1
                  class="charges"
                  :data-balloon="'₹' + pnlSummary.chargesTooltip"
                  data-balloon-pos="up"
                >
                  {{ pnlSummary.charges }}
                </h1>
                {{ " " }}
                <a
                  href="#"
                  class="text-small"
                  data-balloon="View breakdown"
                  data-balloon-pos="up"
                  ><img
                    @click="toggleState.show()"
                    src="../../public/layers.svg"
                    class="charges-breakdown-img"
                /></a>
              </div>
            </div>
            <div class="four columns">
              <label>Other credits &amp; debits</label>
              <div class="inline">
                <h1
                  :data-balloon="pnlSummary.otherChargesTooltip"
                  data-balloon-pos="up"
                >
                  {{ pnlSummary.otherCharges }}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="three columns">
          <label>Net realised P&amp;L</label>
          <h1
            :class="
              pnlSummary.netRealisedPL[0] === '+'
                ? 'pos'
                : pnlSummary.netRealisedPL[0] === '-'
                ? 'neg'
                : ''
            "
            :data-balloon="pnlSummary.netRealisedPLTooltip"
            data-balloon-pos="up"
          >
            <span class="inherit"> {{ pnlSummary.netRealisedPL }} </span>
          </h1>
        </div>
        <div class="two columns">
          <label>Unrealised P&amp;L</label>
          <h1
            :class="
              pnlSummary.unrealisedPL[0] === '+'
                ? 'pos'
                : pnlSummary.unrealisedPL[0] === '-'
                ? 'neg'
                : ''
            "
            :data-balloon="pnlSummary.unrealisedPLTooltip"
            data-balloon-pos="up"
          >
            <span class="inherit"> {{ pnlSummary.unrealisedPL }} </span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleState } from "../toggleState";
import { pnlSummary } from "../../data";
export default {
  data() {
    return {
      toggleState,
      pnlSummary,
    };
  },
};
</script>

<style></style>